import { AuthorsAPI } from '../apis/AuthorsAPI';

export type ApolloServerContext = {
  dataSources: {
    authors: AuthorsAPI;
  };
};
