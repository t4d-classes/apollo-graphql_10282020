/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: App
// ====================================================

export interface App_authors {
  __typename: "Author";
  id: string | null;
  firstName: string | null;
  lastName: string | null;
}

export interface App {
  message: string | null;
  authors: (App_authors | null)[] | null;
}
