import { Linkedin, Twitter, Instagram, Mail, Globe, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const services = [
    "Manpower Supply",
    "Equipment Rental",
    "Car Rental & Transport",
    "Hospitality Services",
    "Industrial / Petro",
    "Business Support",
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#050816] border-t border-[#1EA7FF]/10">
      {/* CTA banner */}
      <div className="bg-gradient-to-r from-[#0084FF] to-[#1EA7FF]">
        <div className="container mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold font-display text-xl md:text-2xl uppercase tracking-wide">
              Ready to Power Your Next Project?
            </h3>
            <p className="text-white/80 text-sm mt-1">Reliable Workforce. Stronger Businesses. Get a free consultation today.</p>
          </div>
          <a
            href="#contact"
            data-testid="button-footer-cta"
            className="shrink-0 px-8 py-3.5 bg-white hover:bg-[#E5E7EB] text-[#0084FF] font-bold text-sm tracking-widest uppercase rounded-sm transition-all"
          >
            Get Free Consultation
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 md:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/rahmania-nexus-logo.jpeg" alt="Rahmania Nexus" className="h-10 w-auto object-contain rounded-sm" />
              <div>
                <div className="text-white font-bold font-display text-sm uppercase tracking-widest">Rahmania Nexus</div>
                <div className="text-[#1EA7FF] text-[9px] tracking-widest uppercase">LLC</div>
              </div>
            </div>
            <p className="text-[#E5E7EB]/45 text-xs leading-relaxed mb-5">
              Saudi-based integrated solutions in Manpower Supply, Equipment Rental, Industrial Trading, Petro Services and Hospitality Services.
            </p>
            <p className="text-[#1EA7FF] text-xs font-bold uppercase tracking-[0.2em]">
              Reliable Workforce.<br />Stronger Businesses.
            </p>

            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    data-testid={`link-social-${s.label.toLowerCase()}`}
                    className="w-9 h-9 border border-[#1EA7FF]/15 rounded-sm flex items-center justify-center text-[#E5E7EB]/40 hover:text-[#1EA7FF] hover:border-[#1EA7FF]/40 transition-all"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#1EA7FF]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    data-testid={`link-footer-${l.name.toLowerCase()}`}
                    className="text-[#E5E7EB]/45 hover:text-[#1EA7FF] text-xs transition-colors uppercase tracking-wide"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#1EA7FF]" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-[#E5E7EB]/45 hover:text-[#1EA7FF] text-xs transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#1EA7FF]" />
              Get In Touch
            </h4>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "info@rahmanianexus.com", href: "mailto:info@rahmanianexus.com" },
                { icon: Phone, text: "+966 55 528 5235", href: "tel:+966555285235" },
                { icon: Globe, text: "www.rahmanianexus.com", href: "https://www.rahmanianexus.com" },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <a
                    key={i}
                    href={c.href}
                    className="flex items-start gap-3 text-[#E5E7EB]/45 hover:text-[#1EA7FF] transition-colors group"
                    data-testid={`link-footer-contact-${i}`}
                  >
                    <Icon size={14} className="mt-0.5 shrink-0 text-[#1EA7FF]/40 group-hover:text-[#1EA7FF] transition-colors" />
                    <span className="text-xs">{c.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1EA7FF]/8">
        <div className="container mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#E5E7EB]/30 text-xs">
            © {year} Rahmania Nexus LLC. All rights reserved.
          </p>
          <p className="text-[#E5E7EB]/20 text-xs">
            Kingdom of Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  );
}
