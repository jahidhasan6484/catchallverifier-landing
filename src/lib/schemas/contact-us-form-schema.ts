import { z } from "zod";

export const ContactUsFormSchema = z.object({
  name: z
    .string({ required_error: "First name is required" })
    .trim()
    .min(1, { message: "First name is required" })
    .max(100, { message: "First must be less than 100 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(1, { message: "Email name is required" })
    .email({ message: "Invalid email" })
    .max(100, { message: "Email must be less than 100 characters" }),
  subject: z
    .string({ required_error: "Subject name is required" })
    .trim()
    .min(1, { message: "Subject name is required" }),
  message: z
    .string({ required_error: "Message name is required" })
    .trim()
    .min(1, { message: "Message name is required" }),
});

export type ContactUsFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    password?: string[];
    message?: string[];
  };
  errorMessage?: string;
  successMessage?: string;
};
