import { fetcher } from "@/app/_containers/product/_fetchers/product";

type ItemProps = {
  params: string;
};

export const Item = async ({ params }: ItemProps) => {
  const product = await fetcher(params);

  if (!product) return <div className="">Failed to fetch item...</div>;

  return (
    <div className="p-6">
      <p className="py-4 text-lg font-semibold text-slate-700">
        Item with {params}
      </p>
      <p className="text-2xl font-semibold py-2">{product.title}</p>
      <p className="py-2 text-md text-slate-600">{product.description}</p>
    </div>
  );
};
