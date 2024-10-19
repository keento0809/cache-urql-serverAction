import { FC } from "react";
import { useConfirmInfoForm } from "./_hooks/useConfirmInfoForm";
import { FormFieldsType } from "../../_types/info";

type ConfirmInfoFormProps = {
  fields: FormFieldsType;
};

export const ConfirmInfoForm: FC<ConfirmInfoFormProps> = ({ fields }) => {
  const { handleBack } = useConfirmInfoForm();

  return (
    <form className="py-8 flex flex-col justify-center items-center">
      <p className="py-4 text-xl text-white font-semibold">Confirm</p>
      <div className="py-6 flex flex-col justify-center items-center gap-4">
        <p>{fields.username.value}</p>
        <p>{fields.email.value}</p>
      </div>
      <button
        className="my-4 px-8 py-2 rounded-lg border border-purple-700 text-lg text-white"
        onClick={handleBack}
      >
        Back
      </button>
    </form>
  );
};
