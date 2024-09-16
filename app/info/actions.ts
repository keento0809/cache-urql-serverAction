"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { enterInfoFormSchema } from "./_components/infoPage/_components/enterInfoForm/_schemas/enterInfoForm";

export async function validate(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: enterInfoFormSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  redirect("/info?form=confirm");
}
