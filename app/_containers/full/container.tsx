import { fetcher } from "./_fetchers/full";
import { FullPresentation } from "./presentation";

export const FullContainer = async () => {
  const product = await fetcher("5");

  return (
    <FullPresentation product={product}>
      <div>The child component will be here.</div>
    </FullPresentation>
  );
};
