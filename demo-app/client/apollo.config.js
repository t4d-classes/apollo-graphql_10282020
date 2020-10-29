module.exports = {
  client: {
    includes: ['./**/*.ts', './**/*.tsx'],
    excludes: ['./node_modules/**/*'],
    service: {
      url: 'http://localhost:5000/graphql',
    },
  },
};
