import { z } from "zod";

const enterInfoFormSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(6, { message: "Username must be more than six characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter correct email address" }),
});

export { enterInfoFormSchema };
