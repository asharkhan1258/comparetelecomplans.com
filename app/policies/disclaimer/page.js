import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <PolicyLayout title="Disclaimer" updated="September 1, 2026">
      <p>
        Please read this Disclaimer carefully before using this website. By using this site, you accept the terms described here alongside our <a href="/policies/terms-of-service" className="underline">Terms of Service</a>, <a href="/policies/privacy-policy" className="underline">Privacy Policy</a>, and <a href="/policies/advertising-disclosure" className="underline">Advertising Disclosure</a>.
      </p>

      <h2>1. Not an Internet Service Provider, Dealer, or Affiliate</h2>
      <p>
        {site.legalName}, doing business as {site.brandName}, is an independent consulting and advisory company. We do not build, own, operate, install, sell, or bill for internet, TV, phone, or any telecommunications service. We hold no carrier certifications, dealer agreements, or affiliate contracts with any service provider. When you decide to order service, your contract, installation, and billing are handled directly with the provider — not with {site.legalName}.
      </p>

      <h2>2. No Internet Sales or Carrier Deals</h2>
      <p>
        Nothing on this site constitutes an offer to sell internet service or grant custom carrier deals. We do not take payments, process orders, or issue billing invoices.
      </p>

      <h2>3. Trademarks and Provider Names</h2>
      <p>
        All provider names, plan names, and logos referenced on this site are trademarks of their respective owners, shown strictly for identification and comparative reference. Reference to any provider does not imply endorsement, sponsorship, or affiliation with {site.legalName}.
      </p>

      <h2>4. No Guarantee of Accuracy, Pricing, or Availability</h2>
      <p>
        Speeds, pricing ranges, contract lengths, equipment fees, and serviceability discussed on this site are general educational estimates based on publicly available data. They are:
      </p>
      <ul>
        <li>Not a guaranteed quote, offer, or binding contract;</li>
        <li>Subject to change by providers at any time without notice;</li>
        <li>Dependent on exact physical street address and provider coverage infrastructure;</li>
        <li>Always confirmed directly with the provider before placing an order.</li>
      </ul>

      <h2>5. Educational &amp; Consulting Purposes Only</h2>
      <p>
        Information on this site is provided for general educational guidance only. You are responsible for reviewing actual carrier terms and conditions before entering into any broadband service contract.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        Questions regarding this Disclaimer should be directed to:
        <br /><br />
        {site.legalName}
        <br />
        {site.address.line1}, {site.address.city}, {site.address.state} {site.address.zip}
        <br />
        {site.email} · {site.phoneDisplay}
      </p>
    </PolicyLayout>
  );
}
