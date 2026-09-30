import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms of Service" updated="September 1, 2026">
      <p>
        These Terms of Service ("Terms") govern your use of the website located at{" "}
        {site.domain} operated by {site.legalName} ("we," "us," or "our"), doing business as {site.brandName}. By using this site, you agree to these Terms.
      </p>

      <h2>1. Scope of Service &amp; Business Model</h2>
      <p>
        {site.brandName} operates strictly as an independent telecommunications consulting and educational advisory platform. We are <strong>not</strong> an internet service provider (ISP), telecommunications carrier, dealer, or affiliate. We do not sell internet plans, process sign-ups, issue carrier deals, or receive affiliate commissions. Information presented on this site is for general educational comparison. Final availability, contract terms, installation fees, and billing are established directly between you and your chosen provider.
      </p>

      <h2>2. Permissible Use</h2>
      <p>By using this website, you represent and warrant that:</p>
      <ul>
        <li>You are at least 18 years old and possess the legal authority to enter into these Terms.</li>
        <li>All information you submit via forms or telephone consultation is accurate.</li>
        <li>You will not use this site for fraudulent, malicious, or automated bot activities.</li>
      </ul>

      <h2>3. Pricing &amp; Availability Disclaimer</h2>
      <p>
        Broadband plan details, speed estimates, and pricing tiers represent general industry ranges. They do not constitute a binding quote or financial contract. Final pricing, equipment rentals, taxes, and promotional terms must be verified directly with the provider.
      </p>

      <h2>4. Intellectual Property Rights</h2>
      <p>
        All original content, branding, design elements, and layout structures belong to {site.legalName}. All third-party provider names, trademarks, logos, and brand assets referenced belong to their respective trademark holders and are used solely for identification and comparative reference.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, {site.legalName} shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or any service agreements concluded directly with third-party providers.
      </p>

      <h2>6. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, United States, without regard to its conflict of law principles. Any legal proceedings shall be brought exclusively in the courts located in DeKalb County, Georgia.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        <strong>{site.legalName}</strong>
        <br />
        {site.address.line1}, {site.address.city}, {site.address.state} {site.address.zip}
        <br />
        Email: {site.email} · Phone: {site.phoneDisplay}
      </p>
    </PolicyLayout>
  );
}
