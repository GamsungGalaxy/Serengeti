const React = require('react');
import SearchBookRow from '../components/SearchBookRow';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldbooks: [],
    }
    this.searchBook = this.searchBook.bind(this);
  }

  searchBook = (e) => {
    e.preventDefault();
    fetch('/api/findOldBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ searchString: document.getElementById('searchString').value })
    })
      .then(response => response.json())
      .then(data => this.setState({ oldbooks: data }));
  }

  render() {
    let table;
    const rows = [];
    if (this.state.oldbooks.length > 0) {
      rows.push(
        <tr>
          <th key={0}>Title</th>
          <th key={1}>Author</th>
          <th key={2}>ISBN</th>
          <th key={3}>Condition</th>
          <th key={4}>Owner</th>
          <th key={5}></th>
        </tr>)
      for (let i = 0; i < this.state.oldbooks.length; i++) {
        if (this.state.oldbooks[i].username !== 'max') {
          rows.push(<SearchBookRow
            {...this.state.oldbooks[i]}
            key={i}
          />)
        }
      }
      table = <table className="result-table">{rows}</table>
    }
    return (
      <div className="search-box">
        <form className="search-form">
          <input type="text" placeholder="search album by title" name="title" id="searchString" required />
          <input type="submit" value="search" onClick={this.searchBook} />
        </form>
        <div className="result-box">
          {table}
        </div>
      </div>
    )
  }
}

export default Search;








