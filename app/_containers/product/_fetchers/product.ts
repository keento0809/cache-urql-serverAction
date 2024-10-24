import { Product } from "../_types/product";

export async function fetcher(params: string): Promise<Product> {
  const result = await fetch(`https://fakestoreapi.com/products/${params}`);

  if (!result.ok) {
    throw new Error(`failed to fetch the product`);
  }

  const product: Product = await result.json();

  return product;
}
