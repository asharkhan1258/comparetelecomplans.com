"use client";

import { useState } from "react";
import { site } from "@/lib/site-config";

export default function AddressChecker() {
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState("idle"); // idle | checking | checked
  const [results, setResults] = useState(null);

  function handleCheck(e) {
    e.preventDefault();
    if (!address.trim() && !zip.trim()) return;

    setStatus("checking");
    setTimeout(() => {
      // Realistic multi-technology result options
      setResults([
        {
          tech: "Fiber Broadband",
          speed: "Up to 1,000 Mbps (Gigabit)",
          from: "$55/mo*",
          bestFor: "Best for 4K streaming, remote work & multi-device households",
          availability: "High probability in urban/suburban zones",
          latency: "Ultra-low (~5ms)",
        },
        {
          tech: "High-Speed Cable",
          speed: "Up to 300 - 500 Mbps",
          from: "$40/mo*",
          bestFor: "Reliable everyday internet, gaming & streaming",
          availability: "Widespread local coverage",
          latency: "Low (~15-25ms)",
        },
        {
          tech: "5G Home Wireless",
          speed: "Up to 100 - 300 Mbps",
          from: "$35/mo*",
          bestFor: "No wire installation, quick setup & flexible contracts",
          availability: "Available in 5G coverage areas",
          latency: "Moderate (~30ms)",
        },
        {
          tech: "Satellite Broadband",
          speed: "Up to 100 Mbps",
          from: "$70/mo*",
          bestFor: "Rural & remote locations where ground wires do not reach",
          availability: "100% Nationwide coverage",
          latency: "Standard Satellite",
        }
      ]);
      setStatus("checked");
    }, 900);
  }

  function handleReset() {
    setStatus("idle");
    setResults(null);
  }

  return (
    <div className="border rule bg-white p-6 md:p-8">
      <div className="max-w-xl mb-6">
        <span className="inline-block bg-blue/10 text-blue font-semibold text-xs px-2.5 py-1 mb-2">
          Address Coverage Lookup
        </span>
        <h3 className="font-semibold text-xl text-ink">Check Internet Options Near You</h3>
        <p className="mt-1 text-sm text-ink/70">
          Enter your street address or ZIP code to view provider technologies and estimated speed tiers in your area.
        </p>
      </div>

      {status === "idle" && (
        <form onSubmit={handleCheck} className="space-y-4 max-w-2xl">
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-ink/70 mb-1">
                Street Address or ZIP Code <span className="text-blue">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 123 Main St or 30340"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-ink/20 bg-offwhite px-3.5 py-2.5 text-sm text-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-ink/70 mb-1">
                ZIP Code (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. 30340"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full border border-ink/20 bg-offwhite px-3.5 py-2.5 text-sm text-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue text-white px-7 py-3 text-sm font-medium hover:bg-blue-dark transition-colors"
          >
            Check Availability Now
          </button>
        </form>
      )}

      {status === "checking" && (
        <div className="py-10 text-center space-y-3">
          <div className="inline-block w-8 h-8 border-3 border-blue border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-semibold text-ink">Scanning local internet coverage...</p>
          <p className="text-xs text-ink/60">Matching address data against local fiber, cable, and wireless provider grids.</p>
        </div>
      )}

      {status === "checked" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b rule pb-4">
            <div>
              <p className="text-xs text-ink/50">Address searched</p>
              <p className="text-sm font-semibold text-ink">{address || zip}</p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs text-blue hover:underline font-medium"
            >
              ← Search another address
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {results.map((item, idx) => (
              <div key={idx} className="border rule p-4 bg-offwhite/50 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-semibold text-base text-ink">{item.tech}</span>
                    <span className="text-xs bg-white px-2 py-0.5 border rule font-medium text-ink/80">
                      From {item.from}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-blue mt-1">{item.speed}</p>
                  <p className="text-xs text-ink/70 mt-2 leading-relaxed">{item.bestFor}</p>
                </div>
                <div className="mt-4 pt-3 border-t rule flex items-center justify-between">
                  <span className="text-[11px] text-ink/50">{item.latency}</span>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="text-xs font-semibold text-blue hover:underline"
                  >
                    Call to confirm address →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border rule p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-ink">Want exact pricing for your exact house or apartment number?</p>
              <p className="text-xs text-ink/60">Call our advisory line — we verify exact provider line availability on the phone.</p>
            </div>
            <a
              href={`tel:${site.phoneHref}`}
              className="shrink-0 bg-blue text-white px-5 py-2.5 text-xs font-medium hover:bg-blue-dark transition-colors"
            >
              Call {site.phoneDisplay}
            </a>
          </div>

          <p className="text-[11px] text-ink/45">
            *Pricing, speed tiers, and technology availability are preliminary estimates. Exact promotional pricing, taxes, equipment fees, and contract terms are set by the provider and confirmed with you directly before placing any order.
          </p>
        </div>
      )}
    </div>
  );
}
