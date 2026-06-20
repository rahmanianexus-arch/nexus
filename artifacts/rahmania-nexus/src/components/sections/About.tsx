import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const values = [
    { title: "Integrity & Transparency", desc: "We conduct our business with honesty, ethics and transparency." },
    { title: "Commitment", desc: "We are committed to our clients, partners and to the quality of our work." },
    { title: "Safety & Well-Being", desc: "We prioritize the safety of our people and the communities we work in." },
    { title: "Excellence", desc: "We strive for excellence in everything we do." },
    { title: "Teamwork & Respect", desc: "We believe in collaboration, respect and the power of teamwork." },
    { title: "Learning & Development", desc: "We encourage continuous learning and embrace innovation." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Building the Future of Saudi Arabia
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Rahmania Nexus LLC is a Saudi-based company providing integrated solutions in Manpower Supply, Equipment Rental, Industrial Trading, Petro Services and Hospitality Services.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Established with a commitment to quality, safety and reliability, we deliver world-class services with a customer-focused approach to ensure every project is completed on time, within budget and beyond expectations. Our dedicated team, modern equipment and in-depth industry experience enable us to support the Kingdom's growth and contribute to Vision 2030.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="grid gap-6 relative z-10">
              <div className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-2xl shadow-xl hover:border-primary/50 transition-colors">
                <h4 className="text-xl font-display font-bold text-foreground mb-3 flex items-center gap-3">
                  <div className="h-8 w-1 bg-primary rounded-full" />
                  Our Vision
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading integrated service provider in Saudi Arabia and the region by delivering innovative, reliable and sustainable solutions that empower industries and contribute to the realization of Vision 2030.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-2xl shadow-xl hover:border-primary/50 transition-colors">
                <h4 className="text-xl font-display font-bold text-foreground mb-3 flex items-center gap-3">
                  <div className="h-8 w-1 bg-primary rounded-full" />
                  Our Mission
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver high quality, cost-effective services on schedule by employing skilled professionals, modern equipment and best practices. We are passionate about exceeding customer expectations while maintaining the highest standards of safety, integrity and professionalism.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">Core Values</h3>
            <p className="text-muted-foreground">The principles that guide our every action and decision.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border bg-card/30 hover:bg-card/60 transition-all duration-300 group">
                <div className="mb-4 text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-bold font-display text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
