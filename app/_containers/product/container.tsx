import { fetcher } from "./_fetchers/product";
import { ProductPresentation } from "./presentation";

export async function ProductContainer({ productId }: { productId: string }) {
  const product = await fetcher(productId);

  if (!product) throw new Error("Failed to fetch product...");

  return (
    <ProductPresentation product={product}>
      <div className="text-center text-slate-600">
        The child component of Product presentation will be here...
      </div>
    </ProductPresentation>
  );
}
