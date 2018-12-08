import React, { Component } from 'react'
import Book from './book';
export function renderBookList(books) {
  
  return books.map(( book, i) => {
    return <Book key={i} autour={book.autur} name={book.name}></Book>
  })

};

export let books = [{id:1, name:"i do too", "autur":"nachman"}, {"id":"2", "name":"oman anoca", "autur":"odel"},{"id":"2", "name":"oman anoca", "autur":"odel"},{"id":"2", "name":"oman anoca", "autur":"odel"},{"id":"2", "name":"oman anoca", "autur":"odel"},{"id":"2", "name":"oman anoca", "autur":"odel"},{"id":"2", "name":"oman anoca", "autur":"odel"},{"id":"2", "name":"oman anoca", "autur":"odel"},{"id":"2", "name":"oman anoca", "autur":"odel"},{"id":"2", "name":"oman anoca", "autur":"odel"},{"id":"2", "name":"oman anoca", "autur":"odel"},{"id":"2", "name":"oman anoca", "autur":"odel"}]

let list = ["nachman", "odel", "piga", "nataly"];

list = list.map(cat=>{
  return {name: cat, label:cat}
})
console.log(list);

export  let categoryList = list;