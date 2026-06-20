import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Truck, Car, Utensils, Wrench, Briefcase, ChevronDown, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "manpower",
    title: "Manpower Supply",
    icon: Users,
    tagline: "Skilled Workforce for Every Industrial Demand",
    desc: "Skilled, semi-skilled and unskilled workforce for all industrial and commercial sectors — rigorously screened and deployment-ready.",
    categories: [
      {
        name: "Electro Mechanical",
        items: ["Pipe Fabricator", "Pipe Fitter", "Millwright", "Instrument Technician", "Instrument Electrical", "TIG & Arc Welder", "6G & 3G Welder", "Rigger II TUV Certified", "Scaffolder TUV Certified"],
      },
      {
        name: "Supervisors / Inspectors",
        items: ["Civil Surveyor", "Safety Inspectors", "Electrical Supervisor/Foreman", "Instrument Supervisor", "Piping Supervisor/Foreman", "Mechanical Supervisor", "Structural Supervisor", "Rigging Supervisor", "Material Coordinator", "Auto CAD Operator"],
      },
      {
        name: "Engineers / QA/QC",
        items: ["Mechanical Engineer", "Civil Engineer", "Safety Manager", "Electrical Instrumentation", "Piping Engineer", "Structural Engineer", "Planning & Scheduling", "Estimation", "Quality Control"],
      },
      {
        name: "General Workforce",
        items: ["Light Driver", "Heavy Driver", "Mechanic Helper", "Crane Operator Aramco*", "Forklift Operator Aramco*", "Bobcat Operator Aramco*", "Manlift Operator Aramco*", "Boom Truck Operator Aramco*"],
      },
      {
        name: "Civil Workforces",
        items: ["Mason", "Steel Fixer", "Plumber", "Painter", "Carpenter"],
      },
      {
        name: "Pre-Deployment Checks",
        items: ["Exact Documentation", "Behaviour Interviews", "Legal Status Verification", "Reference Checking", "Training & Certification"],
      },
    ],
  },
  {
    id: "equipment",
    title: "Equipment Rental",
    icon: Wrench,
    tagline: "Modern Machinery, Delivered On Time",
    desc: "Wide range of modern, well-maintained equipment and machinery on rental basis to support projects of all sizes across Saudi Arabia.",
    categories: [
      { name: "Earthmoving", items: ["Excavators", "Loaders", "Backhoes", "Bulldozers", "Graders"] },
      { name: "Lifting", items: ["Mobile Cranes", "Crawler Cranes", "Truck Cranes", "Forklifts"] },
      { name: "Access & Handling", items: ["Scissor Lifts", "Boom Lifts", "Telehandlers", "Manlifts"] },
      { name: "Power & Support", items: ["Generators", "Air Compressors", "Welding Machines", "Light Towers"] },
      { name: "Heavy Transport", items: ["Low Bed Trailers", "Flat Bed Trailers", "Drum Trucks", "Attachments & Breakers"] },
      { name: "Key Advantages", items: ["Latest technology fleet", "Regular inspection & maintenance", "Flexible short/long-term rental", "Safety compliant equipment", "24/7 technical support"] },
    ],
  },
  {
    id: "transport",
    title: "Car Rental & Transport",
    icon: Car,
    tagline: "Fleet Solutions Across the Kingdom",
    desc: "Reliable vehicles and transport solutions tailored to your business, projects, and operational needs across Saudi Arabia.",
    categories: [
      { name: "Vehicle Fleet", items: ["Economy Sedan", "SUV", "Pickup Truck", "Mini Bus (15–30 Seater)", "Bus (30–55 Seater)"] },
      { name: "Transport & Tankers", items: ["Low Bed Trailers", "Flat Bed & Drum Trucks", "Water Tanker", "Diesel Tanker"] },
      { name: "Transport Solutions", items: ["Corporate Travel", "Staff Transportation", "Construction Projects", "Facility Management", "Events & Conferences", "Airport Transfers"] },
      { name: "Key Advantages", items: ["Well maintained fleet", "24/7 support", "Flexible rental plans", "On-time delivery"] },
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality Services",
    icon: Utensils,
    tagline: "Professional Service Beyond Expectations",
    desc: "Providing professional and dedicated hospitality workforce to deliver exceptional guest experiences across hotels and catering facilities.",
    categories: [
      { name: "Hotel Staffing", items: ["Hotel Staffing Solutions", "Housekeeping Staff", "Cleaners"] },
      { name: "Food & Beverage", items: ["Waiters & Stewards", "Kitchen Helpers", "Catering Support Services"] },
      { name: "Front of House", items: ["Reception & Front Desk", "Guest Relations", "Concierge Support"] },
      { name: "Key Advantages", items: ["Trained professionals", "Premium service delivery", "Guest satisfaction priority"] },
    ],
  },
  {
    id: "industrial",
    title: "Industrial / Petro",
    icon: Truck,
    tagline: "Specialized Workforce for Oil & Gas",
    desc: "Specialized support for oil & gas and petrol station projects with skilled manpower, trained to the highest safety and quality standards.",
    categories: [
      { name: "Oil & Gas Support", items: ["Specialized technical manpower", "Aramco-certified operators", "Safety officers (certified)", "Work Permit Receivers (Aramco*)"] },
      { name: "Petrol Stations", items: ["Trained fuel station operators", "Customer-focused staff", "Adherence to safety & quality", "Smooth daily operations"] },
      { name: "Key Advantages", items: ["Professional people", "Exceptional service", "Safety & quality standards", "Strict KSA compliance"] },
    ],
  },
  {
    id: "business",
    title: "Business Support",
    icon: Briefcase,
    tagline: "Operational Excellence for Your Back Office",
    desc: "Professional administrative and operational support services for businesses operating in Saudi Arabia.",
    categories: [
      { name: "Admin Support", items: ["Document Controllers", "Admin Assistants", "Office Support Staff", "Office Boys"] },
      { name: "Technical & Finance", items: ["Planning Engineers", "Accountants", "Scheduling Specialists", "Estimation Professionals"] },
      { name: "Key Advantages", items: ["Vetted professionals", "Seamless integration", "Operational efficiency", "Cost-effective solutions"] },
    ],
  },
];

