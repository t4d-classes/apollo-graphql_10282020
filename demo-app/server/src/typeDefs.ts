import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    authors: [Author]
    authorById(id: ID!): Author
    authorByPhoneNumber(phoneNumber: String!): Author
    books: [Book]
  }

  type Mutation {
    appendAuthor(author: NewAuthor!): Author
    appendBook(book: NewBook!): Book
  }

  input NewAuthor {
    firstName: String
    lastName: String
    fullName: String
    phoneNumber: String
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    fullName: String
    phoneNumber: String
    books: [Book]
  }

  input NewBook {
    title: String
    isbn: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
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
