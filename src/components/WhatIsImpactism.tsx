"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Shield, Users, Coins, Cpu } from "lucide-react";

export default function WhatIsImpactism() {
  const principles = [
    {
      icon: UserCheck,
      title: "Citizen Sovereignty",
      desc: "People should have a direct voice in decisions affecting their lives.",
      color: "text-primary-crimson",
    },
    {
      icon: Shield,
      title: "Verified Impact",
      desc: "Real outcomes matter more than symbolic actions.",
      color: "text-primary-crimson",
    },
    {
      icon: Users,
      title: "Community Over Algorithms",
      desc: "Human collaboration is stronger than recommendation engines.",
      color: "text-primary-crimson",
    },
    {
      icon: Coins,
      title: "Universal Basic Impact",
      desc: "Reward meaningful contribution to society.",
      color: "text-primary-crimson",
    },
    {
      icon: Cpu,
      title: "Technology As A Tool",
      desc: "AI should remain accountable to humanity.",
      color: "text-primary-indigo",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="principles" className="relative py-28 md:py-44 bg-background">
      {/* Softer background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-primary-indigo/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-slate-900 mb-6"
          >
            <span className="text-[9px] font-bold tracking-widest text-secondary-indigo uppercase">
              THE MANIFESTO PRINCIPLES
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-text-primary tracking-tight leading-none mb-6"
          >
            A New System For The AI Era
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-text-secondary leading-relaxed text-sm md:text-base"
          >
            Impactism is a citizen-first philosophy that goes beyond traditional political systems. It combines human collaboration, technology, and measurable action to create positive change.
          </motion.p>
        </div>

        {/* Premium Vertical Pillars Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 lg:gap-8 max-w-7xl mx-auto"
        >
          {principles.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === principles.length - 1;

            return (
              <motion.div
                key={item.title}
                variants={pillarVariants}
                className={`flex flex-col items-start relative ${
                  !isLast ? "md:border-r md:border-white/5 md:pr-4 lg:pr-8" : ""
                }`}
              >
                {/* Large minimalist Icon */}
                <div className={`mb-6 ${item.color}`}>
                  <IconComponent className="w-8 h-8 stroke-[1.5]" />
                </div>

                {/* Large Title */}
                <h3 className="font-display font-bold text-lg text-text-primary mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Single sentence description */}
                <p className="text-text-secondary text-xs lg:text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