export function Services() {
  const [activeId, setActiveId] = useState("manpower");
  const active = services.find((s) => s.id === activeId)!;

  return (
    <section id="services" className="py-20 md:py-28 bg-[#050816] relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(30,167,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,167,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#1EA7FF] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

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
            <span className="text-[#1EA7FF] text-xs font-bold tracking-[0.25em] uppercase">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-display text-white leading-tight">
            Integrated Solutions for<br className="hidden md:block" />
            <span className="text-[#1EA7FF]"> Every Project Demand</span>
          </h2>
        </motion.div>

        {/* Service tabs — horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 mb-8">
          <div className="flex gap-2 min-w-max md:min-w-0 md:flex-wrap">
            {services.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  data-testid={`button-service-tab-${s.id}`}
                  className={`flex items-center gap-2.5 px-5 py-3 text-sm font-bold tracking-wide uppercase rounded-sm transition-all duration-200 whitespace-nowrap border ${
                    isActive
                      ? "bg-[#1EA7FF] text-white border-[#1EA7FF] shadow-[0_0_20px_rgba(30,167,255,0.3)]"
                      : "bg-transparent text-[#E5E7EB]/60 border-[#1EA7FF]/15 hover:border-[#1EA7FF]/40 hover:text-white"
                  }`}
                >
                  <Icon size={15} />
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active service panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="border border-[#1EA7FF]/15 bg-[#0B1220] rounded-sm overflow-hidden"
          >
            {/* Panel header */}
            <div className="border-b border-[#1EA7FF]/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#1EA7FF]/10 rounded-sm flex items-center justify-center text-[#1EA7FF] shrink-0">
                  <active.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold font-display text-white text-xl md:text-2xl">{active.title}</h3>
                  <p className="text-[#1EA7FF] text-xs font-medium tracking-widest uppercase">{active.tagline}</p>
                </div>
              </div>
              <p className="text-[#E5E7EB]/60 text-sm md:text-base leading-relaxed md:ml-auto md:max-w-md">{active.desc}</p>
            </div>

            {/* Categories grid */}
            <div className="p-6 md:p-8">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {active.categories.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-[#050816] border border-[#1EA7FF]/10 rounded-sm p-5 hover:border-[#1EA7FF]/30 transition-colors"
                  >
                    <h4 className="text-[#1EA7FF] text-xs font-bold tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
                      <span className="w-4 h-px bg-[#1EA7FF]" />
                      {cat.name}
                    </h4>
                    <ul className="space-y-2">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-[#E5E7EB]/70 text-sm">
                          <CheckCircle2 size={13} className="text-[#1EA7FF]/60 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
