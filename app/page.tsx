import { Item } from "./_components/item/Item";
import { cacheExchange, createClient, fetchExchange, gql } from "@urql/core";

const PRODUCT_PARAMS = "9";

export const QUERY_FILMS = gql`
  query getFilms {
    allFilms {
      films {
        id
        title
        releaseDate
        created
        director
        characterConnection {
          characters {
            birthYear
            created
            edited
          }
          totalCount
        }
      }
    }
  }
`;

const makeClient = () => {
  return createClient({
    url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    exchanges: [cacheExchange, fetchExchange],
  });
};

export default async function Home() {
  async function actWithUseServer() {
    "use server";

    const client = makeClient();
    const result = await client.query(QUERY_FILMS, { next: { revalidate: 0 } });

    console.log("user server inside: ", result.data);
  }

  return (
    <form action={actWithUseServer}>
      <Item params={PRODUCT_PARAMS} />
      <Item params={PRODUCT_PARAMS} />
      <Item params={PRODUCT_PARAMS} />
      <button
        className="rounded-lg border border-white px-8 py-2"
        type="submit"
      >
        btn
      </button>
    </form>
  );
}
