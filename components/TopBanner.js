import Link from "next/link";
import { site } from "@/lib/site-config";

export default function TopBanner() {
  return (
    <div className="bg-ink text-white/90 text-xs py-2 px-4 border-b border-ink/20">
      <div className="container-px max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <p className="leading-snug">
          <span className="font-semibold text-white">Independent Telecom Consulting</span> — {site.legalName} provides free neutral guidance. We do not sell internet plans, hold carrier certificates, or act as an affiliate.
        </p>
        <Link href="/policies/advertising-disclosure" className="text-white/70 hover:text-white underline underline-offset-2 whitespace-nowrap">
          Disclosure
        </Link>
      </div>
    </div>
  );
}
