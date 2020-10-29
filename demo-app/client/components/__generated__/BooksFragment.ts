/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BooksFragment
// ====================================================

export interface BooksFragment_books_author {
  __typename: "Author";
  fullName: string | null;
}

export interface BooksFragment_books {
  __typename: "Book";
  id: string | null;
  title: string | null;
  isbn: string | null;
  category: string | null;
  author: BooksFragment_books_author | null;
  price: number | null;
  quantity: number | null;
}

export interface BooksFragment {
  __typename: "Query";
  books: (BooksFragment_books | null)[] | null;
}
