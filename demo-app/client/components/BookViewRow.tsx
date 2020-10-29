import { gql } from '@apollo/client';

import { BookFragment } from './__generated__/BookFragment';

export type BookViewRowProps = {
  book: BookFragment;
};

export function BookViewRow({ book }: BookViewRowProps) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.isbn}</td>
      <td>{book.author.fullName}</td>
      <td>{book.category}</td>
      <td>{book.price}</td>
      <td>{book.quantity}</td>
    </tr>
  );
}

BookViewRow.fragments = {
  book: gql`
    fragment BookFragment on Book {
      id
      title
      isbn
      category
      author {
        fullName
      }
      price
      quantity
    }
  `,
};
