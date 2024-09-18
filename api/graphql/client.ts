import { registerUrql } from "@urql/next/rsc";
import { cacheExchange, createClient, fetchExchange } from "urql";

const makeClient = () => {
  return createClient({
    url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const { getClient } = registerUrql(makeClient);
