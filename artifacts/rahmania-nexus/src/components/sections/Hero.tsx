import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Users, Wrench } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-20" id="hero">
      {/* Industrial dark background */}
      <div className="absolute inset-0 bg-[#050816]">
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,167,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,167,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Blue glow top-right */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#1EA7FF] opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1EA7FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        {/* Diagonal accent stripe */}
        <div className="absolute inset-y-0 right-0 w-[45%] hidden lg:block overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #1EA7FF 0, #1EA7FF 2px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      </div>

      {/* Trusted clients ticker */}
      <div className="absolute top-[72px] left-0 right-0 bg-[#0B1220] border-b border-[#1EA7FF]/10 py-2 overflow-hidden z-20">
        <div className="flex items-center gap-2 text-xs text-[#1EA7FF]/60 font-medium tracking-widest uppercase px-4 md:px-8">
          <span className="shrink-0 text-[#1EA7FF] font-bold">Trusted By:</span>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: [0, -1200] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {["Sinopec Engineering", "Hyundai E&C", "L&T Arabia", "SEPCO Arabia", "Gusan Arabia", "Sinohydro", "Midong E&C", "Hyundai Livart",
                "Sinopec Engineering", "Hyundai E&C", "L&T Arabia", "SEPCO Arabia", "Gusan Arabia", "Sinohydro", "Midong E&C", "Hyundai Livart"].map((c, i) => (
                <span key={i} className="text-[#E5E7EB]/50">{c}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#1EA7FF]/10 border border-[#1EA7FF]/30 rounded-sm"
            >
              <span className="w-2 h-2 bg-[#1EA7FF] rounded-full animate-pulse" />
              <span className="text-[#1EA7FF] text-xs font-bold tracking-[0.2em] uppercase">Saudi Arabia's Premier Manpower & Industrial Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-white leading-[1.05] tracking-tight mb-6"
            >
              Powering
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1EA7FF] to-[#0084FF]">
                Industries
              </span>
              <br />
              Through People
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-[#E5E7EB]/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Rahmania Nexus LLC delivers integrated workforce, transport, logistics, hospitality and business support solutions across Saudi Arabia's biggest industrial projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                data-testid="button-hero-consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1EA7FF] hover:bg-[#0084FF] text-white font-bold text-sm tracking-wide uppercase transition-all duration-200 rounded-sm shadow-[0_0_30px_rgba(30,167,255,0.35)] hover:shadow-[0_0_40px_rgba(30,167,255,0.5)]"
              >
                Get Free Consultation
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                data-testid="button-hero-services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1EA7FF]/40 text-[#E5E7EB] hover:bg-[#1EA7FF]/10 hover:border-[#1EA7FF] font-bold text-sm tracking-wide uppercase transition-all duration-200 rounded-sm"
              >
                <Phone size={16} />
                View Our Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Users, value: "5000+", label: "Workforce Deployed", color: "#1EA7FF" },
              { icon: Wrench, value: "100+", label: "Equipment Fleet", color: "#1EA7FF" },
              { icon: Shield, value: "100%", label: "Safety Commitment", color: "#1EA7FF" },
              { icon: ArrowRight, value: "20+", label: "Projects Completed", color: "#1EA7FF" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-[#0B1220] border border-[#1EA7FF]/15 p-6 rounded-sm hover:border-[#1EA7FF]/40 transition-all group"
                >
                  <div className="w-10 h-10 bg-[#1EA7FF]/10 rounded-sm flex items-center justify-center text-[#1EA7FF] mb-4 group-hover:bg-[#1EA7FF]/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="text-3xl font-bold font-display text-white mb-1">{item.value}</div>
                  <div className="text-xs text-[#E5E7EB]/50 uppercase tracking-widest font-medium">{item.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0B1220]" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
    </section>
  );
}
