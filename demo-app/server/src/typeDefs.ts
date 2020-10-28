import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    authors: [Author]
    books: [Book]
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    phoneNumber: String
  }

  type Book {
    id: ID
    title: String
    isbn: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
  }
`;
