import React from 'react';

import { BookViewRow } from './BookViewRow';

export type BookRow = {
  id: number;
  title: string;
  isbn: string;
  authorName: string;
  category: string;
  price: number;
  quantity: number;
};

export type BookTableProps = {
  books: BookRow[];
};

export function BooksTable(props: BookTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>ISBN</th>
          <th>Author</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.isbn}</td>
            <td>{book.authorName}</td>
            <td>{book.category}</td>
            <td>{book.price}</td>
            <td>{book.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
