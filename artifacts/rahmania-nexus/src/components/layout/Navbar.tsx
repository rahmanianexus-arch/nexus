import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Phone } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050816]/95 backdrop-blur-md border-b border-[#1EA7FF]/10 py-3"
            : "bg-[#050816] py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 z-50 group" data-testid="link-logo">
            <img
              src="/rahmania-nexus-logo.jpeg"
              alt="Rahmania Nexus Logo"
              className="h-9 w-auto object-contain rounded-sm"
            />
            <div className="hidden sm:block">
              <div className="font-display font-bold text-white text-sm tracking-[0.12em] uppercase leading-tight">
                Rahmania Nexus
              </div>
              <div className="text-[#1EA7FF] text-[9px] tracking-[0.2em] uppercase font-medium">LLC</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#E5E7EB]/70 hover:text-[#1EA7FF] text-sm font-medium tracking-wide transition-colors uppercase"
                    data-testid={`link-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 text-[#E5E7EB]/50 hover:text-[#1EA7FF] transition-colors"
                aria-label="Toggle theme"
                data-testid="button-theme-toggle"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <a
                href="#contact"
                data-testid="button-consultation"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1EA7FF] hover:bg-[#0084FF] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 rounded-sm"
              >
                <Phone size={13} />
                Free Consultation
              </a>
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3 z-50">
            <button
              onClick={toggleTheme}
              className="p-2 text-[#E5E7EB]/50 hover:text-[#1EA7FF] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#050816] flex flex-col md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center items-center gap-1 px-8 pt-20">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: mobileMenuOpen ? `${i * 50}ms` : "0ms" }}
              className={`w-full text-center py-5 text-2xl font-bold font-display text-white hover:text-[#1EA7FF] border-b border-[#1EA7FF]/10 transition-all uppercase tracking-wide ${
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              data-testid={`link-mobile-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 w-full text-center py-4 bg-[#1EA7FF] hover:bg-[#0084FF] text-white font-bold text-sm tracking-widest uppercase rounded-sm transition-all"
            data-testid="button-mobile-consultation"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </>
  );
}
