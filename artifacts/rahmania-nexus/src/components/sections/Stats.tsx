import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, suffix = "", duration = 2.5 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * eased));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
      else setCount(end);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { value: 5000, suffix: "+", label: "Skilled Manpower Deployed", sub: "Across all sectors" },
    { value: 100, suffix: "+", label: "Modern Equipment Fleet", sub: "Well-maintained & certified" },
    { value: 20, suffix: "+", label: "Completed Projects", sub: "Major industrial projects" },
    { value: 100, suffix: "%", label: "Safety & Quality", sub: "Zero-compromise commitment" },
  ];

  return (
    <section className="relative z-20 bg-[#0B1220]">
      {/* Top blue accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#1EA7FF] via-[#0084FF] to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`py-8 px-6 md:px-8 text-center md:text-left ${
                index !== stats.length - 1 ? "border-b md:border-b-0 md:border-r border-[#1EA7FF]/10" : ""
              } ${index >= 2 ? "border-b-0" : ""}`}
            >
              <div className="text-4xl md:text-5xl xl:text-6xl font-bold font-display text-[#1EA7FF] mb-2 tabular-nums">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-sm md:text-base mb-1 uppercase tracking-wide">{stat.label}</div>
              <div className="text-[#E5E7EB]/40 text-xs md:text-sm">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#1EA7FF]/30 to-transparent" />
    </section>
  );
}
