import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    authors: [Author]
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    phoneNumber: String
  }
`;
