import { motion } from "framer-motion";
import { UserCheck, Truck, ShieldCheck, Clock, HeartHandshake, TrendingUp } from "lucide-react";

export function Strengths() {
  const strengths = [
    { icon: UserCheck, title: "Experienced Professionals", desc: "Highly skilled team with vast industry experience." },
    { icon: Truck, title: "Modern Equipment Fleet", desc: "Well maintained and advanced equipment for every need." },
    { icon: ShieldCheck, title: "Quality Assurance", desc: "Strict quality control and international standards compliance." },
    { icon: Clock, title: "Timely Delivery", desc: "On-time project completion with efficiency." },
    { icon: HeartHandshake, title: "Customer Focused", desc: "Client satisfaction is our top priority in every project." },
    { icon: TrendingUp, title: "Sustainable Growth", desc: "Committed to long-term partnerships and value creation." },
  ];

  return (
    <section className="py-24 bg-secondary/50 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Core Strengths
            </h3>
            <p className="text-muted-foreground text-lg">
              We leverage our expertise and resources to deliver unmatched value to our partners.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                  <Icon size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 border border-primary/20 shadow-[0_0_15px_rgba(30,167,255,0.1)]">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {strength.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
