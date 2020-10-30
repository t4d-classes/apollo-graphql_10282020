/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Lookups
// ====================================================

export interface Lookups_authors {
  __typename: "Author";
  value: string | null;
  label: string | null;
}

export interface Lookups {
  authors: (Lookups_authors | null)[] | null;
}
