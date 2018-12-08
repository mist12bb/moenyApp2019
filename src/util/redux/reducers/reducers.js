import { FETCH_BOOKS } from "../constants/books.const";

export function fetchBookReducer(state = [], action ) {
  if (action.type === FETCH_BOOKS) {
    return action.books;
  }
  return state;
};