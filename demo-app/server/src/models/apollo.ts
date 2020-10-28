import { AuthorsAPI } from '../apis/AuthorsAPI';
import { BooksAPI } from '../apis/BooksAPI';

export type ApolloServerContext = {
  dataSources: {
    authors: AuthorsAPI;
    books: BooksAPI;
  };
};
