import { motion } from "framer-motion";
import { Factory, HardHat, Building2, Cpu, Pickaxe, Zap } from "lucide-react";

export function Industries() {
  const industries = [
    { icon: Factory, name: "Oil & Gas" },
    { icon: HardHat, name: "Construction" },
    { icon: Building2, name: "Infrastructure" },
    { icon: Cpu, name: "Industrial & Manufacturing" },
    { icon: Pickaxe, name: "Mining" },
    { icon: Zap, name: "Utilities" },
  ];

  return (
    <section id="industries" className="py-24 border-y border-border/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Sectors We Empower</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Industries We Serve
            </h3>
            <p className="text-muted-foreground text-lg">
              Delivering specialized solutions to Saudi Arabia's most critical economic sectors.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-[0_0_30px_rgba(30,167,255,0.15)] hover:-translate-y-2 transition-all duration-300 group cursor-default"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors mb-4">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold text-foreground text-center group-hover:text-primary transition-colors">
                  {ind.name}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
