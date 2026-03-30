'use client';

import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './apollo-client';

let client: ReturnType<typeof createApolloClient> | null = null;

function getClient() {
  if (!client) {
    client = createApolloClient();
  }
  return client;
}

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={getClient()}>{children}</ApolloProvider>;
}
