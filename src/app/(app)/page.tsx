"use client";
import phoneHero from "@/static/images/phone-hero.png";
import tabHero from "@/static/images/tab-hero.png";
import desktopHero from "@/static/images/desktop-hero.png";
import bypassCatchAllEmailsImage from "@/static/images/bypass-catch-all-emails-image.svg";
import singleEmailVeirficationImage from "@/static/images/single-email-verification-image.svg";
import apiIntegrationImage from "@/static/images/api-integration-image.svg";
import bulkEmailVerificationImage from "@/static/images/bulk-email-verification-image.svg";
import emailBackupImage from "@/static/images/email-backup.svg";
import emailListImage from "@/static/images/email-list.svg";
import leadListImage from "@/static/images/lead-list.svg";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid";
import emilyJohnsonImage from "@/static/images/mansoor-zazi.jpeg";
import michaelLeeImage from "@/static/images/michael-lee.png";
import davidKimImage from "@/static/images/david-kim.png";
import lauraNguyenImage from "@/static/images/laura-nguyen.png";
import quoteImage from "@/static/images/quote.svg";
import tabStepPath from "@/static/images/tab-step-path.svg";
import tabStepPathLeft from "@/static/images/tab-step-path-left.svg";
import desktopStepPath from "@/static/images/desktop-step-path.svg";
import checkIcon from "@/static/images/check-icon.svg";
import checkMarkShield from "@/static/images/checkmark-shield.svg";

import Image from "next/image";
import { ReactNode, Suspense } from "react";
import { SectionHeader } from "../ui/section-header";
import Link from "next/link";
import { HomePricing } from "../ui/home-pricing";
import { Metadata } from "next";

import Email from "../ui/animations/email";
import { Fade } from "react-awesome-reveal";

