import { PropsWithChildren } from "react";
import { InfoPresentation } from "./presentation";

export const InfoContainer = ({ children }: PropsWithChildren) => {
  return <InfoPresentation>{children}</InfoPresentation>;
};
