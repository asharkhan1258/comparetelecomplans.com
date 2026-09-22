import { SectionHeading } from "@/components/ui";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "About",
  description: `Who ${site.brandName} is, how we're paid, and how we handle your information.`,
};

const values = [
  { title: "The price, stated plainly", body: "If a number has conditions attached — a promo window, a fee, a contract — we say so next to it." },
  { title: "No obligation, ever", body: "Comparing plans with us doesn't enroll you in anything. Ordering happens directly with the provider you choose." },
  { title: "Fewer, better calls", body: "One clear conversation about what fits your address beats five follow-ups you didn't ask for." },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule">
        <h1 className="font-semibold text-[2rem] md:text-[2.4rem] leading-[1.15] text-ink max-w-2xl">
          We compare internet providers so you don't have to call five of them yourself
        </h1>
        <p className="mt-5 text-ink/70 leading-relaxed max-w-2xl">
          {site.legalName}, operating as {site.brandName}, exists to fix a simple,
          annoying problem: figuring out which internet provider actually serves your
          address, and what their plans really cost, usually takes calling around and
          getting different answers each time.
        </p>
      </section>

      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-semibold text-xl text-ink">What we are</h2>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed">
            We're an independent advisory and referral service. We're not owned by,
            and don't exclusively represent, any single internet provider. When you
            tell us your address, we check which providers actually serve it and lay
            out their plans clearly.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl text-ink">How we're paid</h2>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed">
            When you choose to order service through a provider we connect you with,
            that provider may pay us a referral fee. This doesn't change your price —
            you pay the provider directly, at the price they quote you.
          </p>
        </div>
      </section>

      <section className="container-px max-w-content mx-auto py-16 md:py-20 border-b rule bg-offwhite">
        <SectionHeading title="Three things we hold ourselves to" />
        <div className="mt-10 grid sm:grid-cols-3 gap-x-10 gap-y-8">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="font-semibold text-ink">{v.title}</h3>
              <p className="mt-1 text-sm text-ink/65 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px max-w-content mx-auto py-16 md:py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-semibold text-xl text-ink">Where we are</h2>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed">
            {site.legalName}
            <br />
            {site.address.line1}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
            <br />
            {site.address.country}
          </p>
          <p className="mt-4 text-sm text-ink/65">{site.hours}</p>
        </div>
        <div>
          <h2 className="font-semibold text-xl text-ink">Questions about a plan?</h2>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed">
            Call <a href={`tel:${site.phoneHref}`} className="text-blue underline underline-offset-2">{site.phoneDisplay}</a> or
            email <a href={`mailto:${site.email}`} className="text-blue underline underline-offset-2">{site.email}</a>, and
            we'll walk through what's available at your address.
          </p>
        </div>
      </section>
    </>
  );
}
