import Link from "next/link";
import { site, navLinks, policyLinks } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t rule bg-offwhite text-ink">
      <div className="container-px max-w-content mx-auto py-14 grid gap-10 md:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt={site.brandName}
              className="h-8 w-auto object-contain shrink-0"
            />
            <p className="font-semibold text-lg text-ink">{site.brandName}</p>
          </div>
          <p className="mt-3 text-sm text-ink/70 leading-relaxed max-w-xs">
            {site.shortDescription}
          </p>
          <div className="mt-4 p-3 bg-white border rule text-xs text-ink/60 leading-relaxed max-w-xs">
            <strong>Consulting Notice:</strong> {site.legalName} is an independent advisory service. We do not sell internet plans, hold carrier certificates, or receive affiliate commissions.
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Navigation</p>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink/75 hover:text-blue transition-colors font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Policies &amp; Disclosures</p>
          <ul className="space-y-2 text-sm">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink/75 hover:text-blue transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Corporate Headquarters</p>
          <ul className="space-y-2 text-sm text-ink/75">
            <li className="font-semibold text-ink">{site.legalName}</li>
            <li>{site.address.line1}</li>
            <li>{site.address.city}, {site.address.state} {site.address.zip}</li>
            <li>{site.address.country}</li>
            <li className="pt-1">
              <a href={`tel:${site.phoneHref}`} className="text-blue font-semibold hover:underline">
                Consultant Hotline: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-blue hover:underline">
                Email: {site.email}
              </a>
            </li>
            <li className="text-ink/50 text-xs pt-1">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t rule bg-white">
        <div className="container-px max-w-content mx-auto py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-ink/50">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Independent consulting guide. All plan orders are handled directly between consumers and telecom providers.</p>
        </div>
      </div>
    </footer>
  );
}
