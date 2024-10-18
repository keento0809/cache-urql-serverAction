import { getClient } from "@/api/graphql/client";
import { QUERY_FILMS } from "@/app/page";

export async function getFilms() {
  const client = getClient();
  const result = await client.query(QUERY_FILMS, {
    next: { revalidate: 0 },
  });

  if (result.error) {
    console.error("Failed to get films...");
    throw new Error("Failed to get films...");
  }

  return result.data;
}
