import Link from "next/link";
import { site } from "@/lib/site-config";

export function SectionHeading({ title, lede }) {
  return (
    <div className="max-w-xl">
      <h2 className="font-semibold text-[1.6rem] md:text-[1.9rem] leading-[1.2] text-ink">
        {title}
      </h2>
      {lede && <p className="mt-3 text-ink/70 leading-relaxed">{lede}</p>}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary", ...props }) {
  const base = "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors";
  const styles = {
    primary: "bg-blue text-white hover:bg-blue-dark",
    outline: "border border-ink/25 text-ink hover:border-blue hover:text-blue",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </Link>
  );
}

export function PhoneCTA({ label }) {
  return (
    <a
      href={`tel:${site.phoneHref}`}
      className="inline-flex items-center justify-center gap-2 bg-blue text-white px-6 py-3 text-sm font-medium hover:bg-blue-dark transition-colors"
    >
      {label || `Call ${site.phoneDisplay}`}
    </a>
  );
}
