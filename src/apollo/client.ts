import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://timetogo-578cd.cloudfunctions.net/graphql',
  cache: new InMemoryCache(),
});

export default client;
