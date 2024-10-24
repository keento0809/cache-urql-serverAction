import Link from "next/link";
import { Product } from "../product/_types/product";
import { PropsWithChildren } from "react";

type FullPresentationProps = PropsWithChildren<{
  product: Product;
}>;

export const FullPresentation = ({
  product,
  children,
}: FullPresentationProps) => {
  return (
    <div className="py-8 text-lg text-slate-800 text-center">
      <p className="py-4 text-white text-xl font-semibold">{product.title}</p>
      <p>This page would not be fully cached as full-route cache.</p>
      <div className="py-8 flex justify-center items-center">
        <Link href="/" className="px-8 py-2 border border-slate-800 rounded-xl">
          Back
        </Link>
      </div>
      {children}
    </div>
  );
};
