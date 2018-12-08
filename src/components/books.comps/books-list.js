import React, { Component } from 'react'
/* import Book from '../../books.comps/book-list'; */
import "./style/books-list.style.css";
import "../../util/styled/index.css";
import {connect} from "react-redux"
import { renderBookList, books } from './func';
import { bindActionCreators } from 'redux';
import { on_fetch_books } from '../../util/redux/actions/actions.act';

 class BooksList extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      books: [...books]
    };
  }
  componentWillMount() {
    this.props.onSetBooks(books)
  }
  render() {
    let {books} = {...this.props}
    return (
      <div  className="books-con">
      
      <div  className="books-con-grid">
        <div className="books-con-grid__books">
        {renderBookList(books)}
        </div>
      </div>
      </div>
    )
  }
}
let mapStateToProps = (state) => ({
  books: state.books
})
let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onSetBooks: on_fetch_books
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList)