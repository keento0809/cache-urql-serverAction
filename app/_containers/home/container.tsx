import { PropsWithChildren } from "react";
import { HomePresentation } from "./presentation";

export const HomeContainer = async ({ children }: PropsWithChildren) => {
  return <HomePresentation>{children}</HomePresentation>;
};
