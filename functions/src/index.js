const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

admin.initializeApp();
const db = admin.firestore();

const typeDefs = gql`
  type Info {
    id: ID!
    title: String!
    description: String!
  }

  type Query {
    infos: [Info]
  }
`;

const resolvers = {
  Query: {
    infos: async () => {
      const snapshot = await db.collection('info').get();
      return snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description
      }));
    }
  }
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(res => {
  server.applyMiddleware({ app, path: '/', cors: true });
});

exports.graphql = functions.https.onRequest(app);
