import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <PolicyLayout title="Disclaimer" updated="September 1, 2026">
      <p>
        Please read this Disclaimer carefully before using this website or acting on
        anything shown on it. By using this site, you accept the terms described here,
        alongside our{" "}
        <a href="/policies/terms-of-service">Terms of Service</a>,{" "}
        <a href="/policies/privacy-policy">Privacy Policy</a>, and{" "}
        <a href="/policies/advertising-disclosure">Advertising Disclosure</a>.
      </p>

      <h2>We are not an internet service provider</h2>
      <p>
        {site.legalName}, doing business as {site.brandName}, is an independent
        marketing, advisory, and referral company. We do not build, own, operate,
        install, or bill for internet, TV, phone, or any other telecommunications
        service. We are not a subsidiary, agent by default, or exclusive
        representative of any specific carrier unless explicitly stated elsewhere on
        this site. When you place an order, your service agreement, installation, and
        monthly bill are with the provider you order from — not with {site.legalName}.
      </p>

      <h2>Trademarks and provider names</h2>
      <p>
        Any provider names, plan names, or logos referenced or discussed on this site
        are the trademarks or registered trademarks of their respective owners.
        They're used strictly to identify and compare publicly available offerings.
        Mentioning a provider does not mean that provider endorses, sponsors, or is
        affiliated with {site.legalName} beyond any dealer relationship expressly
        disclosed elsewhere on this site.
      </p>

      <h2>No guarantee of accuracy, pricing, or availability</h2>
      <p>
        Speeds, prices, promotional terms, contract lengths, equipment fees, and
        serviceability shown or discussed on this site are general information and
        good-faith estimates based on publicly available data at the time of
        publication. They are:
      </p>
      <ul>
        <li>Not a guaranteed quote, offer, or contract of any kind;</li>
        <li>Subject to change by the provider at any time, without notice to us;</li>
        <li>Dependent on the specific address, equipment, and account history of each customer;</li>
        <li>Always subject to final confirmation directly with the provider before you order.</li>
      </ul>
      <p>
        We make reasonable efforts to keep information current and accurate but do not
        warrant that any plan, price, or availability shown here is complete, current,
        or error-free. If something you were told differs from what the provider
        confirms at the time of order, the provider's confirmation controls.
      </p>

      <h2>Referral compensation</h2>
      <p>
        If you choose to order service through a provider we connect you with, that
        provider may pay {site.legalName} a referral or marketing fee for the
        introduction. This arrangement does not change the price you are quoted or
        billed, and it is not disclosed to you as a line item because it is not added
        to your bill. See our{" "}
        <a href="/policies/advertising-disclosure">Advertising Disclosure</a> for more
        detail on how this works and how it could be perceived to influence what we
        display.
      </p>

      <h2>Not professional, legal, or financial advice</h2>
      <p>
        Nothing on this site — including plan comparisons, FAQ content, or anything
        said to you by phone or email — is legal, financial, or professional advice.
        You are responsible for reviewing the actual terms and conditions provided by
        a provider before agreeing to any service.
      </p>

      <h2>Third-party links</h2>
      <p>
        This site may link to third-party websites, including provider ordering pages,
        that we do not control. We are not responsible for the content, accuracy, or
        privacy practices of those external sites. Visiting them is at your own
        discretion and subject to their own terms.
      </p>

      <h2>No liability for decisions made using this site</h2>
      <p>
        To the fullest extent permitted by law, {site.legalName}, its owners,
        employees, and representatives are not liable for any loss or damage —
        direct, indirect, incidental, or consequential — arising from your reliance on
        information provided on this site, your interactions with a third-party
        provider, or any service you ultimately order.
      </p>

      <h2>Changes to this Disclaimer</h2>
      <p>
        We may update this Disclaimer from time to time to reflect changes in how we
        operate or to comply with legal requirements. The "Last updated" date at the
        top of this page reflects the most recent version.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this Disclaimer can be directed to:
        <br />
        {site.legalName}
        <br />
        {site.address.line1}, {site.address.city}, {site.address.state} {site.address.zip}
        <br />
        {site.email} · {site.phoneDisplay}
      </p>
    </PolicyLayout>
  );
}