// export const metadata: Metadata = {
//   title: "Catch-all Verifier | verify catch-all, risky & unknown email",
//   description:
//     "Catch All Verifier is one of the best real-time risky email verification platforms that can verify all your catch all (accept-all), even unknown emails as well.",
// };

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <div className="mx-4 lg:flex lg:flex-row-reverse items-center mt-5">
        <div className="lg:hidden md:mb-10">
          <Fade direction="up">
            <h1 className="text-on-surface text-4xl md:text-5xl font-medium mb-3">
              Boost Email Delivery with Catch-all Verifier
            </h1>
          </Fade>
          <Fade direction="up" delay={200}>
            <div className="text-on-surface text-xl  mb-4">
              We verify Risky, Catch-all (Accept-all) & Unknown Emails
            </div>
          </Fade>
        </div>
        <div className="flex justify-center lg:ml-10 relative">
          <Image
            src={phoneHero}
            alt="hero"
            className="md:hidden animate-fadeInScale"
          />
          <Image
            src={tabHero}
            alt="hero"
            className="hidden md:block lg:hidden mb-10 animate-fadeInScale"
          />
          <Image
            src={desktopHero}
            alt="hero"
            className="hidden lg:block mb-10 animate-fadeInScale"
          />
        </div>
        <div className="md:text-start md:max-w-xl lg:ms-20">
          <div className="hidden lg:block">
            <Fade direction="up">
              <h1 className="text-on-surface text-4xl md:text-5xl font-medium mb-3">
                Boost Email Delivery with Catch-all Verifier
              </h1>
            </Fade>
            <Fade direction="up" delay={200}>
              <div className="text-on-surface text-xl  mb-4">
                We verify Risky, Catch-all (Accept-all) & Unknown Emails
              </div>
            </Fade>
          </div>
          {/* Features */}
          <div className="text-on-surface text-start font-medium text-sm mb-10 mt-10 md:max-w-md">
            <Fade direction="up" delay={400}>
              <CheckBoxItem>
                Detect truly deliverable emails from 98% of catch-all emails.
              </CheckBoxItem>
            </Fade>
            <Fade direction="up" delay={600}>
              <CheckBoxItem>
                2X your revenue contacting these less-targeted prospects.
              </CheckBoxItem>
            </Fade>
            <Fade direction="up" delay={800}>
              <CheckBoxItem>
                Land in inbox and Say Goodbye to high bounce rates.
              </CheckBoxItem>
            </Fade>
          </div>
          {/* Try it free button */}
          <div className="flex justify-center md:justify-start">
            <div className="mb-10 animate-fadeInScale">
              <Link
                href="https://app.catchallverifier.com/register"
                className="relative inline-block text-lg group"
              >
                <span className="relative z-10 block px-8 py-3 overflow-hidden font-medium leading-tight text-primary transition-colors duration-300 ease-out border-2 border-primary rounded-lg group-hover:text-surface">
                  <span className="absolute inset-0 w-full h-full rounded-lg bg-surface"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform -translate-x-full bg-primary group-hover:translate-x-0"></span>
                  <span className="relative">Try 100 emails for free</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bypass Email section */}
      <div className="mx-4 md:flex md:justify-center">
        <div className="md:text-start md:max-w-md lg:max-w-full lg:flex lg:flex-row-reverse items-center lg:mt-32">
          <div className="flex justify-center animate-fadeInScale">
            <Email />
          </div>

          <div className="lg:max-w-md lg:mr-10">
            <Fade direction="up" delay={600} duration={800}>
              <SectionHeader>Bypass catch-all emails</SectionHeader>
            </Fade>
            <Fade direction="up" delay={300} duration={800}>
              <SectionDescription>
                Enhance your email discovery by 20-30% with our advanced
                catch-all algorithm.
              </SectionDescription>
            </Fade>
            <Fade cascade damping={0.1}>
              <div className="mt-10 lg:pr-20">
                <div className="text-start text-sm text-on-surface mb-1">
                  Before
                </div>
                <div className="bg-white flex justify-between items-center p-4 py-5 shadow-[0px_0px_30px_0px_rgba(103,62,229,.04)] rounded-xl mb-2">
                  <div className="text-on-surface-variant text-sm">
                    info@catchallverifier.com
                  </div>
                  <div className="text-error border border-error rounded-full px-3 text-sm bg-error bg-opacity-10">
                    Risky
                  </div>
                </div>
                <div className="text-start text-sm text-on-surface mb-1">
                  After
                </div>
                <div className="bg-white flex justify-between items-center p-4 py-5 shadow-[0px_0px_30px_0px_rgba(103,62,229,.04)] rounded-xl mb-2">
                  <div className="text-on-surface-variant text-sm">
                    info@catchallverifier.com
                  </div>
                  <div className="text-success border border-success rounded-full px-3 text-sm bg-success bg-opacity-10">
                    Valid
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* Verification section */}
      <div className="mx-4 md:flex md:justify-center mt-32">
        <div className="mt-20 md:max-w-md lg:max-w-full lg:flex lg:items-center lg:gap-x-16 lg:text-start">
          <div className="lg:max-w-md">
            <Fade direction="up">
              <SectionHeader>
                One platform for all your email verification needs.
              </SectionHeader>
            </Fade>
            <Fade direction="up" delay={200}>
              <SectionDescription>
                Skip the hassle of multiple tools and streamline your workflow
                with Catch-all Verifier, the ultimate solution that effortlessly
                manages all your email verification needs in one place.
              </SectionDescription>
            </Fade>

            <div className="text-on-surface text-start text-sm mb-6 mt-10 font-medium">
              <Fade direction="up" delay={400}>
                <CheckShildItem>
                  Effortlessly verify single email addresses in real-time.
                </CheckShildItem>
              </Fade>
              <Fade direction="up" delay={600}>
                <CheckShildItem>
                  Authenticate every address in your bulk email lists.
                </CheckShildItem>
              </Fade>
              <Fade direction="up" delay={800}>
                <CheckShildItem>
                  Seamlessly integrate our API for customized email verification
                  solutions.
                </CheckShildItem>
              </Fade>
            </div>
          </div>
          <div className="lg:max-w-md">
            <Fade direction="down">
              <VerificationSectionCard
                imgSrc={singleEmailVeirficationImage}
                title="Single Email Verification"
                description="Unlock the capability to effortlessly verify the authenticity of any email address in real-time."
              />
            </Fade>
            <Fade direction="down" delay={100}>
              <VerificationSectionCard
                imgSrc={bulkEmailVerificationImage}
                title="Bulk Email Verification"
                description="Upload your list for comprehensive email verification, ensuring every address is authenticated."
              />
            </Fade>
            <Fade direction="down" delay={200}>
              <VerificationSectionCard
                imgSrc={apiIntegrationImage}
                title="API Integration"
                description="Seamlessly integrate our API for email verification or opt for a tailored solution to suit your needs."
              />
            </Fade>
          </div>
        </div>
      </div>

      {/* How its works section */}
      <div className="mx-4 md:flex md:justify-center">
        <div className="mt-32 md:max-w-md xl:max-w-full">
          <Fade direction="up">
            <SectionHeader>How it works</SectionHeader>
          </Fade>
          <Fade direction="up" delay={200}>
            <SectionDescription>
              We validate emails for accuracy and cleanliness, ensuring your
              list is reliable for your campaigns.
            </SectionDescription>
          </Fade>

          <div className="xl:flex xl:justify-stretch xl:max-w-screen-xl xl:relative">
            <Fade direction="left" cascade>
              <div className="absolute hidden xl:flex top-14 left-0 justify-between max-w-screen-xl w-full px-72">
                <Fade direction="right">
                  <Image src={desktopStepPath} width={250} alt="path" />
                </Fade>
                <Fade direction="left">
                  <Image src={desktopStepPath} width={250} alt="path" />
                </Fade>
              </div>
            </Fade>

            <div className="mt-10 mx-8 relative flex-1">
              <Fade direction="left">
                <Image
                  src={tabStepPath}
                  height={235}
                  alt="path"
                  className="hidden md:block xl:hidden absolute -right-20 top-20"
                />
              </Fade>
              <Fade direction="up">
                <div className="flex justify-center">
                  <Image src={emailListImage} alt="hero" />
                </div>
                <div className="text-center text-[#3772FF] font-medium mt-3">
                  Step 1
                </div>
                <div className="text-primary text-xl font-bold mb-1 mt-3">
                  Submit your catch-all or risky email list
                </div>
                <div className="text-on-surface-variant text-sm mt-2">
                  Our email list validation service includes a brief waiting
                  period before returning your lead list.
                </div>
              </Fade>
            </div>

            <div className="mt-10 mx-8 relative flex-1">
              <Fade direction="right">
                <Image
                  src={tabStepPathLeft}
                  height={255}
                  alt="path"
                  className="hidden md:block xl:hidden absolute -left-20 top-20"
                />
              </Fade>
              <Fade direction="up" delay={200}>
                <div className="flex justify-center">
                  <Image src={leadListImage} alt="hero" />
                </div>
                <div className="text-center text-primary font-medium mt-3">
                  Step 2
                </div>
                <div className="text-primary text-xl font-bold mb-1 mt-3">
                  We scrub your catch-all lead list
                </div>
                <div className="text-on-surface-variant text-sm mt-2">
                  We analyze all of your emails and detect which one is valid
                  and which one is not using our powerful algorithm that can
                  identify valid emails even from catch-all, risky and unknown
                  emails in real time.
                </div>
              </Fade>
            </div>

            <div className="mt-10 mx-8 flex-1">
              <Fade direction="up" delay={400}>
                <div className="flex justify-center">
                  <Image src={emailBackupImage} alt="hero" />
                </div>
                <div className="text-center text-success font-medium mt-3">
                  Step 3
                </div>
                <div className="text-primary text-xl font-bold mb-1 mt-3">
                  Receive back your lead list
                </div>
                <div className="text-on-surface-variant text-sm mt-2">
                  After assembling your lead list, simply upload the file onto
                  our platform to initiate the process using the sole tool
                  capable of validating high-risk emails.
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-32 lg:mt-52"></div>
      <Suspense>
        <HomePricing />
      </Suspense>

      {/* Client message section */}
      <div className="mx-4 md:flex md:justify-center mb-32">
        <div className="mt-32 md:max-w-md lg:max-w-screen-xl lg:px-24">
          <Fade direction="up">
            <SectionHeader>Valuable client message</SectionHeader>
          </Fade>
          <Fade direction="up" delay={200}>
            <SectionDescription>
              Testimonials from valued clients we have worked with
            </SectionDescription>
          </Fade>
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-10">
            <Fade direction="right">
              <ClientMessageItem
                image={emilyJohnsonImage}
                name="Mansoor Zazi"
                designation="Account Manager"
                message="Catch-all Verifier is an easy to use and highly accurate catch-all email verification tool. It's a very quick, reliable and cost effective email catch-all verification tool!!"
              />
            </Fade>
            <Fade direction="right" delay={50}>
              <ClientMessageItem
                image={michaelLeeImage}
                name="Michael Lee"
                designation="Email Marketing Specialist"
                message="Our bounce rates dropped dramatically after using this service. It's efficient, reliable, and has protected our sender reputation. Highly recommend it!"
              />
            </Fade>
            <Fade direction="right" delay={100}>
              <ClientMessageItem
                image={davidKimImage}
                name="David Kim"
                designation="Marketing Manager"
                message="Using this catch-all email verification service significantly reduced our bounce rates and improved email deliverability. It's efficient, user-friendly, and indispensable for any email marketing strategy. Highly recommended!"
              />
            </Fade>
          </div>
        </div>
      </div>
    </main>
  );
}

