const React = require('react');

class MyRecordRow extends React.Component {

  // deleteMyOldBook = () => {
  //   fetch('/api/deleteOldBook', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({ myOldBookId: this.props.old_book_id })
  //   })
  //     .then(response => response.json())
  //     .then((data) => {
  //       return this.props.rerender();
  //     });
  // }
  
  render() {
    return (
      <tr>
        <td>{this.props.artist}</td>
        <td>{this.props.title}</td>
        <td>{this.props.year}</td>
        <td>{this.props.condition}</td>
        <td><center><button type="button" className="req-button" onClick={this.deleteMyOldRecord}>Remove</button></center></td>
      </tr>
    )
  }
}

export default MyRecordRow;








