import Link from "next/link";
import { site, navLinks, policyLinks } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t rule bg-offwhite">
      <div className="container-px max-w-content mx-auto py-14 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-semibold text-lg text-ink">{site.brandName}</p>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed max-w-xs">
            {site.shortDescription}
          </p>
          <p className="mt-4 text-xs text-ink/45 leading-relaxed max-w-xs">
            {site.legalName} is an independent marketing company. We are not an
            internet service provider. We help you compare plans and, if you choose to
            proceed, connect you with a provider's ordering team to complete your
            order.
          </p>
        </div>

        <div>
          <p className="text-sm text-ink/50 mb-3">Site</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink/75 hover:text-blue">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-ink/50 mb-3">Policies</p>
          <ul className="space-y-2 text-sm">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink/75 hover:text-blue">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-ink/50 mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-ink/75">
            <li>{site.legalName}</li>
            <li>{site.address.line1}</li>
            <li>{site.address.city}, {site.address.state} {site.address.zip}, {site.address.country}</li>
            <li><a href={`tel:${site.phoneHref}`} className="hover:text-blue">{site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-blue">{site.email}</a></li>
            <li className="text-ink/45 text-xs pt-1">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t rule">
        <div className="container-px max-w-content mx-auto py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-ink/45">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Prices, speeds, and availability vary by address and change without notice.</p>
        </div>
      </div>
    </footer>
  );
}
