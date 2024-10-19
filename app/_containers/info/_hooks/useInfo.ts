"use client";

import { validate } from "@/app/info/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";
import { enterInfoFormSchema } from "../_components/enterInfoForm/_schemas/enterInfoForm";

export const useInfo = () => {
  const searchParams = useSearchParams();
  const formParams = searchParams.get("form") ?? "";

  const [lastResult, action] = useFormState(validate, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: enterInfoFormSchema });
    },

    shouldValidate: "onSubmit",
    shouldRevalidate: "onInput",
  });

  return {
    formParams,
    form,
    fields,
    action,
  };
};
