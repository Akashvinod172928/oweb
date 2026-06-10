"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalStand() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="manifesto"
      className="relative py-48 md:py-64 bg-background border-y border-white/5 overflow-hidden flex items-center justify-center min-h-screen"
    >
      {/* Extremely Soft cinematic backlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary-indigo/2 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary-crimson/1.5 blur-[130px] rounded-full pointer-events-none" />

      {/* Grid Pattern overlay - faint */}
      <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 relative z-10 text-center">
        {/* Small Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-surface border border-slate-800 mb-12"
        >
          <span className="text-[10px] font-bold tracking-widest text-secondary-indigo uppercase">
            OUR SOVEREIGN STAND
          </span>
        </motion.div>

        {/* Cinematic Quote lines - Dominate Screen */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 md:gap-14"
        >
          {/* Line 1 */}
          <motion.p
            variants={lineVariants}
            className="font-display font-extrabold text-4xl md:text-7xl lg:text-8xl tracking-tight leading-none select-none text-text-primary"
          >
            &ldquo;We choose people over algorithms.&rdquo;
          </motion.p>

          {/* Line 2 - Split Humanity Crimson and Tech Indigo */}
          <motion.p
            variants={lineVariants}
            className="font-display font-extrabold text-4xl md:text-7xl lg:text-8xl tracking-tight leading-none select-none text-text-primary"
          >
            &ldquo;
            <span className="text-primary-crimson">Dignity</span>
            {" over "}
            <span className="text-secondary-indigo">data.</span>
            &rdquo;
          </motion.p>

          {/* Line 3 */}
          <motion.p
            variants={lineVariants}
            className="font-display font-extrabold text-4xl md:text-7xl lg:text-8xl tracking-tight leading-none select-none text-text-primary"
          >
            &ldquo;Community over corporations.&rdquo;
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
