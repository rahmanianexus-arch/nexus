import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";

const deploymentStats = [
  { value: "16+", label: "Completed & Ongoing Projects" },
  { value: "4500+", label: "Manpower Deployed" },
  { value: "35+", label: "Active Clients" },
  { value: "2017", label: "Year Established" },
];

const projects = [
  { client: "Sinopec Engineering Company Ltd", project: "Yanbu Refinery", location: "Yanbu", period: "2017–2019", status: "Completed", roles: ["Work Permit Receiver", "Pipe Fabricator", "Pipe Fitter", "Carpenter", "Mason", "Steel Fixer", "Electrician"] },
  { client: "Hyundai Livart", project: "Marjan Field Development", location: "Marjan", period: "2018–2020", status: "Completed", roles: ["Admin Assistant", "Document Controller", "Rigger Aramco", "Pipe Fitter", "Safety Officer", "Scaffolder TUV", "Electrician"] },
  { client: "Hyundai E&C", project: "Marjan Field Development", location: "Marjan", period: "2019–2022", status: "Completed", roles: ["Electrician", "Rigger Aramco", "Steel Fixer", "Mason", "Carpenter"] },
  { client: "Hyundai E&C", project: "Jafurah Gas Development", location: "Jafurah", period: "2022–Current", status: "Active", roles: ["Rigger Aramco", "Safety Officer", "Pipe Fitter", "Pipe Fabricator", "Helper"] },
  { client: "SEPCO Arabia", project: "Ras Al Khayer", location: "Ras Al Khayer", period: "2021–2023", status: "Completed", roles: ["Civil Foreman", "Carpenter", "Mason", "Steel Fixer", "Helper"] },
  { client: "Gusan Arabia LLC", project: "Marjan Field Development", location: "Marjan", period: "2021–2024", status: "Completed", roles: ["Mason", "Carpenter", "Steel Fixer", "Helper", "Safety Officer", "Scaffolder TUV"] },
  { client: "Sinohydro", project: "Ras Al Khayer", location: "Ras Al Khayer", period: "2021–2023", status: "Completed", roles: ["Rigger Aramco", "Steel Fixer", "Carpenter", "Mason", "Electrician", "Plumber"] },
  { client: "Gusan Arabia LLC", project: "Multi-Site Operations", location: "Saudi Arabia", period: "2023–2026", status: "Active", roles: ["Safety Officer Aramco", "WPR Aramco", "Carpenter", "Steel Fixer", "Mason", "Scaffolder TUV"] },
  { client: "Hyundai E&C / Daisun", project: "Jafurah Gas Development", location: "Jafurah", period: "2022–Current", status: "Active", roles: ["Light Driver", "Rigger Aramco", "WPR Aramco", "Mechanical Technician", "Piping Supervisor"] },
  { client: "Midong E&C", project: "Jafurah Gas Development", location: "Jafurah", period: "2022–2026", status: "Active", roles: ["Electrician", "Carpenter", "Scaffolder TUV", "Helper", "Electrical Supervisor"] },
  { client: "Hyundai E&C", project: "Amiral Petrochemical", location: "Jubail", period: "2024–Current", status: "Active", roles: ["Rigger Aramco", "WPR Aramco", "Safety Officer", "Pipe Fabricator", "Pipe Fitter", "Electrician"] },
  { client: "L&T Arabia LLC", project: "Jafurah Gas Development", location: "Jafurah", period: "2024–Current", status: "Active", roles: ["WPR Aramco", "Rigger Aramco", "Document Controller", "Piping Insulator", "Instrument Technician"] },
  { client: "L&T Arabia LLC", project: "Jubail Fabricator Shop", location: "Jubail", period: "2023–Current", status: "Active", roles: ["Pipe Fabricator", "Pipe Fitter", "Helper"] },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#050816] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(30,167,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,167,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#1EA7FF]" />
            <span className="text-[#1EA7FF] text-xs font-bold tracking-[0.25em] uppercase">Project Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-display text-white leading-tight mb-3">
            Deployment Record
          </h2>
          <p className="text-[#E5E7EB]/50 text-base max-w-xl">
            Trusted by leading EPC contractors and industrial operators across Saudi Arabia since 2017.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 border border-[#1EA7FF]/15 rounded-sm mb-10 overflow-hidden"
        >
          {deploymentStats.map((s, i) => (
            <div
              key={i}
              className={`py-5 px-6 text-center ${i !== deploymentStats.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#1EA7FF]/10" : ""}`}
            >
              <div className="text-3xl font-black font-display text-[#1EA7FF] mb-1">{s.value}</div>
              <div className="text-[#E5E7EB]/50 text-xs uppercase tracking-wide font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.07 }}
              className="border border-[#1EA7FF]/10 bg-[#0B1220] rounded-sm p-5 hover:border-[#1EA7FF]/35 transition-all group"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide font-display leading-tight mb-1">{p.client}</h3>
                  <p className="text-[#1EA7FF] text-xs font-medium">{p.project}</p>
                </div>
                <span
                  className={`shrink-0 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm border ${
                    p.status === "Active"
                      ? "text-[#1EA7FF] border-[#1EA7FF]/30 bg-[#1EA7FF]/10"
                      : "text-[#E5E7EB]/40 border-[#E5E7EB]/10 bg-[#E5E7EB]/5"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 text-[#E5E7EB]/40 text-xs mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin size={11} />
                  {p.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} />
                  {p.period}
                </span>
              </div>

              {/* Roles */}
              <div>
                <div className="flex items-center gap-1.5 text-[#E5E7EB]/30 text-[10px] uppercase tracking-wider mb-2">
                  <Users size={10} />
                  Roles Deployed
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.roles.slice(0, 5).map((role, ri) => (
                    <span key={ri} className="text-[10px] text-[#E5E7EB]/55 bg-[#1EA7FF]/5 border border-[#1EA7FF]/10 px-2 py-0.5 rounded-sm">
                      {role}
                    </span>
                  ))}
                  {p.roles.length > 5 && (
                    <span className="text-[10px] text-[#1EA7FF]/60 px-2 py-0.5">+{p.roles.length - 5} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
