/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BookFragment
// ====================================================

export interface BookFragment_author {
  __typename: "Author";
  fullName: string | null;
}

export interface BookFragment {
  __typename: "Book";
  id: string | null;
  title: string | null;
  isbn: string | null;
  category: string | null;
  author: BookFragment_author | null;
  price: number | null;
  quantity: number | null;
}
