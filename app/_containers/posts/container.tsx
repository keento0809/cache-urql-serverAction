import { PropsWithChildren } from "react";
import { PostsPresentation } from "./presentation";

export async function PostsContainer({ children }: PropsWithChildren) {
  return <PostsPresentation>{children}</PostsPresentation>;
}
