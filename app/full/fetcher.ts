import { Product } from "../products/[slug]/_types/productSlug";

const baseURL = "https://fakestoreapi.com";

export async function fetchProductWithGenerics(
  params: string
): Promise<Product> {
  const result = await fetch(`${baseURL}/products/${params}`);

  if (!result.ok) {
    throw new Error(`failed to fetch the product with generics`);
  }

  const product: Product = await result.json();

  return product;
}
