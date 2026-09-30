"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site-config";

async function submitLead(payload) {
  console.log("Lead submitted:", payload);
  await new Promise((res) => setTimeout(res, 600));
  return { ok: true };
}

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "", address: "", phone: "", email: "", message: "", consent: false,
  });

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.consent) return;
    setStatus("submitting");
    try {
      const result = await submitLead(form);
      setStatus(result.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border rule bg-white p-8 space-y-4">
        <div className="w-10 h-10 bg-blue/10 text-blue flex items-center justify-center font-bold text-lg">
          ✓
        </div>
        <h3 className="font-semibold text-xl text-ink">Inquiry Received</h3>
        <p className="text-sm text-ink/70 leading-relaxed">
          Thank you, <strong>{form.name}</strong>. An internet advisor will check carrier fiber and cable line connections for <strong>{form.address}</strong> and contact you during business hours.
        </p>
        <p className="text-xs text-ink/50 border-t rule pt-3">
          Note: No account has been created or enrolled on your behalf. All plan orders require your direct confirmation with the provider.
        </p>
        <button
          onClick={() => {
            setForm({ name: "", address: "", phone: "", email: "", message: "", consent: false });
            setStatus("idle");
          }}
          className="text-xs text-blue underline font-medium"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border rule bg-white p-6 md:p-8 space-y-5">
      <div>
        <h3 className="font-semibold text-lg text-ink">Address Plan Inquiry Form</h3>
        <p className="text-xs text-ink/60 mt-1">
          Free comparison service · Zero obligation · Response within 1 business day
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" required>
          <input
            required
            type="text"
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
            autoComplete="name"
          />
        </Field>
        <Field label="Phone number" required>
          <input
            required
            type="tel"
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input"
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="Service street address, city, ZIP" required>
        <input
          required
          type="text"
          placeholder="123 Main St, City, State 30340"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
          className="input"
          autoComplete="street-address"
        />
      </Field>

      <Field label="Email address" required>
        <input
          required
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="input"
          autoComplete="email"
        />
      </Field>

      {!compact && (
        <Field label="Specific internet needs or current provider (Optional)">
          <textarea
            rows={3}
            placeholder="e.g. Currently with Xfinity, looking for fiber optic speeds under $60/mo..."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="input resize-none"
          />
        </Field>
      )}

      <div className="bg-offwhite border rule p-3.5 space-y-2">
        <label className="flex items-start gap-3 cursor-pointer text-xs text-ink/75 leading-relaxed">
          <input
            type="checkbox"
            required
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-0.5 accent-blue shrink-0"
          />
          <span>
            <strong>TCPA Consent:</strong> I agree to be contacted by phone, SMS/text, or email by {site.legalName} and authorized internet providers regarding internet options at my address. This consent is not required to purchase service. Message &amp; data rates may apply.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || !form.consent}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue text-white px-8 py-3.5 text-sm font-medium hover:bg-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Checking line coverage…" : "Request Address Coverage Check"}
      </button>

      <p className="text-[11px] text-ink/50">
        We respect your privacy. Information is used solely to verify local plan availability in accordance with our{" "}
        <Link href="/policies/privacy-policy" className="underline">
          Privacy Policy
        </Link>.
      </p>

      {status === "error" && (
        <p className="text-xs text-red-700 font-medium">
          An error occurred while submitting your request. Please call our phone line at {site.phoneDisplay} for immediate assistance.
        </p>
      )}

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #D1D5DB;
          background: #F9FAFB;
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          color: #111827;
        }
        .input:focus {
          outline: 2px solid #2563EB;
          outline-offset: 1px;
          background: #FFFFFF;
        }
      `}</style>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-ink/70 mb-1.5">
        {label} {required && <span className="text-blue">*</span>}
      </span>
      {children}
    </label>
  );
}
