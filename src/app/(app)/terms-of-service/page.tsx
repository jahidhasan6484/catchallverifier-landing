import { ReactNode } from "react";

export default function Page() {
  return (
    <main className="text-start mx-5 lg:mx-32">
      <div className="text-3xl font-medium text-on-surface mb-5 text-center">
        Terms of Use for Catch-all Verifier
      </div>

      <p>
        Welcome to Catch-all Verifier! These Terms of Use govern your access to
        and use of all content, products, and services available at{" "}
        <a href="https://www.catchallverifier.com" className="text-blue-500">
          https://www.catchallverifier.com
        </a>{" "}
        (the &quot;Service&quot;), operated by Catch-all Verifier (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
      </p>

      <SectionTitle>1. Acceptance of Terms</SectionTitle>
      <p>
        By accessing or using our Services, you agree to comply with and be
        bound by these Terms of Use and all other operating rules and policies
        that we may publish from time to time. If you do not agree to any part
        of these terms, please do not use our Services.
      </p>
      <SectionTitle>2. Intellectual Property</SectionTitle>
      <p>
        All intellectual property rights in the content, products, and services
        provided by Catch-all Verifier remain with us and our licensors. You do
        not obtain any ownership rights by using our Services.
      </p>
      <SectionTitle>3. Third-Party Services</SectionTitle>
      <p>
        Our Services may include third-party services, products, software,
        embeds, or applications (&quot;Third-Party Services&quot;). Your use of these
        Third-Party Services is at your own risk. We are not responsible for any
        issues arising from your use of these services, and we are not liable
        for any damages or losses caused by them.
      </p>
      <SectionTitle>4. Accounts</SectionTitle>
      <p>
        If you register for an account, you must provide accurate and complete
        information. You are responsible for all activities under your account
        and must keep your account information up-to-date and your password
        secure. Notify us immediately of any unauthorized use of your account or
        any other security breaches.
      </p>
      <SectionTitle>5. Links to Other Websites</SectionTitle>
      <p>
        Our Service may contain links to third-party websites or services that
        are not owned or controlled by Catch-all Verifier. We are not
        responsible for the content, privacy policies, or practices of any
        third-party websites or services. We recommend reading the terms and
        privacy policies of any third-party sites you visit.
      </p>
      <SectionTitle>6. Termination</SectionTitle>
      <p>
        We may suspend or terminate your access to our Services at any time,
        with or without cause or notice. If you wish to terminate your account
        or these Terms, you can stop using our Services. Provisions that should
        survive termination, including ownership, warranty disclaimers,
        indemnity, and liability limitations, will remain in effect.
      </p>
      <SectionTitle>7. Disclaimer</SectionTitle>
      <p>
        Our Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;. We disclaim all
        warranties, express or implied, including merchantability, fitness for a
        particular purpose, and non-infringement. We do not guarantee that our
        Services will be error-free or uninterrupted.
      </p>
      <SectionTitle>8. Jurisdiction and Applicable Law</SectionTitle>
      <p>
        These Terms of Use are governed by the laws of New York. Any disputes
        related to these Terms or our Services will be resolved in the state and
        federal courts located in New York.
      </p>
      <SectionTitle>9. Changes to Terms</SectionTitle>
      <p>
        We reserve the right to modify or replace these Terms at our discretion.
        If changes are material, we will notify you via our website, email, or
        other communication at least 30 days before the changes take effect. If
        you disagree with the changes, you should stop using our Services within
        the notice period. Continued use of our Services after the changes take
        effect constitutes acceptance of the new terms.
      </p>
      <SectionTitle>10. Contact Us</SectionTitle>
      <p className="mb-20">
        If you have any questions about these Terms of Use, please contact us at{" "}
        <a href="mailto:info@catchallverifier.com">info@catchallverifier.com</a>
        .
      </p>
    </main>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <div className="text-2xl font-medium mt-5 mb-2">{children}</div>;
}
