"use client";

import { useState } from "react";

async function submitLead(payload) {
  console.log("Lead submitted (not yet wired to a backend):", payload);
  await new Promise((res) => setTimeout(res, 500));
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
      <div className="border rule bg-white p-8">
        <p className="font-semibold text-lg text-ink">Thanks — that's in.</p>
        <p className="mt-2 text-sm text-ink/65">
          Someone from our team will follow up during posted hours to go over what's
          available at your address. No plan has been ordered on your behalf.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border rule bg-white p-6 md:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" required>
          <input required type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className="input" autoComplete="name" />
        </Field>
        <Field label="Phone" required>
          <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input" autoComplete="tel" />
        </Field>
      </div>

      <Field label="Service address" required>
        <input required type="text" placeholder="Street, city, state, ZIP" value={form.address} onChange={(e) => update("address", e.target.value)} className="input" autoComplete="street-address" />
      </Field>

      <Field label="Email" required>
        <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input" autoComplete="email" />
      </Field>

      {!compact && (
        <Field label="Anything specific you're looking for?">
          <textarea rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className="input resize-none" />
        </Field>
      )}

      <label className="flex items-start gap-3 text-xs text-ink/60">
        <input type="checkbox" required checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-0.5" />
        <span>
          I agree to be contacted by phone, text, or email about internet options at the
          address above. This isn't a condition of purchasing any service, and I can ask
          to stop being contacted at any time.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue text-white px-7 py-3 text-sm font-medium hover:bg-blue-dark transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Check my address"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending that. Please call us instead — details below.
        </p>
      )}

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #E5E7EB;
          background: #F7F8FA;
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          color: #1F2937;
        }
        .input:focus {
          outline: 2px solid #2563EB;
          outline-offset: 1px;
          background: white;
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
