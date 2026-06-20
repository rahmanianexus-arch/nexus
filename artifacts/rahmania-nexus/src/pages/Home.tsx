import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Strengths } from "@/components/sections/Strengths";
import { Services } from "@/components/sections/Services";
import { Ethics } from "@/components/sections/Ethics";
import { Industries } from "@/components/sections/Industries";
import { Projects } from "@/components/sections/Projects";
import { CeoMessage } from "@/components/sections/CeoMessage";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <Stats />
        <About />
        <Strengths />
        <Services />
        <Ethics />
        <Industries />
        <Projects />
        <CeoMessage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
