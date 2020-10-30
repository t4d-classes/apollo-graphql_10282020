/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BookViewRowFragment
// ====================================================

export interface BookViewRowFragment_author {
  __typename: "Author";
  fullName: string | null;
}

export interface BookViewRowFragment {
  __typename: "Book";
  id: string | null;
  title: string | null;
  isbn: string | null;
  category: string | null;
  author: BookViewRowFragment_author | null;
  price: number | null;
  quantity: number | null;
}
