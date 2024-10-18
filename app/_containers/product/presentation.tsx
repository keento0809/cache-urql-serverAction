import { Product } from "@/app/products/[slug]/_types/productSlug";
import Link from "next/link";

export const ProductPresentation = ({ product }: { product: Product }) => {
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
};
