const React = require('react');
import MyRecordRow from '../components/MyRecordRow';

// {
//   artist: 'Led Zeppelin',
//   title:  'Stairway to Heaven',
//   year: 1972
// }

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myoldrecords: [],
    };
    this.getMyOldRecords();
    this.rerender = this.rerender.bind(this);
    this.getMyOldRecords = this.getMyOldRecords.bind(this);
    this.addOldRecord = this.addOldRecord.bind(this);
  }

  getMyOldRecords = () => {
    fetch('/api/record/getMyCollection', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState((prevState)=>{ 
          return {myoldrecords: [...prevState.myoldrecords, ...data]};
      });
    });
  };

  addOldRecord = (e) => {
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
        this.setState((prev) => {
          const {artist, title, year, condition, userID} = data.data;
          return {myoldrecords: [...prev.myoldrecords, {artist, title, year, condition, userID}]};
        })
      });
  }

  rerender = () => {
    this.getMyOldRecords();
    window.location.href = window.location.href;
  }

  render() {
    let table;
    const rows = [];
    if (this.state.myoldrecords.length > 0) {
      rows.push(
        <tr>
          <th key={0}>Artist</th>
          <th key={1}>Title</th>
          <th key={2}>Year</th>
          <th key={3}>Condition</th>
          <th key={4}></th>
        </tr>)
      for (let i = 0; i < this.state.myoldrecords.length; i++) {
        rows.push(<MyRecordRow
          artist={this.state.myoldrecords[i].artist}
          title={this.state.myoldrecords[i].title}
          year={this.state.myoldrecords[i].year}
          condition={this.state.myoldrecords[i].condition}
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
          <input type="submit" value="Add" onClick={this.addOldRecord} />
        </form>
        <div className="result-box">
          {table}
        </div>
      </div>
    )
  }
}

export default MyPage;