/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveBook
// ====================================================

export interface RemoveBook_removeBook {
  __typename: "Book";
  id: string | null;
}

export interface RemoveBook {
  removeBook: RemoveBook_removeBook | null;
}

export interface RemoveBookVariables {
  bookId: string;
}
