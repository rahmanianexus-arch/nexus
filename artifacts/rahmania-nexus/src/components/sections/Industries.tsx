import { motion } from "framer-motion";
import { Factory, HardHat, Building2, Cpu, Pickaxe, Zap, Flame, Settings } from "lucide-react";

const industries = [
  {
    icon: Flame,
    title: "Oil & Gas",
    desc: "Supplying certified manpower and specialized equipment for upstream, midstream and downstream petroleum operations across the Kingdom.",
    tags: ["Aramco Projects", "Pipeline Work", "Petro Services"],
  },
  {
    icon: HardHat,
    title: "Construction",
    desc: "Full-spectrum workforce and machinery deployment for mega-construction projects from civil structures to finishing.",
    tags: ["Civil Works", "Structural Steel", "MEP"],
  },
  {
    icon: Building2,
    title: "Infrastructure",
    desc: "Supporting national infrastructure projects including roads, utilities, water networks and public facilities.",
    tags: ["Roads & Bridges", "Water Networks", "Utilities"],
  },
  {
    icon: Factory,
    title: "Industrial / Manufacturing",
    desc: "Providing skilled technical teams for manufacturing facilities, processing plants and industrial complexes.",
    tags: ["Processing Plants", "Industrial Zones", "Fabrication"],
  },
  {
    icon: Pickaxe,
    title: "Mining",
    desc: "Supplying experienced operators and heavy equipment for mining extraction, site support and material handling.",
    tags: ["Heavy Equipment", "Site Operations", "Safety-First"],
  },
  {
    icon: Zap,
    title: "Utilities & Power",
    desc: "Qualified workforce for power plants, electrical infrastructure and utility maintenance projects.",
    tags: ["Power Plants", "Electrical Works", "Maintenance"],
  },
  {
    icon: Settings,
    title: "Facility Management",
    desc: "End-to-end hospitality and facility support staff for commercial, industrial and residential facilities.",
    tags: ["Housekeeping", "Catering", "Maintenance Staff"],
  },
  {
    icon: Cpu,
    title: "Technology & Telecom",
    desc: "Technical and administrative support staff for IT infrastructure, data centers and telecom rollouts.",
    tags: ["IT Support", "Admin Staff", "Documentation"],
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Industries We Serve</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-display text-foreground leading-tight">
            Sectors Powered by<br />
            <span className="text-primary">Rahmania Nexus</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="group border border-border bg-card hover:border-primary/40 rounded-sm p-5 transition-all duration-300 hover:bg-card/80"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold font-display text-foreground text-sm uppercase tracking-wide mb-2">{ind.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{ind.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {ind.tags.map((tag, ti) => (
                    <span key={ti} className="text-[10px] text-primary/70 bg-primary/5 border border-primary/10 px-2 py-0.5 rounded-sm font-medium tracking-wide uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
