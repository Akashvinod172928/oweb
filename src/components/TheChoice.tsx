"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TheChoice() {
  const technoFascismPoints = [
    "Power concentrated in a few hands",
    "Algorithmic control over human choice",
    "Systematic data exploitation",
    "Digital gatekeeping and censorship",
    "Citizens become passive consumers",
  ];

  const impactismPoints = [
    "Absolute citizen sovereignty",
    "Decentralized community power",
    "Transparent and verified impact",
    "Open, accessible governance",
    "Technology serving human potential",
  ];

  return (
    <section id="choice" className="relative py-28 md:py-44 bg-background">
      {/* Grid Overlay - Very faint */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />

      {/* Softer, ambient backlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary-indigo/3 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[250px] h-[250px] bg-primary-crimson/2 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-slate-900 mb-6"
          >
            <span className="text-[9px] font-bold tracking-widest text-secondary-indigo uppercase">
              THE CONFRONTATION
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-text-primary tracking-tight leading-none mb-6"
          >
            Humanity Is At A Turning Point
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-text-secondary text-sm md:text-base leading-relaxed"
          >
            We are sleepwalking into a future designed for machines. It is time to choose a path built on human agency.
          </motion.p>
        </div>

        {/* Minimal Split-Screen Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
          {/* Vertical Divider line (visible only on desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/5" />

          {/* Left Column: Techno-Fascism */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between md:pr-16"
          >
            <div>
              <div className="mb-8">
                <span className="text-[10px] font-bold tracking-widest text-secondary-indigo uppercase">
                  THE SYSTEM
                </span>
                <h3 className="font-display font-black text-2xl md:text-3xl text-text-primary mt-1 tracking-tight">
                  TECHNO-FASCISM
                </h3>
              </div>

              <ul className="flex flex-col gap-6">
                {technoFascismPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    {/* Small distinct Indigo dot */}
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-indigo shrink-0 mt-2" />
                    <span className="text-text-secondary text-sm md:text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-text-secondary/50 mt-12 leading-relaxed">
              Power concentrated in central algorithms, exploiting user data while reducing citizens to passive agents.
            </p>
          </motion.div>

          {/* Right Column: Impactism */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between md:pl-16"
          >
            <div>
              <div className="mb-8">
                <span className="text-[10px] font-bold tracking-widest text-primary-crimson uppercase">
                  THE SOVEREIGN
                </span>
                <h3 className="font-display font-black text-2xl md:text-3xl text-text-primary mt-1 tracking-tight">
                  IMPACTISM
                </h3>
              </div>

              <ul className="flex flex-col gap-6">
                {impactismPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    {/* Small distinct Crimson dot */}
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-crimson shrink-0 mt-2" />
                    <span className="text-text-primary text-sm md:text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-text-secondary/50 mt-12 leading-relaxed">
              Citizen sovereignty coexisting with accountable technology, directing resources through verified, transparent change.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
