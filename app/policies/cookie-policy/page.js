import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <PolicyLayout title="Cookie Policy" updated="September 1, 2026">
      <p>
        This site uses cookies and similar technologies to make the site work, measure
        traffic, and — where you've consented — measure advertising performance.
      </p>

      <h2>Types of cookies we use</h2>
      <ul>
        <li>
          <strong>Necessary cookies.</strong> Required for basic site functions, like
          remembering choices you make while filling out a form. These can't be turned
          off without affecting how the site works.
        </li>
        <li>
          <strong>Analytics cookies.</strong> Help us understand which pages are useful
          and where visitors run into trouble, using aggregated, non-identifying data.
        </li>
        <li>
          <strong>Advertising cookies.</strong> Used to measure the performance of ads
          that led to this site (for example, Google Ads conversion tracking) and to
          avoid showing you repetitive ads. These are only set with your consent where
          required by law.
        </li>
      </ul>

      <h2>Your choices</h2>
      <p>
        Most browsers let you block or delete cookies in their settings. Where legally
        required, we'll ask for your consent before setting non-essential cookies and
        let you withdraw it at any time through the same control. Blocking cookies may
        affect how parts of this site work.
      </p>

      <h2>Third parties</h2>
      <p>
        Some cookies are set by third-party services we use, such as analytics or
        advertising platforms. Their use of information they collect is governed by
        their own privacy policies, not this one.
      </p>

      <h2>Contact us</h2>
      <p>Questions about this Cookie Policy can be sent to {site.email}.</p>
    </PolicyLayout>
  );
}
