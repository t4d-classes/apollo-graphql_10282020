import React from 'react';
import { gql } from '@apollo/client';

import { Book } from '../models/books';
import { BookViewRow } from './BookViewRow';
import { BookEditRow } from './BookEditRow';
import { BooksFragment_books as BooksFragment_Book } from './__generated__/BooksFragment';

export type BookTableProps = {
  books: BooksFragment_Book[];
  editBookId: string;
  onEdit: (bookId: string) => void;
  onDelete: (bookId: string) => void;
  onSave: (book: Book) => void;
  onCancel: () => void;
};

export function BookTable(props: BookTableProps) {
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
        {props.books.map((book) =>
          book.id === props.editBookId ? (
            <BookEditRow
              key={book.id}
              book={book}
              onSave={props.onSave}
              onCancel={props.onCancel}
            />
          ) : (
            <BookViewRow
              key={book.id}
              book={book}
              onEdit={props.onEdit}
              onDelete={props.onDelete}
            />
          ),
        )}
      </tbody>
    </table>
  );
}

BookTable.fragments = {
  books: gql`
    fragment BooksFragment on Query {
      books {
        ...BookViewRowFragment
        ...BookEditRowFragment
      }
    }
    ${BookViewRow.fragments.bookViewRowFragment}
    ${BookEditRow.fragments.bookEditRowFragment}
  `,
};
