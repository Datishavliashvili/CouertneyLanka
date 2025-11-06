import z from "zod";

export const formSchema = z.object({
  company: z.string().min(1, "Pls Provide Company"),
  username: z.string().min(6, "6 Character Long").max(20, "Max 20 Characters"),
  phoneNumber: z.string().min(1, "Provide Number"),
  email: z.email("Invalid Email"),
  description: z
    .string()
    .min(20, "Min 20 Characters")
    .max(1000, "Limit Word Reached"),
});
