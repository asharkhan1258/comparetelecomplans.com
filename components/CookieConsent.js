"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site } from "@/lib/site-config";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent_choice");
    if (!consent) {
      setShow(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie_consent_choice", "accepted");
    setShow(false);
  }

  function handleDecline() {
    localStorage.setItem("cookie_consent_choice", "declined");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-ink text-white shadow-2xl border-t border-white/10">
      <div className="container-px max-w-content mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-xs md:text-sm text-white/80 max-w-3xl leading-relaxed">
          <p className="font-semibold text-white mb-1">Privacy &amp; Cookie Policy Notice</p>
          <p>
            {site.brandName} uses cookies and necessary tracking scripts to provide a secure experience, analyze site usage, and measure Google Ads performance in accordance with our{" "}
            <Link href="/policies/privacy-policy" className="text-white underline hover:text-blue-light">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/policies/cookie-policy" className="text-white underline hover:text-blue-light">
              Cookie Policy
            </Link>.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none border border-white/30 px-4 py-2 text-xs font-medium text-white/90 hover:bg-white/10 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-blue text-white px-5 py-2 text-xs font-medium hover:bg-blue-dark transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
