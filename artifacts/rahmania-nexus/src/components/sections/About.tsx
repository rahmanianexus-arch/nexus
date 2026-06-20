import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2, Award, Users, Shield, Star, BookOpen } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity & Transparency", desc: "We conduct our business with honesty, ethics and transparency." },
  { icon: CheckCircle2, title: "Commitment", desc: "We are committed to our clients, partners and to the quality of our work." },
  { icon: Users, title: "Safety & Well-Being", desc: "We prioritize the safety of our people and the communities we work in." },
  { icon: Award, title: "Excellence", desc: "We strive for excellence in everything we do." },
  { icon: Star, title: "Teamwork & Respect", desc: "We believe in collaboration, respect and the power of teamwork." },
  { icon: BookOpen, title: "Learning & Development", desc: "We encourage continuous learning and embrace innovation." },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Who We Are</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-display text-foreground leading-tight mb-6">
              Building the Future of<br />
              <span className="text-primary">Saudi Arabia</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
              Rahmania Nexus LLC is a Saudi-based company providing integrated solutions in Manpower Supply, Equipment Rental, Industrial Trading, Petro Services and Hospitality Services.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Established with a commitment to quality, safety and reliability, we deliver world-class services with a customer-focused approach to ensure every project is completed on time, within budget and beyond expectations. Our dedicated team, modern equipment and in-depth industry experience enable us to support the Kingdom's growth and contribute to Vision 2030.
            </p>

            {/* Quick fact bars */}
            {[
              { label: "Workforce Satisfaction", val: 98 },
              { label: "On-time Project Delivery", val: 95 },
              { label: "Client Retention Rate", val: 92 },
            ].map((bar, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-foreground font-medium">{bar.label}</span>
                  <span className="text-primary font-bold">{bar.val}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#1EA7FF] to-[#0084FF] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Vision & Mission cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            <div className="border border-border bg-card rounded-sm p-6 md:p-8 hover:border-primary/40 transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Eye size={20} />
                </div>
                <h3 className="font-bold font-display text-foreground text-lg uppercase tracking-wide">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                To be the leading integrated service provider in Saudi Arabia and the region by delivering innovative, reliable and sustainable solutions that empower industries and contribute to the realization of Vision 2030.
              </p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
            </div>

            <div className="border border-border bg-card rounded-sm p-6 md:p-8 hover:border-primary/40 transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Target size={20} />
                </div>
                <h3 className="font-bold font-display text-foreground text-lg uppercase tracking-wide">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                To deliver high quality, cost-effective services on schedule by employing skilled professionals, modern equipment and best practices. We are passionate about exceeding customer expectations while maintaining the highest standards of safety, integrity and professionalism.
              </p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
            </div>

            {/* Vision 2030 badge */}
            <div className="flex items-center gap-3 px-5 py-4 bg-primary/5 border border-primary/20 rounded-sm">
              <div className="text-primary font-black font-display text-xl">2030</div>
              <div className="h-8 w-px bg-primary/20" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Aligned with Saudi Vision 2030 — contributing to the Kingdom's economic growth and workforce development.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Core Values</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-10">
            The Principles That Guide Every Decision
          </h3>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="flex items-start gap-4 p-5 border border-border bg-card hover:border-primary/40 hover:bg-card/80 rounded-sm transition-all group"
                >
                  <div className="w-9 h-9 shrink-0 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors mt-0.5">
                    <Icon size={17} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1 uppercase tracking-wide">{value.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
