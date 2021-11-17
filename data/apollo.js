import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

let CLIENT;

export function getApolloClient(forceNew) {
  const corsOptions = {
    origin: "http://gql.bhagavadgita.io",
    credentials: true,
  };
  if (!CLIENT || forceNew) {
    CLIENT = new ApolloClient({
      ssrMode: isServer,
      uri: "http://gql.bhagavadgita.io/graphql",
      cache: new InMemoryCache().restore(windowApolloState || {}),
      fetchOptions: {
        mode: "no-cors",
      },
      cors: corsOptions,

      // Default options to disable SSR for all queries.
      defaultOptions: {
        // Skip queries when server side rendering
        // https://www.apollographql.com/docs/react/data/queries/#ssr
        watchQuery: {
          ssr: false,
        },
        query: {
          ssr: false,
        },
        // Selectively enable specific queries like so:
        // `useQuery(QUERY, { ssr: true });`
      },
    });
  }

  return CLIENT;
}

export const QUERY = gql`
  query {
    allGitaLanguages {
      edges {
        node {
          id
        }
      }
    }
  }
`;
export const allGitaChaptersQuery = gql`
  query {
    allGitaChapters {
      nodes {
        chapterNumber
        nameTranslated
        versesCount
      }
    }
  }
`;
