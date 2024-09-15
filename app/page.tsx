import { Item } from "./_components/item/Item";

const PRODUCT_PARAMS = "9";

export default async function Home() {
  return (
    <div className="">
      <Item params={PRODUCT_PARAMS} />
      <Item params={PRODUCT_PARAMS} />
      <Item params={PRODUCT_PARAMS} />
    </div>
  );
}
