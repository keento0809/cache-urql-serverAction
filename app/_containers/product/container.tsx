import { fetchProduct } from "@/app/products/[slug]/fetcher";
import { ProductPresentation } from "./presentation";

export async function ProductContainer({ productId }: { productId: string }) {
  const product = await fetchProduct(productId);

  if (!product) throw new Error("Failed to fetch product...");

  return <ProductPresentation product={product} />;
}
