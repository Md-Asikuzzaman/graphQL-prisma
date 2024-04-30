"use client";

import { NextPage } from "next";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-client";

interface Props {
  children: React.ReactNode;
}

const NextApolloProvider: NextPage<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default NextApolloProvider;
