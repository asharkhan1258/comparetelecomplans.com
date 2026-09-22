"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { site, navLinks, policyLinks } from "@/lib/site-config";

export default function Header() {
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const policiesRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (policiesRef.current && !policiesRef.current.contains(e.target)) {
        setPoliciesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b rule">
      <div className="container-px max-w-content mx-auto flex items-center justify-between h-16 md:h-[72px]">
        <Link href="/" className="font-semibold text-lg text-ink">
          {site.brandName}
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[0.95rem] text-ink/75">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue transition-colors">
              {link.label}
            </Link>
          ))}

          <div className="relative" ref={policiesRef}>
            <button
              type="button"
              onClick={() => setPoliciesOpen((v) => !v)}
              aria-expanded={policiesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 hover:text-blue transition-colors"
            >
              Policies
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${policiesOpen ? "rotate-180" : ""}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {policiesOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white border rule shadow-sm py-2">
                {policyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setPoliciesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-ink/75 hover:bg-offwhite hover:text-blue"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-2 bg-blue text-white px-5 py-2.5 text-sm font-medium hover:bg-blue-dark transition-colors"
          >
            Call {site.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t rule bg-white">
          <nav className="container-px py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="py-2.5 text-ink/85 border-b rule">
                {link.label}
              </Link>
            ))}
            <p className="pt-4 pb-1 text-xs text-ink/45">Policies</p>
            {policyLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm text-ink/65">
                {link.label}
              </Link>
            ))}
            <a href={`tel:${site.phoneHref}`} className="mt-4 inline-flex justify-center items-center gap-2 bg-blue text-white px-5 py-3 text-sm font-medium">
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
