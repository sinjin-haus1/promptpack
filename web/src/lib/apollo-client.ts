import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: 'demo-user',
    },
  };
});

export function createApolloClient() {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}
