import { gql } from '@apollo/client';

import { BookViewRowFragment } from './__generated__/BookViewRowFragment';

export type BookViewRowProps = {
  book: BookViewRowFragment;
  onEdit: (bookId: string) => void;
  onDelete: (bookId: string) => void;
};

export function BookViewRow(props: BookViewRowProps) {
  return (
    <tr>
      <td>{props.book.id}</td>
      <td>{props.book.title}</td>
      <td>{props.book.isbn}</td>
      <td>{props.book.author.fullName}</td>
      <td>{props.book.category}</td>
      <td>{props.book.price}</td>
      <td>{props.book.quantity}</td>
      <td>
        <button type="button" onClick={() => props.onEdit(props.book.id)}>
          Edit
        </button>
        <button type="button" onClick={() => props.onDelete(props.book.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

BookViewRow.fragments = {
  bookViewRowFragment: gql`
    fragment BookViewRowFragment on Book {
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
