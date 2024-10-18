"use server";

import { getClient } from "@/api/graphql/client";
import { QUERY_FILMS } from "./page";
import { redirect } from "next/navigation";

export async function actWithUseServer() {
  const client = getClient();
  const result = await client.query(QUERY_FILMS, {
    next: { revalidate: 0 },
  });
  console.log("user server inside: ", result.data);

  redirect("/info");
}
