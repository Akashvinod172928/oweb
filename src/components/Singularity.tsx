"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Building, Cpu, Zap } from "lucide-react";

export default function Singularity() {
  const nodes = [
    {
      id: "citizens",
      title: "Citizens",
      icon: Users,
      color: "border-primary-crimson/20 text-secondary-crimson bg-surface/50",
      x: "50%",
      y: "10%",
      offsetX: "-50%",
      offsetY: "0%",
      path: "M 200 60 L 200 135",
      pathColor: "#C62828",
    },
    {
      id: "ngos",
      title: "NGOs",
      icon: Globe,
      color: "border-primary-crimson/20 text-secondary-crimson bg-surface/50",
      x: "10%",
      y: "50%",
      offsetX: "0%",
      offsetY: "-50%",
      path: "M 80 200 L 135 200",
      pathColor: "#C62828",
    },
    {
      id: "companies",
      title: "Companies",
      icon: Building,
      color: "border-primary-indigo/20 text-secondary-indigo bg-surface/50",
      x: "90%",
      y: "50%",
      offsetX: "-100%",
      offsetY: "-50%",
      path: "M 320 200 L 265 200",
      pathColor: "#283593",
    },
    {
      id: "ai",
      title: "AI As A Tool",
      icon: Cpu,
      color: "border-primary-indigo/20 text-secondary-indigo bg-surface/50",
      x: "50%",
      y: "90%",
      offsetX: "-50%",
      offsetY: "-100%",
      path: "M 200 340 L 200 265",
      pathColor: "#283593",
    },
  ];

  return (
    <section id="singularity" className="relative py-28 md:py-44 bg-background overflow-hidden">
      {/* Soft background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary-indigo/3 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary-crimson/1.5 blur-[120px] rounded-full pointer-events-none" />

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
              THE CONVERGENCE
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-text-primary tracking-tight leading-none mb-6"
          >
            The Impactism Singularity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-text-secondary leading-relaxed text-sm md:text-base"
          >
            The Impactism Singularity is not the moment machines become smarter than humans. It is the moment humanity becomes too connected, organized, and impact-driven to be divided by any system.
          </motion.p>
        </div>

        {/* Visual Convergence Diagram */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[400px] aspect-square rounded-full border border-slate-900/10 bg-surface/5 p-2 select-none">
            {/* SVG Connecting Flow lines (Visually Distinct & Thin) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none">
              {nodes.map((node) => (
                <path
                  key={node.id}
                  d={node.path}
                  stroke={node.pathColor}
                  strokeWidth="1"
                  opacity="0.3"
                  className="animate-flow-line"
                />
              ))}
            </svg>

            {/* Central Convergence Point */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-32 h-32 rounded-full bg-surface border border-primary-indigo/20 flex flex-col items-center justify-center p-3 text-center shadow-[0_0_30px_rgba(0,0,0,0.8)] relative group transition-colors">
                <div className="absolute inset-[3px] border border-dashed border-primary-crimson/15 rounded-full" />

                <div className="p-2 rounded-xl bg-primary-crimson/5 border border-primary-crimson/15 text-secondary-crimson mb-1.5 z-10">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-[9px] tracking-widest text-text-primary leading-tight z-10">
                  COLLECTIVE POWER
                </h3>
              </div>
            </motion.div>

            {/* Surrounding Nodes */}
            {nodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`absolute py-1.5 px-3 rounded-full border flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.6)] z-10 text-[11px] ${node.color}`}
                  style={{
                    top: node.y,
                    left: node.x,
                    transform: `translate(${node.offsetX}, ${node.offsetY})`,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-display font-semibold tracking-wide text-text-primary">
                    {node.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
