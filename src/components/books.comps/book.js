import React from 'react';

const Book = ({name, autour,children, title}) => {
  
  return (
    <div className="books-con-grid__book-box">
    <p>{autour}</p>
      <p>{name}</p>
    </div>
  );
};

export default Book;