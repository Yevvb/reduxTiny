import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div><h3>Select a book to get started.</h3></div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>《{this.props.book.title}》</div>
        <div>{this.props.book.pages}页</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);