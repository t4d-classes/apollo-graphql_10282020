import { gql } from '@apollo/client';

import { Book } from '../models/books';
import { BookEditRowFragment } from './__generated__/BookEditRowFragment';

import { useForm } from '../hooks/useForm';
import { useLookups } from '../hooks/useLookups';

export type BookEditRowProps = {
  book: BookEditRowFragment;
  onSave: (book: Book) => void;
  onCancel: () => void;
};

export function BookEditRow(props: BookEditRowProps) {
  const [bookForm, change] = useForm({
    title: props.book.title,
    isbn: props.book.isbn,
    authorId: props.book.authorId,
    category: props.book.category,
    price: props.book.price,
    quantity: props.book.quantity,
  });
  const { authors } = useLookups();

  const saveBook = () => {
    props.onSave({
      ...bookForm,
      authorId: Number(bookForm.authorId),
      id: Number(props.book.id),
    });
  };

  return (
    <tr>
      <td>{props.book.id}</td>
      <td>
        <input
          type="text"
          name="title"
          value={bookForm.title}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          name="isbn"
          value={bookForm.isbn}
          onChange={change}
        />
      </td>
      <td>
        <select name="authorId" value={bookForm.authorId} onChange={change}>
          <option value="-1">Select One...</option>
          {authors.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input
          type="text"
          name="category"
          value={bookForm.category}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="number"
          name="price"
          value={bookForm.price}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="number"
          name="quantity"
          value={bookForm.quantity}
          onChange={change}
        />
      </td>
      <td>
        <button type="button" onClick={saveBook}>
          Save
        </button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </td>
    </tr>
  );
}

BookEditRow.fragments = {
  bookEditRowFragment: gql`
    fragment BookEditRowFragment on Book {
      id
      title
      isbn
      category
      authorId
      price
      quantity
    }
  `,
};
