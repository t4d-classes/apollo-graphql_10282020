// import { PubSub } from 'apollo-server-express';
// import fetch from 'node-fetch';

// const pubSub = new PubSub();

import { Application } from 'express';
import { ApolloServerContext } from './models/apollo';
import { Author } from './models/authors';
import { Book } from './models/books';

export const resolvers = {
  Author: {
    // default implementation
    // firstName(author: Author) {
    //   return author.firstName;
    // },
    async books(author: Author, _, context: ApolloServerContext) {
      const books = await context.dataSources.books.allByAuthorId(author.id);
      return books;
    },
    fullName(author: Author) {
      return author.lastName + ', ' + author.firstName;
    },
  },
  Book: {
    // default implementation
    // title(book: Book) {
    //   return book.title;
    // },
    async author(book: Book, _, context: ApolloServerContext) {
      const author = await context.dataSources.authors.oneById(book.authorId);
      return author;
    },
  },
  Query: {
    message() {
      return 'Welcome to React and Apollo with Next.js!';
    },
    async authors(_1, _2, context: ApolloServerContext) {
      const authors = await context.dataSources.authors.all();
      return authors;
    },
    async books(_1, _2, context: ApolloServerContext) {
      const books = await context.dataSources.books.all();
      return books;
    },
  },
};
