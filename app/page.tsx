import { gql } from "@urql/core";
import { HomeContainer } from "./_containers/home";

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
  return <HomeContainer />;
}
