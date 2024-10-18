import { ProductContainer } from "@/app/_containers/product";

export default async function Page({ params }: { params: { slug: string } }) {
  return <ProductContainer productId={params.slug} />;
}
