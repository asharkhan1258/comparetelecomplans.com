import { SectionHeading, PhoneCTA } from "@/components/ui";
import AddressChecker from "@/components/AddressChecker";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "Internet Plans & Technology Breakdown",
  description: "Compare broadband fiber, cable, 5G home wireless, and satellite internet tiers, speed ranges, and pricing factors.",
};

const tiers = [
  {
    name: "Basic Broadband",
    speed: "50–100 Mbps",
    from: "$40/mo*",
    tech: "Cable / 5G / DSL",
    good: "1–2 users, web browsing, email, streaming HD video on one device.",
    latency: "Standard (~20-40ms)",
  },
  {
    name: "Standard Family",
    speed: "200–400 Mbps",
    from: "$55/mo*",
    tech: "Fiber / High-Speed Cable",
    good: "3–4 users, simultaneous 4K video streams, Zoom calls, online gaming.",
    latency: "Low (~10-20ms)",
  },
  {
    name: "Gigabit Speed",
    speed: "800 Mbps–1,000 Mbps+",
    from: "$75/mo*",
    tech: "Pure Fiber Optic",
    good: "Heavy multi-device homes, 4K/8K streaming, large file uploads & smart home devices.",
    latency: "Ultra-low (~3-8ms)",
  },
  {
    name: "Rural Satellite",
    speed: "25–100 Mbps",
    from: "$70/mo*",
    tech: "Satellite Broadband",
    good: "Remote locations where terrestrial cable or fiber lines do not reach.",
    latency: "High Satellite Latency",
  },
];

const technologies = [
  {
    type: "Fiber Optic",
    description: "Delivers symmetrical download and upload speeds over light signals. The most reliable technology with near-zero latency.",
    pros: "Symmetrical speeds, ultra-reliable, ideal for gaming & work",
    cons: "Requires physical fiber infrastructure built to your street",
  },
  {
    type: "Coaxial Cable",
    description: "Uses existing cable TV infrastructure to deliver fast download speeds across widespread residential neighborhoods.",
    pros: "Very widely available, fast download speeds up to 1 Gbps",
    cons: "Upload speeds are typically slower than download speeds",
  },
  {
    type: "5G Home Wireless",
    description: "Uses cellular 5G networks to stream broadband internet to an indoor Wi-Fi receiver without outside cable wiring.",
    pros: "Quick self-installation, flexible contracts, competitive pricing",
    cons: "Speeds depend on proximity to local cell towers",
  },
  {
    type: "Satellite Internet",
    description: "Beam internet signals directly from orbiting satellites to a satellite dish installed at your property.",
    pros: "Available 100% nationwide regardless of ground line availability",
    cons: "Higher latency and sensitive to heavy storm weather",
  },
];

const factors = [
  { title: "Physical Address Infrastructure", body: "Whether your street has fiber optic lines, coaxial cable, or wireless coverage dictates which providers and speed tiers you can sign up for." },
  { title: "Promotional vs. Standard Rates", body: "Many plan quotes feature introductory pricing for 12–24 months. Standard rates apply after the promo window expires." },
  { title: "Equipment Rental & Router Fees", body: "Modem/Wi-Fi router rental fees (typically $10–$15/mo) may apply unless you use your own compatible equipment." },
  { title: "Contract Obligations", body: "Some plans are month-to-month with no commitment; others offer lower rates in exchange for a 1-year or 2-year agreement." },
  { title: "Data Allowances", body: "While fiber and cable plans are predominantly unlimited, satellite and select wireless plans enforce data caps or speed throttling thresholds." },
  { title: "Local Taxes & Surcharges", body: "Advertised prices exclude state/local taxes, government regulatory fees, and provider surcharges." },
];

export default function InternetPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="container-px max-w-content mx-auto py-12 md:py-16 border-b rule">
        <div className="max-w-3xl">
          <span className="bg-blue/10 text-blue font-semibold text-xs px-3 py-1 border border-blue/20">
            Broadband Comparison Guide
          </span>
          <h1 className="mt-3 font-semibold text-[2rem] md:text-[2.6rem] leading-[1.15] text-ink">
            Home Internet Tiers &amp; Pricing Breakdown
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed text-base">
            Because exact broadband availability and pricing are set neighborhood by neighborhood, the overview below outlines representative plan ranges across fiber, cable, 5G wireless, and satellite networks.
          </p>
        </div>
      </section>

      {/* Address Checker Tool */}
      <section className="container-px max-w-content mx-auto py-12 border-b rule bg-offwhite/50">
        <AddressChecker />
      </section>

      {/* Plan Tiers Grid */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule">
        <SectionHeading
          title="Representative Broadband Speed Tiers"
          lede="Compare typical speed ranges, technologies, and estimated starting prices."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="border rule bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 border-b rule pb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-ink">{t.name}</h3>
                    <span className="text-xs text-ink/50 font-medium">{t.tech}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-blue">{t.speed}</span>
                    <p className="text-xs text-ink/60">From {t.from}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-ink/70 leading-relaxed">{t.good}</p>
              </div>
              <div className="mt-6 pt-3 border-t rule flex items-center justify-between text-xs text-ink/50">
                <span>Latency: {t.latency}</span>
                <a href={`tel:${site.phoneHref}`} className="font-medium text-blue hover:underline">
                  Verify at your address →
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink/50 max-w-2xl">
          *"From" pricing estimates reflect introductory promotional figures. Final pricing, equipment fees, taxes, and contract terms are set by the provider and confirmed with you directly before placing any order. {site.legalName} does not bill customers.
        </p>
      </section>

      {/* Technology Breakdown */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule bg-offwhite">
        <SectionHeading
          title="Understanding Broadband Technologies"
          lede="Learn how connection types affect speed, latency, and reliability at your location."
        />
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {technologies.map((tech) => (
            <div key={tech.type} className="bg-white border rule p-6 space-y-3">
              <h3 className="font-semibold text-ink text-lg">{tech.type}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{tech.description}</p>
              <div className="pt-2 text-xs space-y-1">
                <p><strong className="text-blue">Pros:</strong> {tech.pros}</p>
                <p><strong className="text-ink/60">Cons:</strong> {tech.cons}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Factors Affecting Quote */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule">
        <SectionHeading title="Factors That Impact Your Final Quote" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {factors.map((f) => (
            <div key={f.title} className="border rule p-5 bg-white">
              <h3 className="font-semibold text-ink text-base">{f.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Phone CTA */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 bg-offwhite/50 border-b rule">
        <div>
          <h2 className="font-semibold text-xl text-ink">
            Ready to verify exact plan pricing for your address?
          </h2>
          <p className="mt-2 text-sm text-ink/65 max-w-md">
            Call our advisory team. We perform a live coverage lookup and connect you directly with provider ordering.
          </p>
        </div>
        <PhoneCTA />
      </section>
    </>
  );
}
