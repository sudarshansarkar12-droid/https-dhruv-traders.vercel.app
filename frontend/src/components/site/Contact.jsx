import { useState } from "react";
import { ScrollReveal } from "./RevealText";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", capital: "", msg: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast?.error?.("Name and email are required.");
      return;
    }
    setSent(true);
    toast?.success?.("Request received. Our desk will reach out within 24 hours.");
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-32 md:py-48 border-b border-white/5"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="overline mb-6">§ 07 — Open Account</div>
            <ScrollReveal>
              <h2 className="font-display text-white text-5xl md:text-7xl leading-[0.9] tracking-tighter font-medium mb-8">
                Speak to the<br />
                <em className="italic text-white/70">desk.</em>
              </h2>
            </ScrollReveal>
            <p className="text-white/60 text-base md:text-lg max-w-md mb-10 leading-relaxed">
              Applications are reviewed by our senior partners. Please share
              your intent — we'll respond within one trading day.
            </p>
            <div className="space-y-4 font-mono-utility text-sm">
              <div className="flex items-baseline gap-6">
                <span className="overline w-24">Desk</span>
                <span className="text-white">desk@dhruvtraders.io</span>
              </div>
              <div className="flex items-baseline gap-6">
                <span className="overline w-24">Support</span>
                <span className="text-white">+91 · 22 · 6100 4200</span>
              </div>
              <div className="flex items-baseline gap-6">
                <span className="overline w-24">HQ</span>
                <span className="text-white">BKC, Mumbai · India</span>
              </div>
              <div className="flex items-baseline gap-6">
                <span className="overline w-24">Hours</span>
                <span className="text-white">Mon–Fri · 24h desk</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <ScrollReveal>
              <form
                onSubmit={onSubmit}
                className="border border-white/10 bg-[#0d0d10] p-6 md:p-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    label="Full name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Aarav Mehta"
                    testid="contact-name"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@company.com"
                    testid="contact-email"
                  />
                  <Field
                    label="Capital range"
                    name="capital"
                    value={form.capital}
                    onChange={onChange}
                    placeholder="$50k – $250k"
                    testid="contact-capital"
                  />
                  <Field
                    label="Preferred market"
                    name="market"
                    value={form.market || ""}
                    onChange={onChange}
                    placeholder="Forex majors"
                    testid="contact-market"
                  />
                </div>

                <div className="mt-5">
                  <label className="overline block mb-3">Message</label>
                  <textarea
                    name="msg"
                    value={form.msg}
                    onChange={onChange}
                    rows={4}
                    placeholder="Tell us what you'd like the desk to help with..."
                    data-testid="contact-msg"
                    className="w-full bg-transparent border border-white/10 focus:border-[#FF5500] outline-none px-4 py-3 font-mono-utility text-sm text-white placeholder-white/30 transition-colors"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                  <div className="overline text-white/50 max-w-xs leading-relaxed">
                    By submitting you agree to our risk disclaimer.
                  </div>
                  <button
                    type="submit"
                    disabled={sent}
                    data-testid="contact-submit"
                    className="cta-primary group"
                  >
                    {sent ? "Received" : "Submit Application"}
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", testid }) {
  return (
    <div>
      <label className="overline block mb-3">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={testid}
        className="w-full bg-transparent border border-white/10 focus:border-[#FF5500] outline-none px-4 py-3 font-mono-utility text-sm text-white placeholder-white/30 transition-colors"
      />
    </div>
  );
}
