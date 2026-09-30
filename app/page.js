import Link from "next/link";
import { SectionHeading, ButtonLink } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import AddressChecker from "@/components/AddressChecker";
import FaqAccordion from "@/components/FaqAccordion";
import { site } from "@/lib/site-config";

const steps = [
  {
    title: "1. Enter your address or ZIP",
    body: "Use our consulting tool to evaluate which broadband technology types (Fiber, Cable, 5G, Satellite) typically reach your area.",
    icon: (
      <svg className="w-5 h-5 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "2. Get neutral advice",
    body: "Review speed requirements, typical price ranges, and contract terms with an independent telecom consultant.",
    icon: (
      <svg className="w-5 h-5 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "3. Order directly with ISP",
    body: "Armed with clarity, you contact your chosen internet service provider directly to complete your sign-up.",
    icon: (
      <svg className="w-5 h-5 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
];

const plans = [
  { tier: "Basic Broadband", speed: "Up to 100 Mbps", from: "$40/mo*", fit: "Suitable for 1–2 users, casual web browsing & email" },
  { tier: "Standard Family", speed: "Up to 300 Mbps", from: "$55/mo*", fit: "Best for households streaming HD/4K content & working from home" },
  { tier: "Gigabit Speed", speed: "Up to 1,000 Mbps", from: "$75/mo*", fit: "Ideal for heavy multi-device households & low-latency gaming" },
];

const reasons = [
  { title: "Pure Consulting & Advice", body: "We do not sell internet plans, process sign-ups, or offer custom deals. Our sole purpose is providing clear, independent guidance." },
  { title: "Not an Affiliate or Dealer", body: "We hold no carrier certificates and receive no affiliate commissions. You receive unbiased educational info." },
  { title: "No Deceptive Claims", body: "We do not use high-pressure tactics or fake low-stock warnings. Evaluate your address needs comfortably." },
  { title: "Free Educational Resource", body: "Our consulting information and hotline guidance are provided 100% free of charge to consumers." },
];

const faqs = [
  { q: "Do you sell internet plans or offer special deals?", a: `No. ${site.legalName} (dba ${site.brandName}) is strictly an independent consulting and advisory service. We do NOT sell internet plans, process orders, or offer custom provider deals. We provide general information to help you understand your options.` },
  { q: "Are you an authorized dealer or affiliate of any provider?", a: "No. We hold no carrier certificates, dealer licenses, or affiliate agreements. We maintain 100% independence from telecommunications companies." },
  { q: "How do I actually order internet service?", a: "After reviewing your address options and speed requirements with our consulting guide or hotline, you contact the internet service provider of your choice directly to confirm pricing and place your order." },
  { q: "Is there any charge for your consulting service?", a: "No. Our website guides, address evaluation tools, and phone consulting are completely free for consumers." },
  { q: "Why do prices and speeds vary by address?", a: "Internet service providers build networks street by street. The specific technology (Fiber, Cable, 5G Wireless, or Satellite) reaching your street dictates available speeds and pricing." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b rule bg-white">
        <div className="container-px max-w-content mx-auto py-12 md:py-16">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-blue/10 text-blue font-semibold text-xs px-3 py-1 border border-blue/20">
                  Independent Telecom Consulting
                </span>
                <span className="text-xs text-ink/60">
                  Not a dealer or affiliate · Free guidance
                </span>
              </div>
              <h1 className="font-semibold text-[2.2rem] md:text-[2.85rem] leading-[1.15] text-ink">
                {site.tagline}
              </h1>
              <p className="mt-5 text-ink/70 text-lg leading-relaxed max-w-xl">
                Need help picking the right home internet technology for your address? We provide independent advice on broadband speeds, technology types, and provider options.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href="/internet" variant="primary">
                  Read Internet Guide
                </ButtonLink>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center justify-center gap-2 border border-ink/25 px-6 py-3 text-sm font-semibold text-ink hover:border-blue hover:text-blue transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-blue" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Consulting Line {site.phoneDisplay}
                </a>
              </div>

              <div className="mt-6 p-3 bg-offwhite border rule text-xs text-ink/60 max-w-lg leading-relaxed">
                <strong>Google Ads Business Policy Disclosure:</strong> {site.legalName} is an independent consulting service. We do not sell internet plans, hold carrier certificates, or act as an affiliate. All trademarks belong to their respective owners.
              </div>
            </div>

            {/* Address Checker Widget */}
            <div>
              <AddressChecker />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule bg-offwhite/50">
        <SectionHeading
          title="How our consulting process works"
          lede="Simple, educational guidance to help you navigate broadband options."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.title} className="bg-white border rule p-6 space-y-3">
              <div className="w-10 h-10 bg-blue/10 flex items-center justify-center rounded-none">
                {s.icon}
              </div>
              <h3 className="font-semibold text-lg text-ink">{s.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typical Plan Tiers */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            title="Typical Broadband Speed Ranges & Tiers"
            lede="Representative industry ranges for educational comparison. Actual quotes are obtained directly from providers."
          />
          <ButtonLink href="/internet" variant="outline">View Full Technology Guide</ButtonLink>
        </div>

        <div className="mt-10 divide-y rule border-t border-b rule max-w-3xl">
          {plans.map((p) => (
            <div key={p.tier} className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="font-semibold text-ink text-base">{p.tier}</p>
                <p className="text-sm text-ink/65">{p.fit}</p>
              </div>
              <div className="sm:text-right shrink-0">
                <p className="text-sm font-semibold text-blue">{p.speed}</p>
                <p className="text-sm text-ink/75">From {p.from}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink/50 max-w-2xl">
          *Figures shown represent general industry promotional rates for illustration. We do not sell or contract internet plans. Consumers order directly with providers.
        </p>
      </section>

      {/* Why consulting */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule bg-offwhite">
        <SectionHeading title="Why Consult With Compare Telecom Plans" />
        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white border rule p-6">
              <h3 className="font-semibold text-ink text-base">{r.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule">
        <SectionHeading
          title="Frequently Asked Questions"
          lede="Clear answers regarding our independent telecom consulting service."
        />
        <div className="mt-8 max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Contact / Consultation Form */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <div>
          <SectionHeading
            title="Request a Free Address Telecom Consultation"
            lede="Provide your address details below. A consultant will review local technology availability in your area and share neutral guidance."
          />
          <div className="mt-6 space-y-3 text-xs text-ink/60 max-w-md">
            <p>
              By submitting this form, you request a free consultation from {site.legalName} regarding broadband options at your address. See our{" "}
              <Link href="/policies/privacy-policy" className="underline font-medium text-ink">
                Privacy Policy
              </Link>.
            </p>
            <p className="p-3 bg-offwhite border rule text-ink/70">
              ✓ 100% Free Consultation · No Sales Pitch · We do not sell internet plans or deals.
            </p>
          </div>
        </div>
        <ContactForm compact />
      </section>
    </>
  );
}
