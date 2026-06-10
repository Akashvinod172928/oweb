"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background"
    >
      {/* Background Grids - Faint and static */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />

      {/* Split visual illumination - extremely soft ambient lighting (no cyberpunk neon) */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-[35vw] h-[55vh] bg-primary-crimson/2.5 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-[35vw] h-[55vh] bg-primary-indigo/5 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Content Container - Cinematic Spacing */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center flex flex-col items-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-indigo/5 border border-primary-indigo/15 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-crimson" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-secondary-indigo">
            HUMANITY &amp; TECHNOLOGY COEXISTING
          </span>
        </motion.div>

        {/* Headline - Split branding IMPACT (Crimson) ISM (Indigo) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-extrabold text-5xl md:text-8xl tracking-tight text-text-primary max-w-4xl leading-[1.05] mb-8 select-none"
        >
          THE{" "}
          <span className="inline-block">
            <span className="text-primary-crimson">IMPACT</span>
            <span className="text-secondary-indigo">ISM</span>
          </span>{" "}
          MOVEMENT
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-medium text-lg md:text-2xl tracking-wide text-text-primary/90 mb-10 max-w-2xl"
        >
          A New Path For Humanity In The Age Of AI
        </motion.h2>

        {/* Short Statement - Redesigned to be a spacious visual highlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-1.5 border-y border-white/5 py-8 px-6 mb-12 max-w-xl w-full"
        >
          <p className="text-lg md:text-xl font-medium tracking-wide text-text-primary">
            Technology should empower humanity.
          </p>
          <p className="text-lg md:text-xl font-medium tracking-wide text-text-secondary">
            Not replace it.
          </p>
        </motion.div>

        {/* Buttons - High luxury look */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          {/* Join CTA - Solid Indigo */}
          <a
            href="#join"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-indigo hover:bg-secondary-indigo text-text-primary text-xs font-bold tracking-widest uppercase transition-colors shadow-sm group"
          >
            JOIN THE MOVEMENT
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Manifesto CTA - Crimson Outline */}
          <a
            href="#manifesto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-transparent border border-primary-crimson hover:bg-primary-crimson/10 text-primary-crimson hover:text-secondary-crimson text-xs font-bold tracking-widest uppercase transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            READ MANIFESTO
          </a>
        </motion.div>
      </div>

      {/* Ambient Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
