import { AuthorsAPI } from '../apis/AuthorsAPI';
import { BooksAPI } from '../apis/BooksAPI';

export type ApolloServerContext = {
  restUrl: string;
  dataSources: {
    authors: AuthorsAPI;
    books: BooksAPI;
  };
};
