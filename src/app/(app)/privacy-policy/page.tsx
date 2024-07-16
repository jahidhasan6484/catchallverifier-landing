import { ReactNode } from "react";

export default function Page() {
  return (
    <main className="text-start mx-5 lg:mx-32">
      <div className="text-3xl font-medium text-on-surface mb-5 text-center">
        Privacy Policy for Catch-all Verifier
      </div>
      <p className="text-start">
        Welcome to Catch-all Verifier! Your privacy is very important to us.
        This Privacy Policy explains what information we collect and how we use
        it. If you have any questions, feel free to reach out to us at
        info@catchallverifier.com.
      </p>
      <SectionTitle>1. Consent</SectionTitle>
      <p>
        By using our website, you agree to our Privacy Policy and its terms.
      </p>
      <SectionTitle>2. Information We Collect</SectionTitle>
      <ul className="list-disc ml-12">
        <li>
          Direct Contact: If you contact us, we may collect details like your
          name, email, phone number, and any message or attachments you send us.
        </li>
        <li>
          Account Registration: When you create an account, we may ask for your
          name, company name, address, email, and phone number.
        </li>
      </ul>
      <SectionTitle>3. How We Use Your Information</SectionTitle>
      <p>We use the collected information to:</p>
      <ul className="list-disc ml-12">
        <li>
          Provide and maintain our website Improve and personalize your
          experience
        </li>
        <li>
          Understand how you use our site Develop new features and services
        </li>

        <li>
          Communicate with you for updates, customer service, marketing, and
        </li>
        <li>promotional purposes Send you emails Prevent fraud</li>
      </ul>
      <SectionTitle>
        4. Log Files We use log files to collect information like IP addresses,
      </SectionTitle>
      <p>
        We use log files to collect information like IP addresses, browser type,
        ISP, date and time stamps, referring/exit pages, and click counts. This
        helps us analyze trends, manage the site, track user movements, and
        gather demographic data.
      </p>
      <SectionTitle>
        5. Cookies and Web Beacons We use cookies to store information about
      </SectionTitle>
      <p>
        We use cookies to store information about visitor preferences and the
        pages they visit. This helps us optimize your experience based on your
        browser type and other details.
      </p>

      <SectionTitle>6. Advertising Partners</SectionTitle>
      <p>
        Third-party ad servers or networks may use cookies, JavaScript, or web
        beacons in their ads on our site. They automatically receive your IP
        address. These technologies help measure ad effectiveness and
        personalize the ads you see.
      </p>
      <SectionTitle>7. Third Party Privacy Policies</SectionTitle>
      <p>
        Our Privacy Policy does not cover other advertisers or websites. We
        recommend checking the privacy policies of these third parties for
        detailed information and opt-out options.
      </p>
      <SectionTitle>8. Your Privacy Rights</SectionTitle>
      <div className="text-lg font-medium mt-3">
        CCPA (for California Residents)
      </div>
      <p>You have the right to:</p>
      <ul className="list-disc ml-12">
        <li>Know what personal data we collect about you</li>
        <li>Request deletion of your personal data</li>
        <li>Opt-out of the sale of your personal data</li>
      </ul>
      <div className="text-lg font-medium mt-3">GDPR (for EU Residents)</div>
      <p>You have the right to:</p>
      <ul className="list-disc ml-12">
        <li>Restrict or object to our processing of your data</li>
        <li>Request deletion of your personal data</li>
        <li>Correct any inaccurate information</li>
        <li>Access your personal data</li>
        <li>Request data transfer to another organization or to you</li>
      </ul>
      <p className="mt-2">
        We have one month to respond to your request. Contact us to exercise
        these rights.
      </p>
      <SectionTitle>9. Children&apos;s Privacy</SectionTitle>
      <p>
        We prioritize protecting children&apos;s privacy. We do not knowingly
        collect personal information from children under 13. If you believe your
        child has provided us with personal data, please contact us immediately,
        and we will remove it from our records.
      </p>
      <SectionTitle>10. Changes to This Privacy Policy</SectionTitle>
      <p>
        We may update our Privacy Policy occasionally. We encourage you to
        review this page periodically for any changes. Updates take effect
        immediately upon posting.
      </p>
      <SectionTitle>11. Contact Us</SectionTitle>
      <p>
        For any questions or suggestions about our Privacy Policy, please
        contact us at{" "}
        <a href="mailto:info@catchallverifier.com">info@catchallverifier.com</a>
        .
      </p>

      <p className="mt-5 mb-20">
        Thank you for trusting Catch-all Verifier with your information. Your
        privacy is our priority!
      </p>
    </main>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <div className="text-2xl font-medium mt-5 mb-2">{children}</div>;
}
