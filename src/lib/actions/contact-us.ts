"use server";
import { prisma } from "@/lib/prisma";
import {
  ContactUsFormSchema,
  ContactUsFormState,
} from "@/lib/schemas/contact-us-form-schema";

export async function addMessage(
  prevState: ContactUsFormState,
  formData: FormData
): Promise<ContactUsFormState> {
  const validatedFields = ContactUsFormSchema.safeParse(
    Object.fromEntries(formData)
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.log("action called");
  try {
    await prisma.contactUs.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        subject: validatedFields.data.subject,
        message: validatedFields.data.message,
      },
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    return {
      errorMessage: "Something went wrong. Please try again later",
    };
  }
  return {
    successMessage:
      "Your message has been successfully sent. We will review your inquiry and get back to you as soon as possible. Have a wonderful day!",
  };
}
