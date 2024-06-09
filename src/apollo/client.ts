import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_ENDPOINT', // GraphQL 서버 엔드포인트를 입력하세요
  cache: new InMemoryCache()
});

export default client;
