import { Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img
                src="/rahmania-nexus-logo.jpeg"
                alt="Rahmania Nexus Logo"
                className="h-12 w-auto rounded-md object-contain bg-white"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                RAHMANIA NEXUS
              </span>
            </a>
            <p className="text-secondary-foreground/70 mb-6 font-medium tracking-wide text-sm">
              RELIABLE WORKFORCE.<br/>STRONGER BUSINESSES.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Industries', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Manpower Supply', 
                'Equipment Rental', 
                'Car Rental & Transport', 
                'Hospitality Services', 
                'Industrial Solutions', 
                'Business Support'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-secondary-foreground/70">
              <li>
                <div className="font-bold text-white text-sm mb-1">Email</div>
                <a href="mailto:info@rahmanianexus.com" className="hover:text-primary transition-colors">
                  info@rahmanianexus.com
                </a>
              </li>
              <li>
                <div className="font-bold text-white text-sm mb-1">Website</div>
                <a href="https://www.rahmanianexus.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  www.rahmanianexus.com
                </a>
              </li>
              <li>
                <div className="font-bold text-white text-sm mb-1">Location</div>
                <span>Saudi Arabia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-foreground/50 text-sm">
          <p>© {currentYear} Rahmania Nexus LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
