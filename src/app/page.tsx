import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheChoice from "@/components/TheChoice";
import WhatIsImpactism from "@/components/WhatIsImpactism";
import UniversalBasicImpact from "@/components/UniversalBasicImpact";
import OultaSection from "@/components/OultaSection";
import GlobalStand from "@/components/GlobalStand";
import Singularity from "@/components/Singularity";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      {/* Background radial effects globally shared */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[200vh] left-0 w-[600px] h-[600px] bg-accent-indigo/5 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Landing Page Content */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: The Choice */}
        <TheChoice />

        {/* Section 3: What is Impactism */}
        <WhatIsImpactism />

        {/* Section 4: Universal Basic Impact */}
        <UniversalBasicImpact />

        {/* Section 5: Oulta Infrastructure */}
        <OultaSection />

        {/* Section 6: The Global Stand (Manifesto Quote) */}
        <GlobalStand />

        {/* Section 7: The Impactism Singularity */}
        <Singularity />

        {/* Section 8: Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
