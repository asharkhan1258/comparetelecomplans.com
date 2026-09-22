import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" updated="September 1, 2026">
      <p>
        This Privacy Policy explains how {site.legalName} ("{site.brandName}," "we,"
        "us") collects, uses, and shares information when you visit this website or
        submit information through it. This is a general-purpose template; have it
        reviewed by a qualified attorney for your state and business before publishing.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide.</strong> Name, phone number, email address,
          service address, and anything you type into a form or say on a call.
        </li>
        <li>
          <strong>Automatic information.</strong> IP address, browser and device type,
          pages viewed, referring pages, and approximate location, collected through
          cookies and similar technologies described in our{" "}
          <a href="/policies/cookie-policy">Cookie Policy</a>.
        </li>
        <li>
          <strong>Information from partners.</strong> If a provider confirms whether
          service is available at an address you submitted, we may receive that
          serviceability result back from them.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To check which providers and plans are available at an address you submit.</li>
        <li>To contact you by phone, text, or email about the request you made.</li>
        <li>To connect you with a provider's ordering team, with your request.</li>
        <li>To operate, secure, and improve this website.</li>
        <li>To meet legal, tax, and recordkeeping obligations.</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We share the information needed to act on your request with the specific
        internet provider(s) you ask to be connected with. We may also share
        information with service providers who help us operate this site (such as
        hosting, email delivery, or telephony vendors), under agreements that limit
        their use of it. We do not sell your personal information to data brokers.
      </p>

      <h2>Consent to be contacted</h2>
      <p>
        By submitting a form on this site with your phone number, you agree that{" "}
        {site.legalName} and, where you've asked to be connected, the relevant
        provider, may contact you at that number — including by call or text, which
        may use an autodialer or pre-recorded message — about the request you made.
        This consent is not a condition of purchasing any service. Message and data
        rates may apply. Reply STOP to opt out of texts, or call{" "}
        {site.phoneDisplay} to be removed from our call list.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Ask us what personal information we hold about you.</li>
        <li>Ask us to correct or delete that information.</li>
        <li>Opt out of marketing calls, texts, or emails at any time.</li>
        <li>Disable cookies in your browser (this may affect site functionality).</li>
      </ul>
      <p>
        To exercise any of these, email {site.email} or call {site.phoneDisplay}.
        Residents of certain states (including California, Colorado, Connecticut,
        Virginia, and others with consumer privacy laws) may have additional statutory
        rights; this section should be expanded with counsel to reflect the specific
        laws that apply to your business and customers.
      </p>

      <h2>Data retention and security</h2>
      <p>
        We keep information for as long as needed to fulfill the purposes described
        above, resolve disputes, and meet legal obligations, then delete or anonymize
        it. We use reasonable administrative and technical safeguards, but no method
        of transmission or storage is completely secure.
      </p>

      <h2>Children's privacy</h2>
      <p>
        This site is intended for adults arranging internet service and is not directed
        to children under 13. We do not knowingly collect personal information from
        children under 13.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The "Last updated" date above
        reflects the most recent revision. Material changes will be reflected on this
        page.
      </p>

      <h2>Contact us</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.line1}, {site.address.city}, {site.address.state} {site.address.zip}
        <br />
        {site.email} · {site.phoneDisplay}
      </p>
    </PolicyLayout>
  );
}
