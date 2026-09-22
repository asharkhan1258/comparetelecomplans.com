import Link from "next/link";
import { policyLinks } from "@/lib/site-config";

export default function PolicyLayout({ title, updated, children }) {
  return (
    <section className="container-px max-w-content mx-auto py-14 md:py-20 grid lg:grid-cols-[220px_1fr] gap-12">
      <aside className="hidden lg:block">
        <p className="text-sm text-ink/50 mb-3">Policies</p>
        <nav className="flex flex-col gap-2 text-sm">
          {policyLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink/70 hover:text-blue">
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="max-w-prose">
        <h1 className="font-semibold text-[1.8rem] md:text-[2.1rem] text-ink">{title}</h1>
        <p className="mt-2 text-xs text-ink/50">Last updated: {updated}</p>
        <div className="prose-body mt-8 text-[0.95rem] text-ink/75 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
