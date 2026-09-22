import Link from "next/link";
import { site } from "@/lib/site-config";

export default function Disclaimer({ detailed = false }) {
  return (
    <section className="border-t rule bg-offwhite">
      <div className="container-px max-w-content mx-auto py-8 md:py-10">
        <p className="text-sm text-ink/50 mb-2">Disclaimer</p>

        {detailed ? (
          <div className="max-w-2xl text-sm text-ink/70 leading-relaxed space-y-3">
            <p>
              {site.legalName}, doing business as {site.brandName}, is an independent
              marketing and advisory company. We are <strong>not</strong> an internet
              service provider, and we do not build, own, bill for, or guarantee any
              internet, phone, or TV service. Provider and plan names referenced on this
              site are trademarks of their respective owners, shown for comparison
              purposes only, and their use does not imply endorsement of{" "}
              {site.legalName}.
            </p>
            <p>
              Speeds, prices, promotions, and availability shown on this site are general
              estimates, not a personalized quote, and can change without notice. Actual
              serviceability, pricing, contract terms, taxes, and fees are set solely by
              the provider and must be confirmed directly with them before you order. If
              you order service through a provider we connect you with, that provider may
              pay us a referral fee — this does not change the price you pay them.
            </p>
            <p>
              Nothing on this site is legal, financial, or professional advice. Full terms
              are in our{" "}
              <Link href="/policies/disclaimer" className="underline underline-offset-2">Disclaimer</Link>{" "}
              and other{" "}
              <Link href="/policies/privacy-policy" className="underline underline-offset-2">policies</Link>.
            </p>
          </div>
        ) : (
          <p className="max-w-2xl text-sm text-ink/70 leading-relaxed">
            {site.legalName}, doing business as {site.brandName}, is an independent
            advisory service, not an internet service provider. Plans, speeds, and
            pricing shown here are general estimates, not a quote — actual terms are set
            by the provider and confirmed before you order. See our full{" "}
            <Link href="/policies/disclaimer" className="underline underline-offset-2">Disclaimer</Link> for details.
          </p>
        )}
      </div>
    </section>
  );
}
