import React from 'react';
import { ErrorMessage } from '../components/ErrorMessage';

import { useBooks } from '../hooks/useBooks';
import { BookTable } from '../components/BooksTable';
import { BookForm } from '../components/BookForm';

export const Books = () => {
  const {
    books,
    editBookId,
    booksLoading,
    booksError,
    appendBook,
    replaceBook,
    removeBook,
    editBook,
    cancelBook,
  } = useBooks(BookTable.fragments.books);

  if (booksError) return <ErrorMessage message="Error loading books." />;
  if (booksLoading) return <div>Loading Books...</div>;

  return (
    <section>
      <BookTable
        books={books}
        editBookId={editBookId}
        onEdit={editBook}
        onDelete={removeBook}
        onSave={replaceBook}
        onCancel={cancelBook}
      />
      <BookForm buttonText="Add Book" onSubmitBook={appendBook} />
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
