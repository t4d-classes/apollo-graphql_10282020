/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Book
// ====================================================

export interface Book_author {
  __typename: "Author";
  fullName: string | null;
}

export interface Book {
  __typename: "Book";
  id: string | null;
  title: string | null;
  isbn: string | null;
  category: string | null;
  author: Book_author | null;
  price: number | null;
  quantity: number | null;
}
