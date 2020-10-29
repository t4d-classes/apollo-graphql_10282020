import { gql } from '@apollo/client';

import { BooksFragment_books as BooksFragment_Book } from './__generated__/BooksFragment';
import { BookViewRow } from './BookViewRow';

export type BookTableProps = {
  books: BooksFragment_Book[];
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
          <BookViewRow key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
}

BooksTable.fragments = {
  books: gql`
    fragment BooksFragment on Query {
      books {
        ...BookFragment
      }
    }
    ${BookViewRow.fragments.book}
  `,
};
