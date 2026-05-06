"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const occasionTypes = [
  "Birthday Celebration",
  "Anniversary",
  "Proposal / Engagement",
  "Baby Shower",
  "Bridal Shower",
  "Corporate Event",
  "Gift Box Only",
  "Surprise Experience",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  occasion: string;
  message: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactClient() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    message: "",
  });
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const errors = {
    name: touched.name && !form.name ? "Please enter your name." : "",
    email:
      touched.email && (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        ? "Please enter a valid email address."
        : "",
    phone: touched.phone && !form.phone ? "Please enter your phone number." : "",
    occasion: touched.occasion && !form.occasion ? "Please select an occasion type." : "",
    message: touched.message && !form.message ? "Please tell us about your occasion." : "",
  };

  const isValid = Object.values(errors).every((e) => !e) && Object.values(form).every(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, occasion: true, message: true });
    if (!isValid) return;

    setSubmitState("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitState("success");
  };

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-16 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 65% 55% at 70% 0%, #FFE0EA 0%, #FAF6EF 65%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="section-divider" />
              <span className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold">
                Get In Touch
              </span>
            </div>
            <h1
              className="font-display text-5xl md:text-7xl font-semibold text-chocolate leading-tight tracking-tight mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Let&apos;s plan your{" "}
              <span className="italic font-normal" style={{ color: "#C9956C" }}>
                moment.
              </span>
            </h1>
            <p className="text-base font-body text-chocolate/60 leading-relaxed max-w-lg">
              Tell us what you&apos;re dreaming of — we&apos;ll take it from there. We respond to every enquiry within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-12 text-center shadow-card border border-cream-deep"
                >
                  <div className="w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <path d="M6 14l5 5 11-11" stroke="#F2A0B0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2
                    className="font-display text-2xl font-semibold text-chocolate mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    We&apos;ve received your message!
                  </h2>
                  <p className="text-sm font-body text-chocolate/60 leading-relaxed">
                    A member of our team will reach out to you within 24 hours. Check your WhatsApp too — we love a good chat.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-3xl p-8 lg:p-10 shadow-card border border-cream-deep"
                  aria-label="Enquiry form"
                >
                  <h2
                    className="font-display text-2xl font-semibold text-chocolate mb-8"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Send an enquiry
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-body font-semibold tracking-wide text-chocolate/60 uppercase mb-2">
                        Full Name <span className="text-blush-400" aria-label="required">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Adaeze Okonkwo"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3.5 rounded-xl bg-cream text-chocolate text-sm font-body placeholder-chocolate/30 border transition-all duration-200 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-blush/40 ${
                          errors.name ? "border-red-300" : "border-cream-deep focus:border-blush/50"
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-body font-semibold tracking-wide text-chocolate/60 uppercase mb-2">
                        Email Address <span className="text-blush-400" aria-label="required">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="adaeze@email.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-4 py-3.5 rounded-xl bg-cream text-chocolate text-sm font-body placeholder-chocolate/30 border transition-all duration-200 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-blush/40 ${
                          errors.email ? "border-red-300" : "border-cream-deep focus:border-blush/50"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-body font-semibold tracking-wide text-chocolate/60 uppercase mb-2">
                        Phone Number <span className="text-blush-400" aria-label="required">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+234 800 000 0000"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`w-full px-4 py-3.5 rounded-xl bg-cream text-chocolate text-sm font-body placeholder-chocolate/30 border transition-all duration-200 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-blush/40 ${
                          errors.phone ? "border-red-300" : "border-cream-deep focus:border-blush/50"
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Occasion */}
                    <div>
                      <label htmlFor="occasion" className="block text-xs font-body font-semibold tracking-wide text-chocolate/60 uppercase mb-2">
                        Occasion Type <span className="text-blush-400" aria-label="required">*</span>
                      </label>
                      <select
                        id="occasion"
                        name="occasion"
                        value={form.occasion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={!!errors.occasion}
                        aria-describedby={errors.occasion ? "occasion-error" : undefined}
                        className={`w-full px-4 py-3.5 rounded-xl bg-cream text-chocolate text-sm font-body border transition-all duration-200 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-blush/40 appearance-none cursor-pointer ${
                          errors.occasion ? "border-red-300" : "border-cream-deep focus:border-blush/50"
                        } ${!form.occasion ? "text-chocolate/40" : ""}`}
                      >
                        <option value="" disabled>Select occasion…</option>
                        {occasionTypes.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      {errors.occasion && (
                        <p id="occasion-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
                          {errors.occasion}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label htmlFor="message" className="block text-xs font-body font-semibold tracking-wide text-chocolate/60 uppercase mb-2">
                      Tell us about your occasion <span className="text-blush-400" aria-label="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Share as much as you'd like — the date, the vibe, the person we're celebrating, your budget…"
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3.5 rounded-xl bg-cream text-chocolate text-sm font-body placeholder-chocolate/30 border transition-all duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-blush/40 ${
                        errors.message ? "border-red-300" : "border-cream-deep focus:border-blush/50"
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="w-full py-4 rounded-full bg-blush text-white font-body font-medium text-sm tracking-wide hover:bg-blush-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-blush-sm hover:shadow-blush-md hover:-translate-y-0.5 min-h-[52px] flex items-center justify-center gap-2"
                  >
                    {submitState === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </button>
                </motion.form>
              )}
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* WhatsApp */}
              <a
                href="https://wa.me/2348000000000?text=Hi%20Pinkpartygirl!%20I%27d%20like%20to%20plan%20something%20special"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] transition-colors duration-200 shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" width="22" height="22" aria-hidden="true">
                      <path d="M16.003 3C9.376 3 4 8.373 4 15.001c0 2.183.588 4.23 1.61 5.995L4 29l8.212-1.589A11.94 11.94 0 0 0 16.003 28C22.628 28 28 22.625 28 15.999 28 9.373 22.628 3 16.003 3zm0 21.9c-1.9 0-3.73-.512-5.306-1.473l-.38-.226-3.936.76.8-3.822-.248-.39A9.879 9.879 0 0 1 5.9 15c0-5.563 4.535-10.09 10.101-10.09 5.565 0 10.099 4.527 10.099 10.09C26.1 20.37 21.568 24.9 16.003 24.9zm5.55-7.574c-.304-.153-1.798-.887-2.077-.988-.279-.102-.481-.153-.684.153-.203.305-.783.987-.96 1.19-.177.203-.354.228-.657.076-.304-.153-1.28-.472-2.438-1.503-.9-.803-1.509-1.795-1.685-2.1-.177-.304-.019-.469.133-.62.136-.136.304-.355.456-.532.153-.178.203-.305.304-.508.102-.203.051-.382-.025-.533-.076-.153-.684-1.647-.937-2.254-.247-.592-.498-.512-.684-.521l-.583-.011c-.203 0-.533.076-.812.38-.279.305-1.062 1.037-1.062 2.53 0 1.495 1.087 2.938 1.24 3.14.152.203 2.14 3.268 5.185 4.581.724.314 1.29.502 1.73.641.727.23 1.39.198 1.913.12.584-.088 1.798-.734 2.052-1.444.253-.709.253-1.318.177-1.444-.076-.127-.279-.204-.583-.356z" />
                    </svg>
                  </div>
                  <span className="text-white font-body font-semibold text-sm">Chat on WhatsApp</span>
                </div>
                <p className="text-white/80 text-xs font-body leading-relaxed">
                  Prefer to chat directly? Message us on WhatsApp — we reply fast and love a good conversation.
                </p>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/pinkpartygirl_ng"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-cream-deep hover:border-blush/40 hover:shadow-blush-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-amber-400 flex items-center justify-center flex-shrink-0 text-white">
                  <InstagramIcon size={18} />
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-chocolate">@pinkpartygirl_ng</p>
                  <p className="text-xs font-body text-chocolate/50">Follow us on Instagram</p>
                </div>
              </a>

              {/* Response time */}
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-blush-50 border border-blush-100">
                <Clock size={18} className="text-blush flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-body font-semibold text-chocolate">We respond within 24 hours</p>
                  <p className="text-xs font-body text-chocolate/55 mt-0.5 leading-relaxed">
                    Send your enquiry anytime — our team reviews and responds to every single message.
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-cream-deep">
                <MapPin size={18} className="text-rose-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-body font-semibold text-chocolate">Based in Lagos, Nigeria</p>
                  <p className="text-xs font-body text-chocolate/55 mt-0.5">
                    Serving Lagos and delivery nationwide. CAC Registered Business.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
