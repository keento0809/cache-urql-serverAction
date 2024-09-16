"use client";

import { useFormState } from "react-dom";
import { enterInfoFormSchema } from "../_schemas/enterInfoForm";
import { validate } from "../../../../../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

export const useEnterInfoForm = () => {
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
    form,
    fields,
    action,
  };
};
