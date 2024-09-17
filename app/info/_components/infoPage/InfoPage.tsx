"use client";

import { FC } from "react";
import { useInfoPage } from "./_hooks/useInfoPage";
import { EnterInfoForm } from "./_components/enterInfoForm/EnterInfoForm";
import { ConfirmInfoForm } from "./_components/confirmInfoForm/ConfirmInfoForm";

export const InfoPage: FC = () => {
  const { formParams, form, fields, action } = useInfoPage();

  return (
    <div className="py-8">
      {formParams !== "confirm" ? (
        <EnterInfoForm form={form} fields={fields} action={action} />
      ) : (
        <ConfirmInfoForm fields={fields} />
      )}
    </div>
  );
};