function SectionSubHeader({ children }: { children: ReactNode }) {
  return (
    <div className="text-on-surface text-xl font-bold mb-1 mt-5">
      {children}
    </div>
  );
}

function SectionDescription({ children }: { children: ReactNode }) {
  return <div className="text-on-surface-variant text-sm">{children}</div>;
}

function CheckBoxItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start mb-3">
      <Image src={checkIcon} alt="check icon" width={15.5} className="mr-2" />
      <div className="flex-1">{children}</div>
    </div>
  );
}

function CheckShildItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start mb-3">
      <Image
        src={checkMarkShield}
        alt="check icon"
        width={20}
        className="mr-2"
      />
      <div className="flex-1">{children}</div>
    </div>
  );
}

function VerificationSectionCard({
  imgSrc,
  title,
  description,
}: {
  imgSrc: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white text-start shadow-[0px_0px_30px_0px_rgba(103,62,229,.08)] p-5 rounded-xl my-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_40px_0px_rgba(103,62,229,.15)]">
      <Image src={imgSrc} alt="icon" />
      <SectionSubHeader>{title}</SectionSubHeader>
      <SectionDescription>{description}</SectionDescription>
    </div>
  );
}

function ClientMessageItem({
  image,
  name,
  designation,
  message,
}: {
  image: any;
  name: string;
  designation: string;
  message: string;
}) {
  return (
    <div className="bg-white shadow-[0px_0px_40px_0px_rgba(103,62,229,.08)] my-4 rounded-xl px-5 py-5">
      <Image src={quoteImage} width={20} alt="quote" className="mb-5" />
      <div className="flex items-center">
        <Image src={image} width={50} alt="person" className="rounded-full" />
        <div className="flex-1 text-start ml-2">
          <div className="text-on-surface font-bold">{name}</div>
          <div className="text-on-surface-variant text-sm">{designation}</div>
        </div>
      </div>
      <div className="text-sm text-on-surface text-start mt-3">{message}</div>
    </div>
  );
}
