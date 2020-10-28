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
    fullName: String
    phoneNumber: String
    books: [Book]
  }

  type Book {
    id: ID
    title: String
    isbn: String
    authorId: ID
    author: Author
    category: String
    price: Float
    quantity: Int
  }
`;
