import { gql } from "urql";

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
