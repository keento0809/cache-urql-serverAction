import { Item } from "./_components/item/Item";
import { gql } from "@urql/core";
import { actWithUseServer } from "./actions";
import { HomePage } from "./_components/homePage/HomePage";

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

export default async function Home() {
  return (
    <>
      <HomePage />
      {/* <form action={actWithUseServer}>
        <Item params={PRODUCT_PARAMS} />
        <Item params={PRODUCT_PARAMS} />
        <Item params={PRODUCT_PARAMS} />
        <button
          className="rounded-lg border border-white px-8 py-2"
          type="submit"
        >
          btn
        </button>
      </form> */}
    </>
  );
}
