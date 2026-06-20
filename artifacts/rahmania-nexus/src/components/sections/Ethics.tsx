import { motion } from "framer-motion";
import { Scale, Heart, ShieldCheck, Leaf, Users, Lightbulb } from "lucide-react";

const ethics = [
  { icon: ShieldCheck, title: "Integrity & Transparency", desc: "We conduct our business with honesty, ethics and transparency." },
  { icon: Scale, title: "Fairness & Respect", desc: "We treat our clients, partners and employees with fairness, dignity and respect." },
  { icon: ShieldCheck, title: "Compliance", desc: "We strictly comply with all applicable laws, regulations and industry standards in the Kingdom of Saudi Arabia." },
  { icon: Leaf, title: "Social Responsibility", desc: "We contribute to the development of our communities and support local employment initiatives." },
  { icon: Users, title: "Teamwork & Commitment", desc: "We find greater strength in collaborating as one team to achieve our common goals and create exceptional results." },
  { icon: Lightbulb, title: "Learning & Development", desc: "We bring prosperity and well-being to our stakeholders by adding value through engineering, technology and management." },
];

export function Ethics() {
  return (
    <section className="py-20 md:py-28 bg-[#0B1220] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1EA7FF]/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1EA7FF] opacity-[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#1EA7FF]" />
            <span className="text-[#1EA7FF] text-xs font-bold tracking-[0.25em] uppercase">Business Ethics</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-display text-white leading-tight max-w-2xl">
            Committed to Prosperity &<br />
            <span className="text-[#1EA7FF]">Well-Being</span>
          </h2>
          <p className="text-[#E5E7EB]/50 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
            We are committed to bring prosperity and well-being to our stakeholders and society at large by adding value through engineering, technology and management.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ethics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex gap-5 p-6 border border-[#1EA7FF]/10 bg-[#050816] rounded-sm hover:border-[#1EA7FF]/35 transition-all group"
              >
                <div className="w-10 h-10 shrink-0 bg-[#1EA7FF]/10 rounded-sm flex items-center justify-center text-[#1EA7FF] group-hover:bg-[#1EA7FF]/20 transition-colors mt-0.5">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-bold font-display text-white text-sm uppercase tracking-wide mb-2">{item.title}</h3>
                  <p className="text-[#E5E7EB]/55 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
