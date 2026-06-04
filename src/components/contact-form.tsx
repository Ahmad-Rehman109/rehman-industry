"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { buttonClasses } from "@/components/ui";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
const label = "mb-1.5 block text-sm font-medium text-slate-700";

const empty = {
  name: "",
  company: "",
  phone: "",
  email: "",
  quantity: "",
  message: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ ...empty });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function whatsappHref() {
    const lines = [
      "Hello Rehman Industry, I'd like a quote.",
      form.name && `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      form.quantity && `Quantity: ${form.quantity}`,
      form.message && `Requirement: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    return whatsappLink(lines);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-bold text-ink">Thank you!</h3>
        <p className="mt-2 text-slate-600">
          Your enquiry has been received. We&apos;ll get back to you, usually
          within one business day. For anything urgent, message us on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm({ ...empty });
            setStatus("idle");
          }}
          className="mt-5 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name <span className="text-accent-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={update("name")}
            className={field}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className={label}>
            Company
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={update("company")}
            className={field}
            placeholder="Company (optional)"
          />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone / WhatsApp <span className="text-accent-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            className={field}
            placeholder="+92 3xx xxxxxxx"
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className={field}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quantity" className={label}>
          Estimated quantity
        </label>
        <input
          id="quantity"
          name="quantity"
          value={form.quantity}
          onChange={update("quantity")}
          className={field}
          placeholder="e.g. 5,000 pieces / month"
        />
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Your requirement <span className="text-accent-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={field}
          placeholder="Describe the part you need — material, size, whether you have a drawing or sample, and anything else useful."
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong sending your enquiry. Please try again, or message
          us on WhatsApp.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`${buttonClasses("primary", "lg")} disabled:cursor-not-allowed disabled:opacity-70`}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Enquiry
            </>
          )}
        </button>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses("whatsapp", "lg")}
        >
          <MessageCircle className="h-5 w-5" />
          Send on WhatsApp
        </a>
      </div>
      <p className="text-xs text-slate-500">
        Prefer WhatsApp? Fill in what you can above, then tap “Send on WhatsApp”
        — your details come pre-filled.
      </p>
    </form>
  );
}
