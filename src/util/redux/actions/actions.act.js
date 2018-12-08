import {FETCH_BOOKS} from "../constants/books.const";

export const on_fetch_books = (books) => ({
  type: FETCH_BOOKS,
  books: books
})