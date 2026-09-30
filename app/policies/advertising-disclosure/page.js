import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Advertising & Business Disclosure" };

export default function AdvertisingDisclosurePage() {
  return (
    <PolicyLayout title="Advertising &amp; Business Disclosure" updated="September 1, 2026">
      <p>
        This Advertising &amp; Business Disclosure explains how {site.legalName} ("{site.brandName}") operates, our independence, and how we handle advertising and consulting information.
      </p>

      <h2>1. Independent Telecom Advisory &amp; Consulting</h2>
      <p>
        {site.legalName} operates strictly as an independent telecommunications consulting and educational advisory service. We are <strong>not</strong> an internet service provider (ISP), telecommunications carrier, authorized dealer, or reseller. We hold no carrier certifications or dealer licenses.
      </p>

      <h2>2. No Internet Sales or Carrier Deals</h2>
      <p>
        We do <strong>not</strong> sell internet plans, process consumer enrollments, or issue special carrier deals. All plan pricing figures and speed tiers displayed on this website are general industry estimates provided for comparative reference only. Users must contact their chosen provider directly to place an order.
      </p>

      <h2>3. No Affiliate or Referral Fees</h2>
      <p>
        {site.legalName} does not participate in carrier affiliate programs or collect referral commissions for internet sign-ups. Our consulting information and website guides are provided 100% free for consumers to help them evaluate speed and technology requirements.
      </p>

      <h2>4. Trademark Ownership</h2>
      <p>
        All provider brand names, trademarks, service marks, and logos referenced on this site belong exclusively to their respective owners. Mention of any provider does not imply endorsement, sponsorship, or affiliation with {site.legalName}.
      </p>

      <h2>5. Contact &amp; Questions</h2>
      <p>
        If you have questions regarding our business practices or independent consulting model, please contact us:
        <br /><br />
        <strong>{site.legalName}</strong>
        <br />
        {site.address.line1}, {site.address.city}, {site.address.state} {site.address.zip}
        <br />
        Email: {site.email} · Phone: {site.phoneDisplay}
      </p>
    </PolicyLayout>
  );
}
