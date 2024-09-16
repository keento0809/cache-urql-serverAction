import Link from "next/link";
import { fetchProductWithGenerics } from "./fetcher";

export default async function Page() {
  const product = await fetchProductWithGenerics("5");

  if (!product) return <div className="py-8">Something is wrong...</div>;

  return (
    <div className="py-8 text-lg text-slate-800 text-center">
      <p className="py-4 text-white text-xl font-semibold">{product.title}</p>
      <p>This page would not be fully cached as full-route cache.</p>
      <div className="py-8 flex justify-center items-center">
        <Link href="/" className="px-8 py-2 border border-slate-800 rounded-xl">
          Back
        </Link>
      </div>
    </div>
  );
}
