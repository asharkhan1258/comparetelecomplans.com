"use client";

import { useState } from "react";
import { site } from "@/lib/site-config";

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  function toggle(idx) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <input
          type="text"
          placeholder="Search questions (e.g. fees, installation, providers)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-ink/20 bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-blue"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-2.5 text-xs text-ink/40 hover:text-ink"
          >
            Clear
          </button>
        )}
      </div>

      <div className="divide-y rule border-t border-b rule">
        {filtered.length === 0 ? (
          <p className="py-6 text-sm text-ink/60">
            No questions matched "{search}". Call us at {site.phoneDisplay} and an advisor will answer directly.
          </p>
        ) : (
          filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 font-semibold text-ink text-base hover:text-blue transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={`text-blue text-xl font-bold leading-none transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 text-sm text-ink/70 leading-relaxed pr-6 border-l-2 border-blue pl-4 py-1">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
