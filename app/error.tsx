"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-8">
      <h2>Something went wrong!</h2>
      {error.message && <p className="text-red-500 py-6">{error.message}</p>}
      <button
        className="my-4 px-8 py-2 border border-slate-800 rounded-xl"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
