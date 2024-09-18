"use client";

import { actWithUseServer } from "@/app/actions";
import { useFormState } from "react-dom";

export const HomePage = () => {
  const [lastResult, action] = useFormState(actWithUseServer, undefined);
  return (
    <form className="py-8" action={action}>
      <p className="py-4 text-xl font-semibold">HomePage</p>
      <button
        type="submit"
        className="rounded-lg border border-white px-8 py-2"
      >
        submit
      </button>
    </form>
  );
};
