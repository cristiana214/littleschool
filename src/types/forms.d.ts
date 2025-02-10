import * as z from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),

  phoneNumber: z.string().regex(/^(09|\+639)\d{9}$/, {
    message: "Please enter a valid Philippine phone number.",
  }),
  messageToSeller: z.string().max(500).optional(),
});

export type FormInput = z.infer<typeof formSchema>;
