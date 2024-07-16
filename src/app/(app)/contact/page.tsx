"use client";
import { ContactForm } from "@/app/ui/contact-form";
import contactHero from "@/static/images/contact-hero.svg";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Page() {
  return (
    <main className="lg:flex lg:justify-center mt-10">
      <Image
        src={contactHero}
        alt="hero"
        className="mt-10 mb-10 px-20 animate-fadeInScale"
        width={800}
      />
      <div className="text-start mb-10 mt-10 lg:max-w-md">
        <Fade direction="up" delay={600} duration={800}>
          <div className="text-on-surface font-bold text-3xl">Contact</div>
        </Fade>

        <Fade direction="up" delay={300} duration={800}>
          <div className="text-on-surface-variant text-sm mt-3 mb-10">
            We&apos;re here to help and answer any question you might have. We
            look forward to hearing from you.
          </div>
        </Fade>

        <ContactForm />
      </div>
    </main>
  );
}
