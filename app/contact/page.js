import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "Contact",
  description: `Reach ${site.brandName} by phone, email, or the contact form.`,
};

export default function ContactPage() {
  return (
    <section className="container-px max-w-content mx-auto py-16 md:py-20">
      <h1 className="font-semibold text-[2rem] md:text-[2.4rem] leading-[1.15] text-ink max-w-2xl">
        Talk to a person about internet at your address
      </h1>
      <p className="mt-5 text-ink/70 leading-relaxed max-w-xl">
        Call during the hours below for the fastest answer, or send details through the
        form and we'll follow up.
      </p>

      <div className="mt-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <div className="divide-y rule border-t rule">
          <InfoBlock label="Phone">
            <a href={`tel:${site.phoneHref}`} className="text-blue underline underline-offset-2">
              {site.phoneDisplay}
            </a>
            <p className="mt-1 text-xs text-ink/50">{site.hours}</p>
          </InfoBlock>

          <InfoBlock label="Email">
            <a href={`mailto:${site.email}`} className="text-blue underline underline-offset-2">
              {site.email}
            </a>
            <p className="mt-1 text-xs text-ink/50">Replies within one business day</p>
          </InfoBlock>

          <InfoBlock label="Mailing address">
            <p>{site.legalName}</p>
            <p>{site.address.line1}</p>
            <p>{site.address.city}, {site.address.state} {site.address.zip}</p>
            <p>{site.address.country}</p>
          </InfoBlock>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function InfoBlock({ label, children }) {
  return (
    <div className="py-5">
      <p className="text-sm text-ink/50 mb-2">{label}</p>
      <div className="text-sm text-ink/75 leading-relaxed">{children}</div>
    </div>
  );
}
