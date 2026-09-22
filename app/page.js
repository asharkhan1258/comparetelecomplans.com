import Link from "next/link";
import { SectionHeading, ButtonLink } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site-config";

const steps = [
  { title: "Tell us your address", body: "We look up which internet providers actually serve your building." },
  { title: "Compare the options", body: "Speed, price, and contract length, laid out clearly, side by side." },
  { title: "Pick one and call", body: "We connect you with that provider's ordering team. You order directly with them." },
];

const plans = [
  { tier: "Basic", speed: "Up to 100 Mbps", from: "$40/mo", fit: "Browsing, email, streaming on one device" },
  { tier: "Standard", speed: "Up to 300 Mbps", from: "$55/mo", fit: "A few people streaming and working at once" },
  { tier: "Fast", speed: "Up to 1 Gbps", from: "$75/mo", fit: "A busy household with several connected devices" },
];

const reasons = [
  { title: "Clear pricing", body: "We show the promotional price and what it becomes afterward, in the same sentence." },
  { title: "No pressure", body: "No countdown timers, no fake low-stock warnings. Compare at your own pace." },
  { title: "Limited use of your information", body: "We only share it with the provider you ask us to connect you with." },
  { title: "A real person on the phone", body: "Call during business hours and talk to someone, not a menu." },
];

const faqs = [
  { q: "Are you the internet provider?", a: `No. ${site.legalName} is an independent advisory service. We compare providers available at your address and, if you'd like, connect you with that provider's ordering team. Your account and bill are with the provider, not with us.` },
  { q: "Is there a fee to use this?", a: "No. Comparing plans and getting connected to a provider is free." },
  { q: "Will you share my information?", a: "Only with the specific provider you ask us to connect you with, so they can complete your order. See our Privacy Policy for details." },
  { q: "Why do plans differ by address?", a: "Providers build their networks street by street. The same plan can have different pricing or speed just a few blocks away." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b rule">
        <div className="container-px max-w-content mx-auto py-16 md:py-20">
          <div className="max-w-2xl">
            <h1 className="font-semibold text-[2.1rem] md:text-[2.75rem] leading-[1.15] text-ink">
              {site.tagline}
            </h1>
            <p className="mt-5 text-ink/70 text-lg leading-relaxed">
              Tell us where you live and we'll show you which providers actually serve
              it, what their plans cost, and connect you to the one you choose.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/internet" variant="primary">See internet plans</ButtonLink>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 border border-ink/25 px-6 py-3 text-sm font-medium text-ink hover:border-blue hover:text-blue transition-colors"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
            <p className="mt-5 text-xs text-ink/45">
              {site.legalName} is not an internet service provider. We're an
              independent service that compares plans and connects you with the
              provider you choose.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule">
        <SectionHeading title="Three steps, no pressure to decide today" />
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="border-t-2 border-blue pt-4">
              <span className="text-sm text-ink/45">Step {i + 1}</span>
              <h3 className="mt-1 font-semibold text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plan snapshot — simple rows, no cards or tables */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            title="A typical range of plans"
            lede="Exact speeds and prices vary by provider and address — this is a general guide."
          />
          <ButtonLink href="/internet" variant="outline">Full plan details</ButtonLink>
        </div>

        <div className="mt-10 divide-y rule border-t border-b rule max-w-3xl">
          {plans.map((p) => (
            <div key={p.tier} className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="font-semibold text-ink">{p.tier}</p>
                <p className="text-sm text-ink/60">{p.fit}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-sm text-ink/70">{p.speed}</p>
                <p className="text-sm text-ink/70">From {p.from}*</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink/45 max-w-2xl">
          *Promotional pricing shown for illustration only. Final pricing, taxes,
          equipment fees, and contract terms depend on the provider and are confirmed
          before you order.
        </p>
      </section>

      {/* Why compare with us */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule bg-offwhite">
        <SectionHeading title="Why compare here instead of calling around" />
        <div className="mt-10 grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {reasons.map((r) => (
            <div key={r.title}>
              <h3 className="font-semibold text-ink">{r.title}</h3>
              <p className="mt-1 text-sm text-ink/65 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule">
        <SectionHeading title="Common questions" />
        <div className="mt-8 max-w-2xl divide-y rule border-t border-b rule">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-ink">
                {f.q}
                <span className="text-blue text-xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact / lead form */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <div>
          <SectionHeading
            title="Check what's available at your address"
            lede="Share a few details and we'll follow up with real options — no automatic sign-up, no obligation."
          />
          <p className="mt-6 text-xs text-ink/45 max-w-sm">
            By submitting, you agree to be contacted by {site.legalName} about internet
            options at the address provided. See our{" "}
            <Link href="/policies/privacy-policy" className="underline">Privacy Policy</Link>.
            No purchase is required and you will not be automatically enrolled in any plan.
          </p>
        </div>
        <ContactForm compact />
      </section>
    </>
  );
}
