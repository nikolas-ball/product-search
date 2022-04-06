import React from "react";
import { View } from "react-native";
import Home from "./screens/Home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";

const client = new ApolloClient({
  // request: (operation) => {
  //   const token = "";
  //   operation.setContext({
  //     headers: {
  //       authorization: token ? `Bearer ${token}` : "",
  //     },
  //   });
  // },
  uri: "",
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
