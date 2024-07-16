"use client";
import { InputField } from "@/app/ui/input-field";
import { InputTextarea } from "@/app/ui/input-textarea";
import { SubmitButton } from "@/app/ui/submit-button";
import { addMessage } from "@/lib/actions/contact-us";
import { ContactUsFormState } from "@/lib/schemas/contact-us-form-schema";
import { useFormState } from "react-dom";
import { ErrorMessage } from "./error-message";
import { SuccessMessage } from "./success-message";
import { useEffect, useRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const initialState: ContactUsFormState = {};
  const [state, dispatch] = useFormState(addMessage, initialState);

  useEffect(() => {
    if (formRef.current && state.successMessage) {
      formRef.current.reset();
    }
  }, [state.successMessage]);

  return (
    <form action={dispatch} ref={formRef}>
      <Fade cascade damping={0.1}>
        <InputField
          name="name"
          type="text"
          label="Enter your name"
          placeholder="Your name"
          errors={state.errors?.name}
          required
        />
        <InputField
          name="email"
          type="email"
          label="Enter your email"
          placeholder="Your email"
          errors={state.errors?.email}
          required
        />
        <InputField
          name="subject"
          type="text"
          label="Subject"
          placeholder="Subject"
          errors={state.errors?.subject}
          required
        />
        <InputTextarea
          name="message"
          label="Write a message"
          placeholder="Your message"
          errors={state.errors?.message}
          required
        />
        <SubmitButton label="Send message" />
      </Fade>
      <Slide direction="up">
        {state.errorMessage && <ErrorMessage error={state.errorMessage} />}
        {state.successMessage && (
          <SuccessMessage error={state.successMessage} />
        )}
      </Slide>
    </form>
  );
}
