import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod/v4";
import { Mail, Phone, Globe, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(1, "Company name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#050816] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(30,167,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,167,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#1EA7FF] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#1EA7FF]" />
              <span className="text-[#1EA7FF] text-xs font-bold tracking-[0.25em] uppercase">Contact Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-display text-white leading-tight mb-4">
              Let's Build Success<br />
              <span className="text-[#1EA7FF]">Together</span>
            </h2>
            <p className="text-[#E5E7EB]/55 text-sm md:text-base leading-relaxed mb-10">
              We value the trust of our clients and partners and remain dedicated to delivering superior services with passion and integrity. Reach out today.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "info@rahmanianexus.com", href: "mailto:info@rahmanianexus.com" },
          
                { icon: Globe, label: "Website", value: "www.rahmanianexus.com", href: "https://www.rahmanianexus.com" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 border border-[#1EA7FF]/10 bg-[#0B1220] rounded-sm hover:border-[#1EA7FF]/35 transition-all group"
                    data-testid={`link-contact-${item.label.toLowerCase()}`}
                  >
                    <div className="w-10 h-10 bg-[#1EA7FF]/10 rounded-sm flex items-center justify-center text-[#1EA7FF] group-hover:bg-[#1EA7FF]/20 transition-colors shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-[#E5E7EB]/40 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-white text-sm font-medium">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Location note */}
            <div className="mt-6 p-4 border border-[#1EA7FF]/10 bg-[#0B1220] rounded-sm">
              <div className="text-[#1EA7FF] text-xs uppercase tracking-wider mb-1 font-bold">Operating Region</div>
              <div className="text-white font-medium text-sm">Kingdom of Saudi Arabia</div>
              <div className="text-[#E5E7EB]/40 text-xs mt-1">Serving all major industrial cities and project sites across the Kingdom</div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-[#1EA7FF]/15 bg-[#0B1220] rounded-sm">
                <div className="w-16 h-16 bg-[#1EA7FF]/10 rounded-sm flex items-center justify-center text-[#1EA7FF] mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-white font-bold font-display text-xl mb-2">Message Sent!</h3>
                <p className="text-[#E5E7EB]/55 text-sm max-w-xs">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="border border-[#1EA7FF]/15 bg-[#0B1220] rounded-sm p-6 md:p-8 space-y-5"
                data-testid="form-contact"
              >
                <h3 className="font-bold font-display text-white text-lg uppercase tracking-wide mb-2">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#E5E7EB]/50 uppercase tracking-wider mb-1.5 font-medium">Full Name *</label>
                    <input
                      {...register("name")}
                      placeholder="John Smith"
                      data-testid="input-name"
                      className="w-full bg-[#050816] border border-[#1EA7FF]/15 text-white placeholder-[#E5E7EB]/25 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#1EA7FF]/50 transition-colors"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-[#E5E7EB]/50 uppercase tracking-wider mb-1.5 font-medium">Company *</label>
                    <input
                      {...register("company")}
                      placeholder="Your Company"
                      data-testid="input-company"
                      className="w-full bg-[#050816] border border-[#1EA7FF]/15 text-white placeholder-[#E5E7EB]/25 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#1EA7FF]/50 transition-colors"
                    />
                    {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#E5E7EB]/50 uppercase tracking-wider mb-1.5 font-medium">Email *</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="email@company.com"
                      data-testid="input-email"
                      className="w-full bg-[#050816] border border-[#1EA7FF]/15 text-white placeholder-[#E5E7EB]/25 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#1EA7FF]/50 transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-[#E5E7EB]/50 uppercase tracking-wider mb-1.5 font-medium">Phone *</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+966 5X XXX XXXX"
                      data-testid="input-phone"
                      className="w-full bg-[#050816] border border-[#1EA7FF]/15 text-white placeholder-[#E5E7EB]/25 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#1EA7FF]/50 transition-colors"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#E5E7EB]/50 uppercase tracking-wider mb-1.5 font-medium">Service Interest *</label>
                  <select
                    {...register("service")}
                    data-testid="select-service"
                    className="w-full bg-[#050816] border border-[#1EA7FF]/15 text-white text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#1EA7FF]/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#050816]">Select a service…</option>
                    <option value="manpower" className="bg-[#050816]">Manpower Supply</option>
                    <option value="equipment" className="bg-[#050816]">Equipment Rental</option>
                    <option value="transport" className="bg-[#050816]">Car Rental & Transport</option>
                    <option value="hospitality" className="bg-[#050816]">Hospitality Services</option>
                    <option value="industrial" className="bg-[#050816]">Industrial / Petro Services</option>
                    <option value="business" className="bg-[#050816]">Business Support</option>
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-xs text-[#E5E7EB]/50 uppercase tracking-wider mb-1.5 font-medium">Message *</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Describe your project requirements…"
                    data-testid="textarea-message"
                    className="w-full bg-[#050816] border border-[#1EA7FF]/15 text-white placeholder-[#E5E7EB]/25 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#1EA7FF]/50 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#1EA7FF] hover:bg-[#0084FF] disabled:opacity-60 text-white font-bold text-sm tracking-widest uppercase rounded-sm transition-all shadow-[0_0_20px_rgba(30,167,255,0.25)] hover:shadow-[0_0_30px_rgba(30,167,255,0.4)]"
                >
                  {isSubmitting ? "Sending…" : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
