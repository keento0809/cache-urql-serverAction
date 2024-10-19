"use client";

import { useSearchParams } from "next/navigation";

export const useConfirmInfoForm = () => {
  const searchParams = useSearchParams();

  function handleBack() {
    const params = new URLSearchParams(searchParams);
    params.delete("form");
  }

  return {
    handleBack,
  };
};
