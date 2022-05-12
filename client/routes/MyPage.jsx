const React = require('react');
import MyBookRow from '../components/MyBookRow';

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myoldbooks: [{
        artist: 'Led Zeppelin',
        title:  'Stairway to Heaven',
        year: 1972
      }],
    }
    this.getMyOldBooks();
    this.rerender = this.rerender.bind(this);
    this.getMyOldBooks = this.getMyOldBooks.bind(this);
    this.addOldBook = this.addOldBook.bind(this);
  }

  getMyOldBooks = () => {
    fetch('/api/getMyOldBookList', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ myoldbooks: data });
      });
  }

  addOldBook = (e) => {
    e.preventDefault();
    fetch('/api/record/addRecordByRelease', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ release: document.getElementById('release').value, condition: document.getElementById('condition').value, userID: '1' })
    })
      .then(response => response.json())
      .then((data) => {
        console.log('hey i am in mypage good job', data);
        let prevState = this.state.myoldbooks; // an array;
        this.setState({
          myoldbooks: [...prevState, data]
        })
      });
  }

  rerender = () => {
    this.getMyOldBooks();
    window.location.href = window.location.href;
  }

  render() {
    let table;
    const rows = [];
    if (this.state.myoldbooks.length > 0) {
      rows.push(
        <tr>
          <th key={0}>Artist</th>
          <th key={1}>Title</th>
          <th key={2}>Year</th>
          <th key={3}>Condition</th>
          <th key={4}></th>
        </tr>)
      for (let i = 0; i < this.state.myoldbooks.length; i++) {
        rows.push(<MyBookRow
          artist={this.state.myoldbooks[i].artist}
          title={this.state.myoldbooks[i].title}
          year={this.state.myoldbooks[i].year}
          key={i}
          rerender={this.rerender}
        />);
      };
      table = <table className="result-table">{rows}</table>
    };
    
    return (
      <div className="search-box">
        <form className="search-form">
          <input type="text" placeholder="Add record by release" name="release" id="release" required />
          <select id="condition" name="condition">
            <option value="Like New">Like New</option>
            <option value="Fine">Fine</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
          <input type="submit" value="Add" onClick={this.addOldBook} />
        </form>
        <div className="result-box">
          {table}
        </div>
      </div>
    )
  }
}

export default MyPage;








