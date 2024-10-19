import { FC } from "react";
import { getFormProps, getInputProps } from "@conform-to/react";
import { FormFieldsType, FormType } from "../../_types/info";

type EnterInfoFormProps = {
  form: FormType;
  fields: FormFieldsType;
  action: (payload: FormData) => void;
};

export const EnterInfoForm: FC<EnterInfoFormProps> = ({
  form,
  fields,
  action,
}) => {
  return (
    <form
      action={action}
      {...getFormProps(form)}
      className="py-8 flex flex-col items-center gap-6"
      noValidate
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <label htmlFor="username" className="text-lg text-white font-semibold">
          Username
        </label>
        <input
          {...getInputProps(fields.username, { type: "text" })}
          name={fields.username.name}
          key={fields.username.key}
          className="px-2 py-1 border border-purple-700 outline-none rounded-md min-w-[300px] text-slate-800"
        />
        {fields.username.errors && (
          <p className="text-red-500 font-semibold">{fields.username.errors}</p>
        )}
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <label htmlFor="email" className="text-lg text-white font-semibold">
          Email
        </label>
        <input
          {...getInputProps(fields.email, { type: "email" })}
          name={fields.email.name}
          key={fields.email.key}
          className="px-2 py-1 border border-purple-700 outline-none rounded-md min-w-[300px] text-slate-800"
        />
        {fields.email.errors && (
          <p className="text-red-500 font-semibold">{fields.email.errors}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="border border-white rounded-xl px-8 py-2"
        >
          Next
        </button>
      </div>
    </form>
  );
};
