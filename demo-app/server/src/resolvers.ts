// import { PubSub } from 'apollo-server-express';
// import fetch from 'node-fetch';

// const pubSub = new PubSub();

import { ApolloServerContext } from './models/apollo';

export const resolvers = {
  Query: {
    message() {
      return 'Welcome to React and Apollo with Next.js!';
    },
    async authors(_1, _2, context: ApolloServerContext) {
      const authors = await context.dataSources.authors.all();
      return authors;
    },
  },
};
