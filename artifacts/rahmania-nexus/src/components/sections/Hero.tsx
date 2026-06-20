import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Users } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background gradients and shapes */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-transparent opacity-50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary/10 rounded-full"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              scale: [1, Math.random() * 0.2 + 0.9],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(30,167,255,0.15)] backdrop-blur-md">
              SAUDI ARABIA'S PREMIER INTEGRATED SOLUTIONS
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight text-foreground mb-6 leading-tight"
          >
            Powering Industries Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1EA7FF] to-[#0084FF]">People, Transport & Smart Solutions.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Rahmania Nexus LLC delivers integrated workforce, transport, logistics, hospitality and business support solutions across Saudi Arabia's biggest projects.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(30,167,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(30,167,255,0.6)]" data-testid="button-hero-consultation">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-primary/20 hover:bg-primary/10 backdrop-blur-sm" data-testid="button-hero-services">
              View Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Badges */}
        <div className="hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-1/4 left-[5%] bg-background/40 backdrop-blur-xl border border-primary/20 p-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center gap-4"
          >
            <div className="p-3 bg-primary/20 rounded-lg text-primary">
              <Users size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-foreground">5000+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Workforce</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-1/3 right-[5%] bg-background/40 backdrop-blur-xl border border-primary/20 p-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center gap-4"
          >
            <div className="p-3 bg-primary/20 rounded-lg text-primary">
              <Shield size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-foreground">100%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Safety Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
