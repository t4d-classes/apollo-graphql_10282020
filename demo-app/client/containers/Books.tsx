import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Book } from '../models/books';
import { ErrorMessage } from '../components/ErrorMessage';

import { BooksTable, BookRow } from '../components/BooksTable';

import {
  Books as BooksQuery,
  Books_books as BooksQuery_Book,
} from './__generated__/Books';

export const BOOKS_QUERY = gql`
  query Books {
    books {
      id
      title
      isbn
      author {
        fullName
      }
      category
      price
      quantity
    }
  }
`;

export const Books = () => {
  const { data, loading, error } = useQuery<BooksQuery>(BOOKS_QUERY);

  if (error) return <ErrorMessage message="Error loading books." />;
  if (loading) return <div>Loading Books...</div>;

  const booksForTable = data.books.map((book: BooksQuery_Book) => {
    return {
      id: Number(book.id),
      title: book.title,
      isbn: book.isbn,
      category: book.category,
      price: book.price,
      quantity: book.quantity,
      authorName: book.author.fullName,
    } as BookRow;
  });

  return (
    <section>
      <BooksTable books={booksForTable} />
      <style jsx>{`
        section {
          padding: 20px;
        }
        p {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </section>
  );
};
