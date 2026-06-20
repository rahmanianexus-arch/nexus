import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function CeoMessage() {
  return (
    <section className="py-24 bg-secondary/80 border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8 md:p-16 rounded-3xl shadow-2xl relative"
          >
            <div className="absolute -top-6 -left-6 text-primary opacity-20">
              <Quote size={120} className="fill-current" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8 tracking-tight">
                "PEOPLE. PERFORMANCE. PARTNERSHIP. THAT'S OUR PROMISE."
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed font-serif italic mb-10">
                <p>
                  At Rahmania Nexus LLC, our mission is simple yet powerful — to deliver world-class manpower, equipment, and transport solutions that build stronger projects and lasting partnerships.
                </p>
                <p>
                  We are driven by a commitment to safety, quality, and integrity in everything we do. Our people are our greatest strength, and their dedication enables us to exceed expectations and create value for our clients and communities.
                </p>
                <p className="font-bold text-primary not-italic">
                  TOGETHER, WE BUILD TODAY FOR A STRONGER TOMORROW.
                </p>
              </div>
              
              <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between gap-6 md:items-center">
                <div>
                  <div className="font-display font-bold text-xl text-foreground">CEO, Rahmania Nexus LLC</div>
                  <div className="text-sm text-muted-foreground mt-1">Leading with vision & integrity</div>
                </div>
                
                <div className="text-right">
                  <div className="text-xs tracking-widest uppercase text-muted-foreground font-bold mb-2">Core Values</div>
                  <div className="text-sm font-medium text-foreground flex flex-wrap gap-2 md:justify-end">
                    <span>Safety First</span>
                    <span className="text-primary">•</span>
                    <span>Quality Driven</span>
                    <span className="text-primary">•</span>
                    <span>Client Focused</span>
                    <span className="text-primary">•</span>
                    <span>People Power</span>
                    <span className="text-primary">•</span>
                    <span>Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground">
              "We are committed to safety, professionalism, innovation, and delivering excellence in every project we undertake."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
