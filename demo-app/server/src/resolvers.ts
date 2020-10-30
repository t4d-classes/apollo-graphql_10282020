import { PubSub } from 'apollo-server-express';
// import fetch from 'node-fetch';

const pubSub = new PubSub();

const BOOK_ADDED = 'BOOK_ADDED';

import { ApolloServerContext } from './models/apollo';
import { Author, NewAuthor } from './models/authors';
import { Book, NewBook } from './models/books';

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
    async authorById(_, args: { id: string }, context: ApolloServerContext) {
      const author = await context.dataSources.authors.oneById(Number(args.id));
      return author;
    },
    async authorByPhoneNumber(
      _,
      args: { phoneNumber: string },
      context: ApolloServerContext,
    ) {
      const author = await context.dataSources.authors.oneByPhoneNumber(
        args.phoneNumber,
      );
      return author;
    },
    async books(_1, _2, context: ApolloServerContext) {
      const books = await context.dataSources.books.all();
      return books;
    },
  },
  Mutation: {
    appendAuthor(_, args: { author: NewAuthor }, context: ApolloServerContext) {
      return context.dataSources.authors.append(args.author);
    },
    async appendBook(_, args: { book: NewBook }, context: ApolloServerContext) {
      const addedBook = await context.dataSources.books.append(args.book);

      const author = await context.dataSources.authors.oneById(
        addedBook.authorId,
      );

      pubSub.publish(BOOK_ADDED, { bookAdded: addedBook });

      return addedBook;
    },
    replaceBook(_, args: { book: Book }, context: ApolloServerContext) {
      return context.dataSources.books.replace(args.book);
    },
    removeBook(_, args: { bookId: string }, context: ApolloServerContext) {
      return context.dataSources.books.remove(Number(args.bookId));
    },
  },
};
