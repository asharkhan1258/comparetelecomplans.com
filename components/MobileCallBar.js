"use client";

import { site } from "@/lib/site-config";

export default function MobileCallBar() {
  return (
    <div className="md:hidden sticky bottom-0 z-40 bg-white border-t border-ink/10 p-3 shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-ink">Speak with an Advisor</p>
          <p className="text-[11px] text-ink/60">Mon–Fri 8am–8pm ET</p>
        </div>
        <a
          href={`tel:${site.phoneHref}`}
          className="inline-flex items-center justify-center gap-2 bg-blue text-white px-5 py-2.5 text-xs font-semibold hover:bg-blue-dark transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
