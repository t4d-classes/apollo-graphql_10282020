/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewBook } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AppendBook
// ====================================================

export interface AppendBook_appendBook_author {
  __typename: "Author";
  fullName: string | null;
}

export interface AppendBook_appendBook {
  __typename: "Book";
  id: string | null;
  title: string | null;
  isbn: string | null;
  author: AppendBook_appendBook_author | null;
  authorId: string | null;
  price: number | null;
  quantity: number | null;
}

export interface AppendBook {
  appendBook: AppendBook_appendBook | null;
}

export interface AppendBookVariables {
  book: NewBook;
}
