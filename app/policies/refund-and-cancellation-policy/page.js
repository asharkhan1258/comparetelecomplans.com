import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Refund & Cancellation Policy" };

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund & Cancellation Policy" updated="September 1, 2026">
      <p>
        This policy covers services billed directly by {site.legalName}, and separately
        explains how billing works for the internet service itself, since the two are
        provided by different companies.
      </p>

      <h2>Comparing plans and getting connected to a provider</h2>
      <p>
        Using this site to compare plans, submit your address, or get connected with a
        provider's ordering team is free. {site.legalName} does not charge you to make
        this connection, and there is nothing to refund for this part of our service.
      </p>

      <h2>Paid services, if any</h2>
      <p>
        If {site.legalName} ever offers a paid service (for example, a guided setup or
        consultation service), its price and refund terms will be disclosed clearly
        before you agree to pay, and a copy of those specific terms will be provided to
        you at that time. Nothing on this site enrolls you in a paid service
        automatically.
      </p>

      <h2>Your internet service bill</h2>
      <p>
        Once you order service, your contract, monthly bill, and any early
        termination or equipment fees are with the provider you ordered from — not
        with {site.legalName}. Refunds, billing disputes, installation issues, and
        cancellations for your internet service must be handled directly with that
        provider, using the contact information they give you at sign-up.
      </p>

      <h2>Canceling a request with us</h2>
      <p>
        If you'd like us to stop working on a request you submitted, or want us to
        delete the information you provided, contact {site.email} or{" "}
        {site.phoneDisplay} and we'll confirm once it's done.
      </p>

      <h2>Contact us</h2>
      <p>
        {site.legalName} · {site.address.line1}, {site.address.city}, {site.address.state}{" "}
        {site.address.zip} · {site.email} · {site.phoneDisplay}
      </p>
    </PolicyLayout>
  );
}
