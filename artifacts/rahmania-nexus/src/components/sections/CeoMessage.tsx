import { motion } from "framer-motion";
import { Quote, Shield, Award, Users, TrendingUp, CheckCircle2 } from "lucide-react";

const coreValues = [
  { icon: Shield, label: "Safety First" },
  { icon: Award, label: "Quality Driven" },
  { icon: Users, label: "Client Focused" },
  { icon: TrendingUp, label: "Performance" },
];

export function CeoMessage() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: CEO card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Placeholder portrait */}
            <div className="relative mb-8">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#0B1220] to-[#050816] border border-primary/15 rounded-sm flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-sm flex items-center justify-center text-primary mx-auto mb-4">
                    <Users size={48} />
                  </div>
                  <div className="text-foreground font-bold font-display text-lg uppercase tracking-wide">CEO</div>
                  <div className="text-primary text-xs font-medium tracking-widest uppercase">Rahmania Nexus LLC</div>
                </div>
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-sm" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/40 rounded-br-sm" />
              </div>
            </div>

            {/* Core values pills */}
            <div className="grid grid-cols-2 gap-3">
              {coreValues.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 border border-border bg-card rounded-sm">
                    <Icon size={16} className="text-primary shrink-0" />
                    <span className="text-foreground text-xs font-bold uppercase tracking-wide">{v.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">CEO Message</span>
            </div>

            <div className="text-primary mb-6">
              <Quote size={40} />
            </div>

            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold font-display text-foreground leading-tight mb-6">
              People. Performance.<br />
              <span className="text-primary">Partnership.</span><br />
              That's Our Promise.
            </h2>

            <blockquote className="border-l-2 border-primary pl-6 mb-6">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                At Rahmania Nexus LLC, our mission is simple yet powerful — to deliver world-class manpower, equipment, and transport solutions that build stronger projects and lasting partnerships.
              </p>
            </blockquote>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              We are driven by a commitment to safety, quality, and integrity in everything we do. Our people are our greatest strength, and their dedication enables us to exceed expectations and create value for our clients and communities.
            </p>

            <div className="flex items-start gap-3 p-5 bg-card border border-border rounded-sm mb-8">
              <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-foreground font-semibold">Our Commitment:</span> We are committed to safety, professionalism, innovation, and delivering excellence in every project we undertake.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <p className="text-foreground font-bold font-display text-sm uppercase tracking-widest shrink-0">
                Together, We Build Today for a Stronger Tomorrow.
              </p>
              <div className="h-px flex-1 bg-border" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
