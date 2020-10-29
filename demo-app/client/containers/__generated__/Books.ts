/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Books
// ====================================================

export interface Books_books_author {
  __typename: "Author";
  fullName: string | null;
}

export interface Books_books {
  __typename: "Book";
  id: string | null;
  title: string | null;
  isbn: string | null;
  author: Books_books_author | null;
  category: string | null;
  price: number | null;
  quantity: number | null;
}

export interface Books {
  books: (Books_books | null)[] | null;
}
