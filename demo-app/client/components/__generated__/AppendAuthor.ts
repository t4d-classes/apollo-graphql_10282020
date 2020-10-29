/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewAuthor } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AppendAuthor
// ====================================================

export interface AppendAuthor_appendAuthor {
  __typename: "Author";
  id: string | null;
  firstName: string | null;
  lastName: string | null;
}

export interface AppendAuthor {
  appendAuthor: AppendAuthor_appendAuthor | null;
}

export interface AppendAuthorVariables {
  author: NewAuthor;
}
