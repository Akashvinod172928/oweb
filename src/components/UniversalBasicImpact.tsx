"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Users, Globe, Building2, ShieldCheck } from "lucide-react";

export default function UniversalBasicImpact() {
  const steps = [
    {
      title: "Citizens",
      desc: "Initiate actions & define local values",
      icon: User,
      color: "border-primary-crimson/20 text-secondary-crimson",
    },
    {
      title: "Communities",
      desc: "Aggregate demands & organize locally",
      icon: Users,
      color: "border-primary-crimson/20 text-secondary-crimson",
    },
    {
      title: "NGOs",
      desc: "Coordinate resources & verify activities",
      icon: Globe,
      color: "border-primary-indigo/20 text-secondary-indigo",
    },
    {
      title: "Companies",
      desc: "Fund verified actions & integrate value",
      icon: Building2,
      color: "border-primary-indigo/20 text-secondary-indigo",
    },
    {
      title: "Measurable Impact",
      desc: "Real outcomes recorded on the public ledger",
      icon: ShieldCheck,
      color: "border-primary-indigo/25 text-text-primary",
    },
  ];

  return (
    <section id="flow" className="relative py-28 md:py-44 bg-background overflow-hidden">
      {/* Subtle underlays */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-primary-indigo/2 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-primary-crimson/1 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-slate-800 mb-6"
          >
            <span className="text-[9px] font-bold tracking-widest text-secondary-indigo uppercase">
              THE VALUE CYCLE
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-text-primary tracking-tight leading-none mb-6"
          >
            Beyond Universal Basic Income
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-text-secondary leading-relaxed text-sm md:text-base"
          >
            Instead of creating dependency, Universal Basic Impact empowers people to direct resources toward real-world change through transparent and measurable action.
          </motion.p>
        </div>

        {/* Dynamic Horizontal/Vertical Flow Graph */}
        <div className="relative max-w-5xl mx-auto py-10">
          {/* Desktop SVG Connecting Lines */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1.5px] z-0">
            <svg className="w-full h-full overflow-visible" fill="none">
              {/* Crimson humanity flow path */}
              <path
                d="M 0 1 H 320"
                stroke="#C62828"
                strokeWidth="1.5"
                className="animate-flow-line"
              />
              {/* Indigo tech flow path */}
              <path
                d="M 320 1 H 720"
                stroke="#283593"
                strokeWidth="1.5"
                className="animate-flow-line"
              />
            </svg>
          </div>

          {/* Mobile Vertical Connecting Lines */}
          <div className="lg:hidden absolute top-[52px] bottom-[52px] left-[38px] w-[1.5px] z-0">
            <svg className="w-full h-full overflow-visible" fill="none">
              <path
                d="M 1 0 V 380"
                stroke="#C62828"
                strokeWidth="1.5"
                className="animate-flow-line"
              />
              <path
                d="M 1 380 V 1000"
                stroke="#283593"
                strokeWidth="1.5"
                className="animate-flow-line"
              />
            </svg>
          </div>

          {/* Flow Steps Layout */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="flex flex-row lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:w-[18%] group"
                >
                  {/* Node Circle - Simplified */}
                  <div className="relative shrink-0 mb-0 lg:mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface border flex items-center justify-center transition-all duration-500 relative z-10 ${step.color}`}>
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
                    </div>

                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 w-5.5 h-5.5 rounded-full bg-surface border border-white/5 text-[9px] font-bold text-text-secondary flex items-center justify-center z-20">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col items-start lg:items-center text-left lg:text-center mt-1 lg:mt-0">
                    <h3 className="font-display font-bold text-base md:text-lg text-text-primary mb-2 tracking-tight group-hover:text-text-primary/90 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-[11px] md:text-xs leading-relaxed max-w-[180px]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
