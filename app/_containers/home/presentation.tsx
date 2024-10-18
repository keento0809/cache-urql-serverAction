import { PropsWithChildren } from "react";

export const HomePresentation = ({ children }: PropsWithChildren) => {
  return (
    <>
      <form className="p-6 my-8 mx-auto w-full max-w-sm flex flex-col justify-center items-center rounded-md border border-pink-500">
        <p className="py-4 text-xl font-semibold">HomePage</p>
        <button
          type="submit"
          className="rounded-lg border border-white px-8 py-2"
        >
          submit
        </button>
      </form>
      {children}
    </>
  );
};
