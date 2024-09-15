import Link from "next/link";
import { fetchProduct } from "./fetcher";

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await fetchProduct(params.slug);

  if (!product) return <div>Failed to fetch product...</div>;

  return (
    <div className="p-6">
      <p className="text-2xl font-semibold py-2">{product.title}</p>
      <p className="py-2 text-md text-slate-600">{product.description}</p>
      <div className="py-8 flex justify-center items-center">
        <Link
          prefetch={false}
          href="/"
          className="px-8 py-2 border border-slate-800 rounded-xl"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
