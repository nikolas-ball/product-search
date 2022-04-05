import React from "react";
import { View } from "react-native";
import Home from "./screens/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client pointing to Mavely API
const client = new ApolloClient({
  uri: "https://mavely.top/",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View>
        <Home />
      </View>
    </ApolloProvider>
  );
}
