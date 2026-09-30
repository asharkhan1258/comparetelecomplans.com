import { SectionHeading } from "@/components/ui";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "About Our Independent Consulting Service",
  description: `Learn about ${site.brandName} (${site.legalName}). We are an independent telecom advisory and consulting service — not an internet seller, dealer, or affiliate.`,
};

const values = [
  {
    title: "Zero Sales Pitches or Deals",
    body: "We do not sell internet plans, issue custom promotional deals, or process sign-ups. We provide neutral consulting information."
  },
  {
    title: "Not an Affiliate or Dealer",
    body: "We hold no carrier certificates, dealer licenses, or affiliate agreements. We receive no affiliate commissions from telecom companies."
  },
  {
    title: "100% Free Consumer Guidance",
    body: "Our website guides, address lookup tools, and phone consulting are provided 100% free of charge to help consumers navigate broadband options."
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="container-px max-w-content mx-auto py-14 md:py-18 border-b rule">
        <div className="max-w-3xl">
          <span className="bg-blue/10 text-blue font-semibold text-xs px-3 py-1 border border-blue/20">
            About Our Company
          </span>
          <h1 className="mt-3 font-semibold text-[2rem] md:text-[2.6rem] leading-[1.15] text-ink">
            Independent Home Internet Advisory &amp; Consulting
          </h1>
          <p className="mt-5 text-ink/70 leading-relaxed text-base">
            {site.legalName} (doing business as {site.brandName}) exists to provide consumers with clear, objective, and independent advice on home internet options, technology differences, and speed planning.
          </p>
        </div>
      </section>

      {/* Business Details Grid */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule grid md:grid-cols-2 gap-10">
        <div className="border rule bg-white p-6 md:p-8 space-y-4">
          <h2 className="font-semibold text-xl text-ink">What We Are</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            We are a private, independent telecom advisory and educational consulting service. We do not construct, operate, or sell internet service. When you use our address lookup tool or call our hotline, we discuss which technology types (Fiber, Coaxial Cable, 5G Wireless, or Satellite Broadband) serve your street and help you determine what bandwidth fits your usage.
          </p>
          <div className="p-3 bg-offwhite border rule text-xs text-ink/65">
            <strong>Important Disclosure:</strong> We do not sell internet plans, place orders on behalf of consumers, or issue carrier deals. Users order directly from their chosen provider.
          </div>
        </div>

        <div className="border rule bg-white p-6 md:p-8 space-y-4">
          <h2 className="font-semibold text-xl text-ink">Zero Affiliate or Dealer Ties</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            {site.legalName} holds no carrier certificates, dealer licenses, or affiliate agreements with any telecommunications carrier. We do not receive referral fees or affiliate commissions for plan sales.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed">
            This independence guarantees that our guidance remains neutral, objective, and focused solely on consumer clarity.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule bg-offwhite">
        <SectionHeading title="Our Consulting Commitments" />
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white border rule p-6">
              <h3 className="font-semibold text-ink text-base">{v.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Entity Details */}
      <section className="container-px max-w-content mx-auto py-16 md:py-20 grid md:grid-cols-2 gap-10">
        <div className="border rule bg-white p-6 md:p-8 space-y-3">
          <h2 className="font-semibold text-xl text-ink">Legal Corporate Information</h2>
          <div className="text-sm text-ink/75 leading-relaxed space-y-1">
            <p className="font-semibold text-ink">{site.legalName}</p>
            <p>Doing Business As: {site.brandName}</p>
            <p>{site.address.line1}</p>
            <p>{site.address.city}, {site.address.state} {site.address.zip}</p>
            <p>{site.address.country}</p>
          </div>
          <p className="text-xs text-ink/50 pt-2 border-t rule">{site.hours}</p>
        </div>

        <div className="border rule bg-white p-6 md:p-8 space-y-4">
          <h2 className="font-semibold text-xl text-ink">Questions or Consultation Request</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            Need guidance on home internet speeds or technology types? Reach out to an advisor:
          </p>
          <div className="space-y-2 text-sm text-ink/80 font-medium">
            <p>
              Consulting Hotline:{" "}
              <a href={`tel:${site.phoneHref}`} className="text-blue underline">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${site.email}`} className="text-blue underline">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
