import { useSearchParams } from "next/navigation";

export const useInfoPage = () => {
  const searchParams = useSearchParams();
  const formParams = searchParams.get("form");

  return {
    formParams,
  };
};
