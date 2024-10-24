"use server";

import { getClient } from "@/api/graphql/client";
import { redirect } from "next/navigation";
import { QUERY_FILMS } from "./_graphql/queries/queries";

export async function actWithUseServer() {
  const client = getClient();
  const result = await client.query(QUERY_FILMS, {
    next: { revalidate: 0 },
  });
  console.log("user server inside: ", result.data);

  redirect("/info");
}
