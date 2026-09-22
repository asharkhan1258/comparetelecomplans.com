import { SectionHeading, PhoneCTA } from "@/components/ui";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "Internet Plans",
  description: "Compare home internet tiers, typical pricing, and what affects your final quote.",
};

const tiers = [
  { name: "Basic", speed: "50–100 Mbps", from: "$40/mo", good: "1–2 people, browsing, streaming one show at a time, remote email" },
  { name: "Standard", speed: "200–400 Mbps", from: "$55/mo", good: "A household of 3–4, multiple streams, video calls, some gaming" },
  { name: "Fast", speed: "800 Mbps–1 Gbps+", from: "$75/mo", good: "Heavy multi-device homes, 4K streaming on several screens, large uploads" },
];

const factors = [
  { title: "Technology at your address", body: "Fiber, cable, fixed wireless, and satellite carry different realistic speeds — and not every technology reaches every address." },
  { title: "Promotional vs. standard rate", body: "Many plans start at a discounted rate for 12–24 months, then move to a higher standard rate." },
  { title: "Equipment and installation", body: "Modem/router rental, professional installation, and activation fees are sometimes separate from the plan price." },
  { title: "Contract length", body: "Some plans are month-to-month; others require a term commitment with an early termination fee." },
  { title: "Data allowances", body: "A small number of plans — mainly satellite and fixed wireless — cap monthly data or slow speeds after a threshold." },
  { title: "Taxes and regulatory fees", body: "Advertised prices typically exclude taxes and provider surcharges, which appear on your actual bill." },
];

export default function InternetPage() {
  return (
    <>
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule">
        <h1 className="font-semibold text-[2rem] md:text-[2.4rem] leading-[1.15] text-ink max-w-2xl">
          Plans are shown by tier, because exact pricing is set by address
        </h1>
        <p className="mt-5 text-ink/70 leading-relaxed max-w-2xl">
          The ranges below reflect what's typically available across the providers we
          work with. Your exact price, speed, and contract terms depend on which
          provider serves your specific address.
        </p>
      </section>

      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule">
        <div className="divide-y rule border-t border-b rule max-w-3xl">
          {tiers.map((t) => (
            <div key={t.name} className="py-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <span className="font-semibold text-xl text-ink">{t.name}</span>
                <span className="text-sm text-ink/60">{t.speed} · from {t.from}*</span>
              </div>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{t.good}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink/45 max-w-2xl">
          *"From" prices are illustrative promotional examples, not a quote. Actual
          pricing, the length of any promotional period, equipment costs, taxes, and
          contract terms are set by the provider and confirmed with you before you
          order — never charged to you by {site.legalName}.
        </p>
      </section>

      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule bg-offwhite">
        <SectionHeading title="What actually changes your final price" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {factors.map((f) => (
            <div key={f.title}>
              <h3 className="font-semibold text-ink">{f.title}</h3>
              <p className="mt-1 text-sm text-ink/65 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px max-w-content mx-auto py-16 md:py-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <h2 className="font-semibold text-xl text-ink">
            Ready to see exact pricing for your address?
          </h2>
          <p className="mt-2 text-sm text-ink/65 max-w-md">
            A quick call is the fastest way to get address-accurate speeds and pricing.
          </p>
        </div>
        <PhoneCTA />
      </section>
    </>
  );
}
