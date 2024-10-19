"use client";

import { PropsWithChildren } from "react";
import { EnterInfoForm } from "./_components/enterInfoForm/EnterInfoForm";
import { ConfirmInfoForm } from "./_components/confirmInfoForm/ConfirmInfoForm";
import { useInfo } from "./_hooks/useInfo";

export const InfoPresentation = ({ children }: PropsWithChildren) => {
  const { formParams, form, fields, action } = useInfo();

  return (
    <div className="py-8">
      {formParams !== "confirm" ? (
        <EnterInfoForm form={form} fields={fields} action={action} />
      ) : (
        <ConfirmInfoForm fields={fields} />
      )}
      {children}
    </div>
  );
};
