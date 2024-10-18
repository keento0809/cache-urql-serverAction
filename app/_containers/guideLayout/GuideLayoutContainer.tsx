import { cookies } from "next/headers";
import { GuideLayoutPresentation } from "./GuideLayoutPresentation";
import { PropsWithChildren } from "react";

export const GuideLayoutContainer = ({ children }: PropsWithChildren) => {
  const isLoggedIn = !!cookies().get("accessToken")?.value ?? false;

  return (
    <GuideLayoutPresentation isLoggedIn={isLoggedIn}>
      {children}
    </GuideLayoutPresentation>
  );
};
