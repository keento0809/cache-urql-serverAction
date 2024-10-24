import { Product } from "@/app/_containers/product/_types/product";
import Link from "next/link";
import { PropsWithChildren } from "react";

type ProductPresentationProps = PropsWithChildren<{ product: Product }>;

export const ProductPresentation = ({
  product,
  children,
}: ProductPresentationProps) => {
  return (
    <div className="p-6 w-4/5 mx-auto">
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
      {children}
    </div>
  );
};
