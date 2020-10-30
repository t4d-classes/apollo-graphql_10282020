/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditBook } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: ReplaceBook
// ====================================================

export interface ReplaceBook_replaceBook_author {
  __typename: "Author";
  fullName: string | null;
}

export interface ReplaceBook_replaceBook {
  __typename: "Book";
  id: string | null;
  title: string | null;
  isbn: string | null;
  author: ReplaceBook_replaceBook_author | null;
  authorId: string | null;
  price: number | null;
  quantity: number | null;
}

export interface ReplaceBook {
  replaceBook: ReplaceBook_replaceBook | null;
}

export interface ReplaceBookVariables {
  book: EditBook;
}
