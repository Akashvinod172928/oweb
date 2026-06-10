"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ShieldAlert } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="join" className="relative py-28 md:py-44 bg-background overflow-hidden">
      {/* Background radial glows - separate soft Indigo and Crimson */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[35vw] h-[55vh] bg-primary-indigo/3 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30vw] h-[50vh] bg-primary-crimson/1.5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        {/* Glow Panel Card - Highly Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-surface/30 border border-white/5 p-8 md:p-16 text-center overflow-hidden"
        >
          {/* Inner soft ambient glows */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-indigo/3 blur-[70px] rounded-full pointer-events-none" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-crimson/1.5 blur-[70px] rounded-full pointer-events-none" />

          {/* Badge - Crimson Red Light theme */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-crimson/5 border border-primary-crimson/20 mb-8 relative z-10">
            <ShieldAlert className="w-3.5 h-3.5 text-secondary-crimson" />
            <span className="text-[9px] font-bold tracking-widest text-secondary-crimson uppercase">
              JOIN THE MOVEMENT TODAY
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-extrabold text-3xl md:text-6xl text-text-primary tracking-tight leading-none mb-6 relative z-10">
            Together We Stand
          </h2>

          {/* Description */}
          <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-12 relative z-10">
            The future is not something we wait for. It is something we build together. Reclaim sovereignty and verified action now.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto relative z-10">
            {/* Join Oulta CTA - Primary (Solid Indigo) */}
            <a
              href="https://impactism.oulta.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-indigo hover:bg-secondary-indigo text-text-primary text-xs font-bold tracking-widest uppercase transition-colors"
            >
              JOIN OULTA
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Read Manifesto CTA - Secondary (Crimson Outline) */}
            <a
              href="#manifesto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-transparent border border-primary-crimson hover:bg-primary-crimson/10 text-primary-crimson hover:text-secondary-crimson text-xs font-bold tracking-widest uppercase transition-colors"
            >
              <BookOpen className="w-4 h-4 text-primary-crimson" />
              READ MANIFESTO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
