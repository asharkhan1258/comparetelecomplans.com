import Link from "next/link";
import { site } from "@/lib/site-config";

export default function Disclaimer({ detailed = false }) {
  return (
    <section className="border-t rule bg-offwhite">
      <div className="container-px max-w-content mx-auto py-8 md:py-10">
        <p className="text-sm font-semibold text-ink/50 mb-2">Legal Disclaimer &amp; Consulting Disclosure</p>

        {detailed ? (
          <div className="max-w-3xl text-sm text-ink/70 leading-relaxed space-y-3">
            <p>
              {site.legalName}, doing business as {site.brandName}, operates strictly as an <strong>independent telecom advisory and consulting service</strong>. We do <strong>not</strong> sell internet plans, process service sign-ups, issue deals, or act as an authorized dealer, partner, or affiliate of any telecommunications carrier. We hold no carrier certifications or affiliate contracts.
            </p>
            <p>
              Broadband technologies, speed ranges, and pricing tiers displayed on this site are general educational information derived from public sources. They do not constitute a quote, contract, or binding deal. Users must contact their chosen internet service provider directly to check live address availability and place service orders.
            </p>
            <p>
              For complete details, please view our full{" "}
              <Link href="/policies/disclaimer" className="underline underline-offset-2 text-ink">Disclaimer</Link>,{" "}
              <Link href="/policies/advertising-disclosure" className="underline underline-offset-2 text-ink">Business Disclosure</Link>, and{" "}
              <Link href="/policies/privacy-policy" className="underline underline-offset-2 text-ink">Privacy Policy</Link>.
            </p>
          </div>
        ) : (
          <p className="max-w-3xl text-sm text-ink/70 leading-relaxed">
            {site.legalName} (dba {site.brandName}) is an independent consulting service, not an internet service provider, dealer, or affiliate. We do not sell internet plans or deals. Plan details shown are general estimates — actual orders are placed directly with the provider by the consumer. See our full{" "}
            <Link href="/policies/disclaimer" className="underline underline-offset-2 text-ink font-medium">Disclaimer</Link> for details.
          </p>
        )}
      </div>
    </section>
  );
}
