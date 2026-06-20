import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Truck, Car, Utensils, Wrench, Briefcase, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Services() {
  const services = [
    {
      id: "manpower",
      title: "Manpower Supply",
      icon: Users,
      desc: "Skilled, semi-skilled and unskilled workforce for all industrial and commercial sectors.",
      features: [
        { name: "Electro Mechanical", items: "Pipe Fabricator, Pipe Fitter, Millwright, Instrument Technician, TIG & Arc Welder, Scaffolders" },
        { name: "Supervisors/Inspectors", items: "Civil Surveyor, Safety Inspectors, Electrical/Mechanical Supervisors, Rigging Supervisor" },
        { name: "Engineers/QA/QC", items: "Mechanical, Civil, Safety Manager, Electrical Instrumentation, Planning, Quality Control" },
        { name: "General Workforce", items: "Light/Heavy Driver, Crane Operator Aramco*, Forklift Operator Aramco*, Manlift Operator" },
        { name: "Civil Workforces", items: "Mason, Steel Fixer, Plumber, Painter, Carpenter" },
        { name: "Pre-deployment", items: "Exact Documentation, Behaviour Interviews, Legal Status Verification, Training" },
      ]
    },
    {
      id: "equipment",
      title: "Equipment Rental",
      icon: Truck,
      desc: "Wide range of modern, well-maintained equipment and machinery on rental basis.",
      features: [
        { name: "Earthmoving", items: "Excavators, Loaders, Backhoes, Bulldozers, Graders" },
        { name: "Lifting", items: "Mobile Cranes, Crawler Cranes, Truck Cranes, Forklifts" },
        { name: "Access & Handling", items: "Scissor Lifts, Boom Lifts, Telehandlers, Manlifts" },
        { name: "Power & Support", items: "Generators, Air Compressors, Welding Machines, Light Towers" },
        { name: "Heavy Transport", items: "Low Bed Trailers, Attachments, Breakers, Buckets" },
        { name: "Key Features", items: "Modern Fleet, Flexible Rental (Short/Long Term), Safety First, 24/7 Support" },
      ]
    },
    {
      id: "transport",
      title: "Car Rental & Transport",
      icon: Car,
      desc: "Reliable vehicles and transport solutions tailored to your business, projects, and operational needs across Saudi Arabia.",
      features: [
        { name: "Vehicle Fleet", items: "Economy Sedan, SUV, Pickup Truck, Mini Bus, Bus (30-50 Seater)" },
        { name: "Transport & Tankers", items: "Trailers (Low/Flat Bed), Water Tanker, Diesel Tanker, Rental Cars & Pickups" },
        { name: "Solutions", items: "Corporate Travel, Staff Transportation, Construction Projects, Airport Transfers" },
        { name: "Key Features", items: "Well Maintained Fleet, 24/7 Support, Flexible Rental Plans, On-Time Delivery" },
      ]
    },
    {
      id: "hospitality",
      title: "Hospitality Services",
      icon: Utensils,
      desc: "Providing professional and dedicated hospitality workforce to deliver exceptional guest experiences.",
      features: [
        { name: "Services", items: "Hotel Staffing Solutions, Housekeeping Staff, Cleaners, Waiters & Stewards" },
        { name: "Support Staff", items: "Reception & Front Desk, Kitchen Helpers, Catering Support Services" },
        { name: "Key Features", items: "Trained Professionals, Premium Service, Guest Satisfaction Our Priority" },
      ]
    },
    {
      id: "industrial",
      title: "Industrial / Petro",
      icon: Wrench,
      desc: "Specialized support for oil & gas projects with skilled manpower and technical solutions.",
      features: [
        { name: "Oil & Gas Support", items: "Specialized manpower and technical solutions for major petroleum projects" },
        { name: "Petrol Stations", items: "Providing trained, reliable and customer-focused manpower across the Kingdom" },
        { name: "Key Features", items: "Professional People, Exceptional Service, Safety & Quality Standards" },
      ]
    },
    {
      id: "business",
      title: "Business Support",
      icon: Briefcase,
      desc: "Professional administrative and operational support service for businesses in Saudi Arabia.",
      features: [
        { name: "Admin Support", items: "Document control, Admin assistants, and office support staff" },
        { name: "Technical Support", items: "Planning engineers, Accountants, Specialized operational staff" },
        { name: "Key Features", items: "Vetted Professionals, Seamless Integration, Operational Efficiency" },
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Integrated Solutions
            </h3>
            <p className="text-muted-foreground text-lg">
              Comprehensive operational support spanning across specialized domains to ensure your project's success.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="manpower" className="w-full">
          <div className="overflow-x-auto pb-4 mb-8 custom-scrollbar">
            <TabsList className="w-full flex md:justify-center justify-start min-w-max bg-transparent h-auto p-0 gap-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border px-6 py-4 rounded-xl flex items-center gap-3 transition-all hover:border-primary/50"
                  >
                    <Icon size={18} />
                    <span className="font-medium whitespace-nowrap">{service.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0 focus-visible:outline-none">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
              >
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 relative z-10">
                  <div>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_rgba(30,167,255,0.15)]">
                      <service.icon size={32} />
                    </div>
                    <h4 className="text-3xl font-display font-bold text-foreground mb-4">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6 bg-background/50 rounded-2xl p-6 border border-border/50">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="space-y-2">
                        <h5 className="font-bold text-foreground text-sm flex items-center gap-2">
                          <ChevronRight size={16} className="text-primary" />
                          {feature.name}
                        </h5>
                        <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                          {feature.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
