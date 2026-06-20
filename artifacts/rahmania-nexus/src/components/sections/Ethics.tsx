import { motion } from "framer-motion";
import { Scale, Heart, ShieldCheck, Leaf, Users, Lightbulb } from "lucide-react";

export function Ethics() {
  const ethics = [
    { icon: Scale, title: "Integrity & Transparency", desc: "We conduct our business with honesty, ethics and transparency." },
    { icon: Heart, title: "Fairness & Respect", desc: "We treat our clients, partners and employees with fairness, dignity and respect." },
    { icon: ShieldCheck, title: "Compliance", desc: "We strictly comply with all applicable laws, regulations and industry standards in the Kingdom of Saudi Arabia." },
    { icon: Leaf, title: "Social Responsibility", desc: "We contribute to the development of our communities and support local employment initiatives." },
    { icon: Users, title: "Teamwork & Commitment", desc: "We find greater strength in collaborating as one team to achieve our common goals." },
    { icon: Lightbulb, title: "Learning & Development", desc: "We bring prosperity and well-being to our stakeholders and society at large." },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-4 md:px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Principles</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Business Ethics
            </h3>
            <p className="text-muted-foreground text-lg">
              Operating with the highest standards of corporate governance, ensuring trust and reliability at every touchpoint.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ethics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border flex gap-4 hover:bg-card transition-colors duration-300"
              >
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold font-display text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
