import PolicyLayout from "@/components/PolicyLayout";
import { site } from "@/lib/site-config";

export const metadata = { title: "Acceptable Use Policy" };

export default function AcceptableUsePage() {
  return (
    <PolicyLayout title="Acceptable Use Policy" updated="September 1, 2026">
      <p>
        This Acceptable Use Policy describes how this website may and may not be used.
        It applies to everyone who visits or submits a request through this site.
      </p>

      <h2>You agree not to</h2>
      <ul>
        <li>Submit a request using someone else's name, phone number, or address without their permission.</li>
        <li>Submit repeated fake or test requests, or automate submissions with bots or scripts.</li>
        <li>Attempt to gain unauthorized access to any part of this site or its underlying systems.</li>
        <li>Interfere with the site's normal operation, including by overloading it with requests.</li>
        <li>Use this site to harass, impersonate, or collect information about a third party without their consent.</li>
        <li>Use content from this site to build a competing comparison service without permission.</li>
      </ul>

      <h2>Reporting misuse</h2>
      <p>
        If you believe someone has misused this site or submitted a request using your
        information without permission, contact us at {site.email} or{" "}
        {site.phoneDisplay} and we'll investigate.
      </p>

      <h2>Enforcement</h2>
      <p>
        We may suspend or block access to this site for anyone who violates this
        policy, and may decline to act on a submitted request we reasonably believe is
        fraudulent or abusive.
      </p>

      <h2>Contact us</h2>
      <p>
        {site.legalName} · {site.address.line1}, {site.address.city}, {site.address.state}{" "}
        {site.address.zip} · {site.email}
      </p>
    </PolicyLayout>
  );
}
