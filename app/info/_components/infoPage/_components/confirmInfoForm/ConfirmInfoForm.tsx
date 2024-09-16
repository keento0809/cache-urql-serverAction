import { FC } from "react";
import { useConfirmInfoForm } from "./_hooks/useConfirmInfoForm";

export const ConfirmInfoForm: FC = () => {
  const { handleBack } = useConfirmInfoForm();

  return (
    <div className="py-8 flex flex-col justify-center items-center">
      <p className="py-4 text-xl text-white font-semibold">ConfirmInfoForm</p>
      <button
        className="my-4 px-8 py-2 rounded-lg border border-purple-700 text-lg text-white"
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
};
