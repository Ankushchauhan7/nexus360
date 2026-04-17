"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";

/* ─── EmailJS config ───────────────────────────────────────────────────────
   Replace these three values with your own from https://emailjs.com
   Service ID  → Your EmailJS Service (e.g. Gmail, Outlook)
   Template ID → Your EmailJS email template
   Public Key  → Account > API Keys > Public Key
──────────────────────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

type FormData = {
  enquiryType: string;
  name:        string;
  email:       string;
  company:     string;
  phone:       string;
  services:    string[];
  budget:      string;
  message:     string;
};

const enquiryTypes = [
  { value: "audit",   label: "Free Digital Audit"   },
  { value: "quote",   label: "Project Quote"         },
  { value: "general", label: "General Enquiry"       },
  { value: "partner", label: "Partnership / Referral"},
];

const serviceOptions = [
  "Web Development",
  "SEO",
  "Social Media Marketing",
  "Content Marketing",
  "Creative Design",
  "Technical Documentation",
  "Performance Marketing",
  "AI-Powered Solutions",
];

const budgetRanges = [
  "Under ₹50,000 / month",
  "₹50,000 – ₹1,00,000 / month",
  "₹1,00,000 – ₹2,50,000 / month",
  "₹2,50,000 – ₹5,00,000 / month",
  "₹5,00,000+ / month",
  "Project-based (one-time)",
  "Not sure yet",
];

export default function ContactForm() {
  const sectionRef = useRef(null);
  const formRef    = useRef<HTMLFormElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px" });

  const [sending,  setSending]  = useState(false);
  const [sent,     setSent]     = useState(false);
  const [sendError,setSendError]= useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { enquiryType: "audit", services: [] },
  });

  const watchedServices  = watch("services") ?? [];
  const watchedEnquiry   = watch("enquiryType");

  const toggleService = (service: string) => {
    const current = watchedServices;
    if (current.includes(service)) {
      setValue("services", current.filter((s) => s !== service));
    } else {
      setValue("services", [...current, service]);
    }
  };

  const onSubmit = async (data: FormData) => {
    setSending(true);
    setSendError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    data.name,
          from_email:   data.email,
          company:      data.company   || "—",
          phone:        data.phone     || "—",
          enquiry_type: data.enquiryType,
          services:     data.services.join(", ") || "—",
          budget:       data.budget    || "—",
          message:      data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch {
      setSendError("Something went wrong. Please email us directly at hello@nexu360.com");
    } finally {
      setSending(false);
    }
  };

  /* ── Shared input style ── */
  const inputClass =
    "w-full bg-transparent border px-4 py-3 text-[14px] font-light outline-none transition-colors duration-200 placeholder:text-[var(--muted)]";
  const inputStyle = {
    borderColor: "var(--border2)",
    color: "var(--text)",
  };
  const inputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.currentTarget.style.borderColor = "var(--gold)");
  const inputBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.currentTarget.style.borderColor = "var(--border2)");

  return (
    <div ref={sectionRef} id="audit">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <span className="block text-[11px] tracking-[2.5px] mb-3" style={{ color: "var(--gold)" }}>
          — SEND US A MESSAGE
        </span>
        <h2 className="font-display leading-none tracking-wide" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
          START THE{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>Conversation</em>
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed font-light max-w-lg" style={{ color: "var(--muted)" }}>
          Fill in the form below and we will get back to you within one business
          day. Prefer email? Reach us at{" "}
          <a href="mailto:hello@nexu360.com" style={{ color: "var(--gold)" }}>
            hello@nexu360.com
          </a>
        </p>
      </motion.div>

      {/* ── Success state ── */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-10 text-center border"
            style={{ borderColor: "var(--gold)", backgroundColor: "rgba(232,160,32,0.06)" }}
          >
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-display text-3xl tracking-wide mb-3" style={{ color: "var(--gold)" }}>
              MESSAGE SENT!
            </h3>
            <p className="text-[14px] font-light" style={{ color: "var(--muted)" }}>
              Thank you for reaching out. We will review your message and respond
              within one business day.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Form ── */}
      {!sent && (
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6"
          noValidate
        >
          {/* Enquiry type */}
          <div>
            <label className="block text-[11px] tracking-[1.5px] mb-3" style={{ color: "var(--muted)" }}>
              ENQUIRY TYPE
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ backgroundColor: "var(--border2)" }}>
              {enquiryTypes.map((type) => {
                const active = watchedEnquiry === type.value;
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setValue("enquiryType", type.value)}
                    className="py-3 px-4 text-[12px] tracking-wide transition-colors duration-200"
                    style={{
                      backgroundColor: active ? "var(--gold)"  : "var(--bg)",
                      color:           active ? "#0d0e10"       : "var(--muted)",
                    }}
                  >
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] tracking-[1.5px] mb-2" style={{ color: "var(--muted)" }}>
                FULL NAME <span style={{ color: "var(--gold)" }}>*</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your full name"
                className={inputClass}
                style={inputStyle}
                onFocus={inputFocus}
                onBlur={inputBlur}
              />
              {errors.name && (
                <p className="mt-1 text-[12px]" style={{ color: "#e05050" }}>{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-[11px] tracking-[1.5px] mb-2" style={{ color: "var(--muted)" }}>
                EMAIL ADDRESS <span style={{ color: "var(--gold)" }}>*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                })}
                type="email"
                placeholder="you@company.com"
                className={inputClass}
                style={inputStyle}
                onFocus={inputFocus}
                onBlur={inputBlur}
              />
              {errors.email && (
                <p className="mt-1 text-[12px]" style={{ color: "#e05050" }}>{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Company + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] tracking-[1.5px] mb-2" style={{ color: "var(--muted)" }}>
                COMPANY / ORGANISATION
              </label>
              <input
                {...register("company")}
                placeholder="Your company name"
                className={inputClass}
                style={inputStyle}
                onFocus={inputFocus}
                onBlur={inputBlur}
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[1.5px] mb-2" style={{ color: "var(--muted)" }}>
                PHONE NUMBER
              </label>
              <input
                {...register("phone")}
                placeholder="+91 98765 43210"
                className={inputClass}
                style={inputStyle}
                onFocus={inputFocus}
                onBlur={inputBlur}
              />
            </div>
          </div>

          {/* Services interested in */}
          <div>
            <label className="block text-[11px] tracking-[1.5px] mb-3" style={{ color: "var(--muted)" }}>
              SERVICES YOU&apos;RE INTERESTED IN <span className="opacity-50">(select all that apply)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((service) => {
                const selected = watchedServices.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className="px-4 py-2 text-[12px] tracking-wide border transition-all duration-200"
                    style={{
                      borderColor:     selected ? "var(--gold)"  : "var(--border2)",
                      backgroundColor: selected ? "rgba(232,160,32,0.10)" : "transparent",
                      color:           selected ? "var(--gold)"  : "var(--muted)",
                    }}
                  >
                    {selected ? "✓ " : ""}{service}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-[11px] tracking-[1.5px] mb-2" style={{ color: "var(--muted)" }}>
              MONTHLY BUDGET RANGE
            </label>
            <select
              {...register("budget")}
              className={inputClass}
              style={{ ...inputStyle, appearance: "none" }}
              onFocus={inputFocus}
              onBlur={inputBlur}
            >
              <option value="" style={{ backgroundColor: "#141518" }}>Select a range...</option>
              {budgetRanges.map((b) => (
                <option key={b} value={b} style={{ backgroundColor: "#141518" }}>{b}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[11px] tracking-[1.5px] mb-2" style={{ color: "var(--muted)" }}>
              YOUR MESSAGE <span style={{ color: "var(--gold)" }}>*</span>
            </label>
            <textarea
              {...register("message", { required: "Please tell us about your project" })}
              rows={6}
              placeholder="Tell us about your business, your goals, and what you're looking to achieve..."
              className={inputClass}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={inputFocus}
              onBlur={inputBlur}
            />
            {errors.message && (
              <p className="mt-1 text-[12px]" style={{ color: "#e05050" }}>{errors.message.message}</p>
            )}
          </div>

          {/* Error banner */}
          {sendError && (
            <p className="text-[13px] p-4 border" style={{ color: "#e05050", borderColor: "#e05050" }}>
              {sendError}
            </p>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={sending}
            whileHover={!sending ? { scale: 1.02, y: -1 } : {}}
            whileTap={!sending ? { scale: 0.98 } : {}}
            className="w-full py-4 text-[14px] font-medium tracking-wide transition-colors duration-200 disabled:opacity-60"
            style={{ backgroundColor: "var(--gold)", color: "#0d0e10" }}
            onMouseEnter={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "var(--gold2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
          >
            {sending ? "Sending..." : "Send Message →"}
          </motion.button>

          <p className="text-[12px] text-center" style={{ color: "var(--muted)" }}>
            We respond within 1 business day. Your details are never shared.
          </p>
        </motion.form>
      )}
    </div>
  );
}
