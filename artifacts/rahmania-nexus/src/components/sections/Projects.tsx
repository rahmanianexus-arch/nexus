import { motion } from "framer-motion";

export function Projects() {
  const stats = [
    { value: "16+", label: "Projects" },
    { value: "4500+", label: "Manpower Deployed" },
    { value: "35+", label: "Active Clients" },
    { value: "2017", label: "Since" },
  ];

  const projects = [
    { client: "Hyundai E&C", project: "Amiral", year: "2024–Current" },
    { client: "L&T Arabia LLC", project: "Jafurah", year: "2024–Current" },
    { client: "Gusan Arabia LLC", project: "Various", year: "2023–2026" },
    { client: "L&T Arabia LLC", project: "Jubail Fabricator Shop", year: "2023–Current" },
    { client: "Hyundai E&C / Daisun", project: "Jafurah", year: "2022–Current" },
    { client: "Midong E&C", project: "Jafurah", year: "2022–2026" },
    { client: "Hyundai E&C", project: "Jafurah", year: "2022–Current" },
    { client: "Gusan Arabia LLC", project: "Marjan", year: "2021–2024" },
    { client: "SEPCO Arabia", project: "Ras Al Khayer", year: "2021–2023" },
    { client: "Sinohydro", project: "Ras Al Khayer", year: "2021–2023" },
    { client: "Hyundai E&C", project: "Marjan", year: "2019–2022" },
    { client: "Hyundai Livart", project: "Marjan", year: "2018–2020" },
    { client: "Sinopec Engineering", project: "Yanbu", year: "2017–2019" },
  ];

  return (
    <section id="projects" className="py-24 relative bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Track Record</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Project Experience
            </h3>
            <p className="text-muted-foreground text-lg">
              Trusted by the biggest names in the industry to deliver on monumental scale.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 md:gap-8 bg-card/50 p-6 rounded-2xl border border-border backdrop-blur-sm"
          >
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl font-bold font-display text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-xs font-bold text-primary mb-2 tracking-wider">{proj.year}</div>
              <h4 className="text-lg font-bold font-display text-foreground mb-1 group-hover:text-primary transition-colors">
                {proj.client}
              </h4>
              <p className="text-sm text-muted-foreground">
                {proj.project}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
