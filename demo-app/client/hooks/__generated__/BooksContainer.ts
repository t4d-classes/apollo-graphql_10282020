/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BooksContainer
// ====================================================

export interface BooksContainer_books_author {
  __typename: "Author";
  fullName: string | null;
}

export interface BooksContainer_books {
  __typename: "Book";
  id: string | null;
  title: string | null;
  isbn: string | null;
  category: string | null;
  author: BooksContainer_books_author | null;
  price: number | null;
  quantity: number | null;
  authorId: string | null;
}

export interface BooksContainer {
  __typename: "Query";
  books: (BooksContainer_books | null)[] | null;
}
