import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" updated="September 1, 2026">
      <p>
        This Privacy Policy describes how {site.legalName} ("{site.brandName}," "we,"
        "us," or "our") collects, uses, protects, and discloses personal information when
        you visit our website ({site.domain}) or interact with our internet plan comparison
        and advisory services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect information to provide, personalize, and improve our advisory services. This includes:
      </p>
      <ul>
        <li>
          <strong>Contact Information You Provide:</strong> Your full name, telephone number, email address, and physical service address submitted via our forms or during phone interactions.
        </li>
        <li>
          <strong>Service Request Details:</strong> Your current internet provider, preferred speeds, budget requirements, and specific inquiry notes.
        </li>
        <li>
          <strong>Automatically Collected Technical Data:</strong> IP address, device type, browser specifications, operating system, referring URL, time zone, and interaction data collected through log files, cookies, and analytics scripts.
        </li>
        <li>
          <strong>Coverage &amp; Qualification Data:</strong> Serviceability lookup results returned by local carrier coverage databases corresponding to your submitted address.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information for the following legitimate business purposes:</p>
      <ul>
        <li>To identify which internet service providers, plan tiers, and speed coverage exist at your specific address.</li>
        <li>To contact you by phone, SMS, or email regarding your requested internet plan comparison.</li>
        <li>To connect you directly with your selected provider's ordering team to complete your service setup.</li>
        <li>To maintain site security, detect and prevent fraud or abusive requests, and measure advertising campaign performance.</li>
        <li>To fulfill legal obligations, dispute resolutions, and recordkeeping standard practices.</li>
      </ul>

      <h2>3. How Information Is Shared</h2>
      <p>
        {site.legalName} is an independent referral partner. We share your information strictly under the following conditions:
      </p>
      <ul>
        <li>
          <strong>Selected Telecommunications Providers:</strong> When you explicitly request to be connected with a provider, we transfer the minimum necessary contact and address details to that provider's order verification team.
        </li>
        <li>
          <strong>Operational Vendors:</strong> Secure third-party service providers who assist in site hosting, analytics, telephony routing, or transactional communication under strict contractual confidentiality obligations.
        </li>
        <li>
          <strong>Legal &amp; Regulatory Compliance:</strong> When required by law, subpoena, court order, or to protect the rights, property, or safety of {site.legalName}, our users, or the public.
        </li>
      </ul>
      <p>
        <strong>No Sale of Personal Data:</strong> We do not sell, rent, or trade your personal information to third-party data brokers for separate marketing purposes.
      </p>

      <h2>4. Telemarketing &amp; TCPA Consent Notice</h2>
      <p>
        By submitting a inquiry or contact form containing your phone number, you grant explicit consent for {site.legalName} and our authorized provider partners to contact you at the phone number provided — including via phone calls or SMS messages — regarding your internet plan inquiry. You understand that consent is not a required condition of purchasing any internet service. Message and data rates may apply. You may opt out of SMS communications at any time by replying STOP, or request call removal by calling {site.phoneDisplay} or emailing {site.email}.
      </p>

      <h2>5. Cookie Policy &amp; Analytics Tracking</h2>
      <p>
        We utilize essential cookies for core site navigation, along with performance cookies (such as Google Ads conversion tags and web analytics) to evaluate user interaction and ad performance. You can manage or disable non-essential cookies via your browser settings or through our Cookie Consent banner. See our <a href="/policies/cookie-policy" className="underline">Cookie Policy</a> for complete details.
      </p>

      <h2>6. Data Security &amp; Retention</h2>
      <p>
        We maintain reasonable administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, loss, alteration, or disclosure. Personal information is retained only as long as necessary to fulfill the request, comply with legal requirements, or resolve disputes.
      </p>

      <h2>7. Consumer Rights &amp; State Specific Disclosures</h2>
      <p>
        Depending on your state of residence (including California, Virginia, Colorado, Connecticut, Utah, and others), you may possess statutory privacy rights including the right to request access to, correction of, or deletion of your personal data. To submit a verifiable consumer request, email {site.email} or call {site.phoneDisplay}.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        Our website and services are intended exclusively for adult consumers seeking home or business internet solutions. We do not knowingly collect or solicit personal information from individuals under 18 years of age.
      </p>

      <h2>9. Contact Information</h2>
      <p>
        If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:
        <br /><br />
        <strong>{site.legalName}</strong> (dba {site.brandName})
        <br />
        {site.address.line1}
        <br />
        {site.address.city}, {site.address.state} {site.address.zip}
        <br />
        Email: <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
        <br />
        Phone: {site.phoneDisplay}
      </p>
    </PolicyLayout>
  );
}
