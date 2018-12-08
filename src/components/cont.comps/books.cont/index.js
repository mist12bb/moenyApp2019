import React from 'react';
import BooksList from '../../books.comps/books-list';
import CategorySelect from "../../books.comps/categorys.select"
import RootStore from "../../../util/redux/reducers";
import {createStore} from "redux";
import {  Provider  } from "react-redux";

const BooksAppContiner = () => {
  return (
    <Provider store={createStore(RootStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <div className="container__books-app">
    <div className="layout">
    <div className="top-menu"></div>
    <div className="top-options">
      <div className="categorys-coices">
      <CategorySelect></CategorySelect>
      </div>
      </div>
      <div className="main">
      <div className="books-list">
      <BooksList/>
      </div>
      </div>
      </div>
      </div>
      </Provider>
  );
};

export default BooksAppContiner;