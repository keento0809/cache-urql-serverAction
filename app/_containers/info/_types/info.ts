import { FieldMetadata, FormMetadata } from "@conform-to/react";

type FormType = FormMetadata<
  {
    username: string;
    email: string;
  },
  string[]
>;

type FormFieldsType = Required<{
  username: FieldMetadata<
    string,
    {
      username: string;
      email: string;
    },
    string[]
  >;
  email: FieldMetadata<
    string,
    {
      username: string;
      email: string;
    },
    string[]
  >;
}>;

export type { FormType, FormFieldsType };
