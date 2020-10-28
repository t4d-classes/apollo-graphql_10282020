import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

import { AuthorsAPI } from './apis/AuthorsAPI';

const apolloServerConfig = {
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    return {
      req,
      res,
      restUrl: process.env.REST_URL,
    };
  },
  dataSources: () => ({
    authors: new AuthorsAPI(process.env.REST_URL!),
  }),
};

export const apollo = new ApolloServer(apolloServerConfig);
