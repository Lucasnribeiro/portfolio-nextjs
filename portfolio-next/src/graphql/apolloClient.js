import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
    uri: "http://54.197.9.119/graphql",
    cache: new InMemoryCache()
})


export {
    apolloClient
}