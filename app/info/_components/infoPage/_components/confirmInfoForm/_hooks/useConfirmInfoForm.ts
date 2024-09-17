"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const useConfirmInfoForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleBack() {
    const params = new URLSearchParams(searchParams);
    params.delete("form");
  }

  return {
    handleBack,
  };
};
