import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms of Service" updated="September 1, 2026">
      <p>
        These Terms of Service ("Terms") govern your use of this website, operated by{" "}
        {site.legalName}. By using this site, you agree to these Terms. This is a
        general-purpose template — have it reviewed by a qualified attorney before
        publishing.
      </p>

      <h2>What this site is</h2>
      <p>
        {site.brandName} is an independent advisory and referral service for home
        internet plans. We are not an internet service provider, and we do not build,
        own, or operate any internet network. Comparisons, plan tiers, and pricing
        ranges shown on this site are informational and illustrative; actual
        availability, pricing, speeds, and terms are set solely by the relevant
        provider and confirmed directly with you before you order.
      </p>

      <h2>Using this site</h2>
      <ul>
        <li>You must be at least 18 years old to submit a request through this site.</li>
        <li>You agree to provide accurate information when submitting a form or calling.</li>
        <li>
          You won't use this site to submit false requests, scrape or resell our
          content, or attempt to interfere with its normal operation.
        </li>
      </ul>

      <h2>No guarantee of availability or pricing</h2>
      <p>
        Serviceability, speeds, and pricing shown or discussed are estimates based on
        information available to us and can change without notice. Final terms are
        determined by the provider at the time you order, and may differ from anything
        shown on this site.
      </p>

      <h2>Referral relationship</h2>
      <p>
        If you choose to order service through a provider we connect you with, that
        provider may pay {site.legalName} a referral or marketing fee. This does not
        change the price you pay the provider. Your service agreement, billing
        relationship, and any disputes about your internet service are with the
        provider, not with {site.legalName}. See our{" "}
        <a href="/policies/advertising-disclosure">Advertising Disclosure</a> for more.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The text, graphics, and design of this site belong to {site.legalName} or its
        licensors and may not be copied or reused without permission, except as needed
        to browse the site normally.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        This site and the information on it are provided "as is," without warranties
        of any kind, express or implied, including accuracy, completeness, or fitness
        for a particular purpose.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.legalName} is not liable for any
        indirect, incidental, or consequential damages arising from your use of this
        site or reliance on information shown here, including differences between
        pricing shown here and the price ultimately offered by a provider.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the state in which {site.legalName} is
        incorporated or headquartered, without regard to conflict-of-law principles.
        Replace this with the specific governing-law clause your counsel recommends.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may revise these Terms from time to time. Continued use of the site after a
        change means you accept the revised Terms.
      </p>

      <h2>Contact us</h2>
      <p>
        {site.legalName} · {site.address.line1}, {site.address.city}, {site.address.state}{" "}
        {site.address.zip} · {site.email}
      </p>
    </PolicyLayout>
  );
}
