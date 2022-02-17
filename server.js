const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const db = require('./mongodb');
const typeDefs = require('./src/schema.js');
const resolvers = require('./src/resolvers.js');
const app = express();
let apolloServer = null;

async function startServer() {
  apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
);