const React = require('react');
import SearchRecordRow from '../components/SearchRecordRow';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldrecords: [],
    }
    this.searchRecord = this.searchRecord.bind(this);
  }

  searchRecord = (e) => {
    e.preventDefault();
    fetch('/api/findOldRecord', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ searchString: document.getElementById('searchString').value })
    })
      .then(response => response.json())
      .then(data => this.setState({ oldrecords: data }));
  }

  render() {
    let table;
    const rows = [];
    if (this.state.oldrecords.length > 0) {
      rows.push(
        <tr>
          <th key={0}>Title</th>
          <th key={1}>Author</th>
          <th key={2}>ISBN</th>
          <th key={3}>Condition</th>
          <th key={4}>Owner</th>
          <th key={5}></th>
        </tr>)
      for (let i = 0; i < this.state.oldrecords.length; i++) {
        if (this.state.oldrecords[i].username !== 'max') {
          rows.push(<SearchRecordRow
            {...this.state.oldrecords[i]}
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
          <input type="submit" value="search" onClick={this.searchRecord} />
        </form>
        <div className="result-box">
          {table}
        </div>
      </div>
    )
  }
}

export default Search;








