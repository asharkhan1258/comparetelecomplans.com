import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "Contact Us & Address Inquiry",
  description: `Reach ${site.brandName} (${site.legalName}) by phone, email, or our online address availability form.`,
};

export default function ContactPage() {
  return (
    <section className="container-px max-w-content mx-auto py-14 md:py-20">
      <div className="max-w-3xl mb-12">
        <span className="bg-blue/10 text-blue font-semibold text-xs px-3 py-1 border border-blue/20">
          Direct Customer Support
        </span>
        <h1 className="mt-3 font-semibold text-[2rem] md:text-[2.5rem] leading-[1.15] text-ink">
          Speak with an Internet Advisor
        </h1>
        <p className="mt-4 text-ink/70 leading-relaxed text-base">
          Call our phone advisors during operating hours for live address verification, or submit your street address details below and an advisor will follow up.
        </p>
      </div>

      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <div className="divide-y rule border-t border-b rule bg-offwhite/50 p-6">
          <InfoBlock label="Phone Advisory Line">
            <a href={`tel:${site.phoneHref}`} className="text-blue font-semibold text-base underline underline-offset-2">
              {site.phoneDisplay}
            </a>
            <p className="mt-1 text-xs text-ink/60">{site.hours}</p>
          </InfoBlock>

          <InfoBlock label="Email Address">
            <a href={`mailto:${site.email}`} className="text-blue font-medium underline underline-offset-2">
              {site.email}
            </a>
            <p className="mt-1 text-xs text-ink/60">Response within 1 business day</p>
          </InfoBlock>

          <InfoBlock label="Corporate Headquarters">
            <p className="font-semibold text-ink">{site.legalName}</p>
            <p className="text-ink/75">{site.address.line1}</p>
            <p className="text-ink/75">{site.address.city}, {site.address.state} {site.address.zip}</p>
            <p className="text-ink/75">{site.address.country}</p>
          </InfoBlock>

          <InfoBlock label="Advisory Guarantee">
            <p className="text-xs text-ink/65 leading-relaxed">
              ✓ Free comparison service<br />
              ✓ Zero obligation to order<br />
              ✓ Orders placed directly with provider
            </p>
          </InfoBlock>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, children }) {
  return (
    <div className="py-5">
      <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-2">{label}</p>
      <div className="text-sm text-ink/80 leading-relaxed">{children}</div>
    </div>
  );
}
