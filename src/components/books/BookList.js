import React from "react";
import Book from "./Book";

export default function BookList({books}) {
  return (
    <div className="container">
      <ul className="list-group list-group-flush">
        {
          books.map(book => <Book book={book} key={book.id}/> )
        }
      </ul>
    </div>
  );
}
