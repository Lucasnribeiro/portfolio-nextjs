import { ApolloClient, InMemoryCache } from "@apollo/client"

const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

const apolloClient = new ApolloClient({
    uri: "http://54.197.9.119/graphql",
    cache: new InMemoryCache()
})


export {
    apolloClient
}