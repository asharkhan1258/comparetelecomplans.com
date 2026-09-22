import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Advertising Disclosure" };

export default function AdvertisingDisclosurePage() {
  return (
    <PolicyLayout title="Advertising Disclosure" updated="September 1, 2026">
      <p>
        We want it to be clear who we are and how this site makes money, especially if
        you found us through a search ad.
      </p>

      <h2>We are an independent advisory service</h2>
      <p>
        {site.legalName}, operating as {site.brandName}, is not an internet service
        provider, and is not owned by, or the exclusive agent of, any single provider.
        We compare publicly available plan information and, where you ask, connect you
        with a provider's own ordering team.
      </p>

      <h2>How we're compensated</h2>
      <p>
        We may receive a referral or marketing fee from a provider when you order
        service after being connected through this site. This is how the free
        comparison service is funded. It does not change the price you're quoted or
        billed by the provider, and it does not influence the factual plan details
        (speed, price, terms) we display — those come from the provider.
      </p>

      <h2>Plan and pricing accuracy</h2>
      <p>
        Plan tiers, speeds, and "from" prices shown on this site are general ranges
        meant to illustrate what's typically available, not a personalized quote.
        Because availability and pricing are set by the provider and vary by exact
        address, we confirm current terms with you by phone or form before you place an
        order — you will not be charged, and no order will be placed, without your
        separate confirmation directly with the provider.
      </p>

      <h2>Trademarks</h2>
      <p>
        Provider and plan names referenced on this site are trademarks of their
        respective owners and are used for identification and comparison purposes
        only. Reference to a provider does not imply their endorsement of{" "}
        {site.legalName}.
      </p>

      <h2>Questions</h2>
      <p>
        If anything about how we're paid or how a plan was represented to you is
        unclear, contact us at {site.email} or {site.phoneDisplay} and we'll clarify or
        correct it.
      </p>
    </PolicyLayout>
  );
}
