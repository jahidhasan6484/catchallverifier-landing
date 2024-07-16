import Link from "next/link";
import Image from "next/image";
import logoFull from "@/static/images/logo_full.svg";
import facebookImage from "@/static/images/facebook.svg";
import twitterImage from "@/static/images/twitter.svg";
import linkedinImage from "@/static/images/linkedIn.svg";

export function Footer() {
  return (
    <div className="bg-[#DDEDE6] pt-10">
      <div className="lg:flex lg:justify-evenly lg:items-start">
        <div>
          <div className="flex justify-center">
            <Image src={logoFull} width={150} className="mr-3 " alt="logo" />
          </div>
          <div className="flex justify-center">
            <div className="text-on-surface-variant text-sm text-center w-72 mx-5 mt-5">
              Catch-all Verifier is one of the best real-time risky email
              verification platforms.
            </div>
          </div>
          <div className="text-on-surface p-1 text-sm text-center mt-3">
            info@catchallverifier.com
          </div>
        </div>
        <div className="text-center mt-10 lg:mt-0">
          <div className="text-on-surface text-lg font-medium mb-2">
            Quick links
          </div>
          <Link
            href="https://catchallverifier.readme.io/"
            className="text-on-surface p-1 block"
          >
            API Integration
          </Link>
          <Link href="/pricing" className="text-on-surface p-1 block">
            Pricing
          </Link>
          <Link href="/contact" className="text-on-surface p-1 block">
            Contact
          </Link>
        </div>
        <div className="text-center mt-10 lg:mt-0">
          <div className="text-on-surface text-lg font-medium mb-2">Legal</div>
          <Link href="/terms-of-service" className="text-on-surface p-1 block">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="text-on-surface p-1 block">
            Privacy Policy
          </Link>
        </div>
        {/* <div className="text-center mt-10">
        <div className="text-on-surface text-lg font-medium mb-2">
          Our Address
        </div>
        <div className="text-on-surface p-1 text-sm">
        Care+ Family Parham bridges canton Jackson, MS 392111
      </div>
        <div className="text-on-surface p-1 text-sm">
          info@catchallverifier.com
        </div>
      </div> */}
        <div className="text-center mt-10 lg:mt-0">
          <div className="text-on-surface text-lg font-medium mb-1">
            Social Links
          </div>
          <div className="flex justify-center">
            <Link href="https://www.facebook.com/catchallverifier">
              <Image src={facebookImage} alt="facebook" className="m-2" />
            </Link>
            <Link href="https://www.linkedin.com/company/catch-all-verifier/">
              <Image src={linkedinImage} alt="linkedin" className="m-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 pb-3">
        © 2024 Catch-all Verifier. All rights reserved.
      </div>
    </div>
  );
}
