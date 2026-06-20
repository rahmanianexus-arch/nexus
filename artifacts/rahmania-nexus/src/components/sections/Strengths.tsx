import { motion } from "framer-motion";
import { Users, Wrench, Award, Clock, Heart, TrendingUp } from "lucide-react";

const strengths = [
  { icon: Users, title: "Experienced Professionals", desc: "Highly skilled team with vast industry experience across Saudi Arabia's most demanding projects." },
  { icon: Wrench, title: "Modern Equipment Fleet", desc: "Well maintained and advanced equipment covering earthmoving, lifting, power, and transport." },
  { icon: Award, title: "Quality Assurance", desc: "Strict quality control and international standards compliance on every engagement." },
  { icon: Clock, title: "Timely Delivery", desc: "On-time project completion with operational efficiency built into our deployment process." },
  { icon: Heart, title: "Customer Focused", desc: "Client satisfaction is our top priority — we build long-term partnerships, not just contracts." },
  { icon: TrendingUp, title: "Sustainable Growth", desc: "Committed to long-term partnerships and value creation aligned with Vision 2030." },
];

export function Strengths() {
  return (
    <section className="py-20 md:py-28 bg-[#0B1220] relative overflow-hidden">
      <div className="h-px w-full absolute top-0 left-0 right-0 bg-gradient-to-r from-transparent via-[#1EA7FF]/20 to-transparent" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#1EA7FF] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#1EA7FF]" />
            <span className="text-[#1EA7FF] text-xs font-bold tracking-[0.25em] uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-display text-white leading-tight max-w-2xl">
            Our Core Strengths
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group border border-[#1EA7FF]/10 bg-[#050816] rounded-sm p-6 md:p-8 hover:border-[#1EA7FF]/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl font-black text-[#1EA7FF]/[0.04] font-display select-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="w-11 h-11 bg-[#1EA7FF]/10 rounded-sm flex items-center justify-center text-[#1EA7FF] mb-5 group-hover:bg-[#1EA7FF]/20 transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold font-display text-white text-lg mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-[#E5E7EB]/55 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#1EA7FF] to-transparent transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
