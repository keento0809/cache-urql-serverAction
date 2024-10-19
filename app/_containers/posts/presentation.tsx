import { PropsWithChildren } from "react";

export const PostsPresentation = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-6 w-full text-center">
      <p>PostsPresentation</p>
      {children}
    </div>
  );
};
