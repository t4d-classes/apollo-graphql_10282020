import { gql, DocumentNode, useMutation, useQuery } from '@apollo/client';

import { NewBook, Book } from '../models/books';
import { BooksContainer as BooksContainerQuery } from './__generated__/BooksContainer';
import { editBookId } from '../lib/localVars';

export const APPEND_BOOK_MUTATION = gql`
  mutation AppendBook($book: NewBook!) {
    appendBook(book: $book) {
      id
      title
      isbn
      author {
        fullName
      }
      authorId
      price
      quantity
    }
  }
`;

export const REPLACE_BOOK_MUTATION = gql`
  mutation ReplaceBook($book: EditBook!) {
    replaceBook(book: $book) {
      id
      title
      isbn
      author {
        fullName
      }
      authorId
      price
      quantity
    }
  }
`;

export const REMOVE_BOOK_MUTATION = gql`
  mutation RemoveBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      id
    }
  }
`;

export const useBooks = (booksFragment: DocumentNode) => {
  const BOOKS_CONTAINER_QUERY = gql`
    query BooksContainer {
      editBookId @client
      ...BooksFragment
    }
    ${booksFragment}
  `;

  const {
    data: booksData,
    loading: booksLoading,
    error: booksError,
  } = useQuery<BooksContainerQuery & { editBookId: string }>(
    BOOKS_CONTAINER_QUERY,
  );

  const [mutateAppendBook] = useMutation(APPEND_BOOK_MUTATION);
  const [mutateReplaceBook] = useMutation(REPLACE_BOOK_MUTATION);
  const [mutateRemoveBook] = useMutation(REMOVE_BOOK_MUTATION);

  const appendBook = (book: NewBook) => {
    mutateAppendBook({
      variables: {
        book,
      },
      refetchQueries: [{ query: BOOKS_CONTAINER_QUERY }],
    }).then(() => editBookId('-1'));
  };

  const replaceBook = (book: Book) => {
    mutateReplaceBook({
      variables: {
        book,
      },
    }).then(() => editBookId('-1'));
  };

  const removeBook = (bookId: string) => {
    mutateRemoveBook({
      variables: {
        bookId,
      },
      update(cache, { data: { removeBook: book } }) {
        cache.modify({
          fields: {
            books(cachedBookRefs, { readField }) {
              return cachedBookRefs.filter(
                (b) => book.id !== readField('id', b),
              );
            },
          },
        });
      },
    }).then(() => editBookId('-1'));
    return null;
  };

  const editBook = (bookId: string) => {
    editBookId(bookId);
  };

  const cancelBook = () => {
    editBookId('-1');
  };

  return {
    books: booksData?.books || [],
    editBookId: booksData?.editBookId || '-1',
    booksLoading,
    booksError,
    appendBook,
    replaceBook,
    removeBook,
    editBook,
    cancelBook,
  };
};
