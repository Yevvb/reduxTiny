import React, { Component } from 'react';
import { connect } from 'react-redux';
// this connect make book-list component to a container

import { selectBook } from '../actions/index';
// this is an action, is a function return with an object?

import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    console.log('BookList item render #1')
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={()=> this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
        );
    });
  };

  render() {
    console.log('BookList render #2')
    console.log(this.props.asdf) // -> '123'
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      );
  };
};

function mapStateToProps(state) {
  // the purpose of this function is to take our application state as an arguments
  // the state contains the array of books and the active book
  // whatever is returned will show up as props inside of BookList
  return {
    asdf: '123',
    books: state.books
  };
}

// anything returned from this function will end up as props on 
// the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed 
  // to all of our reducers
  // selectBook is an action function imported in the top, it will 
  // map to the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
  // { selectBook<object>: selectBook<function> } = { selectBook: {
  //   type: 'BOOK_SELECTED',
  //   payload: book
  // }}
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// # 将 BookList 组件转换成一个容器 container，他需要有新的
// # 派发(dispatch) action 的方法 selectBook, 通过使用 actionCreater 
// # 来创建这个方法，使其成为 props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);