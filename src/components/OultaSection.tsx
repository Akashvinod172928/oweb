"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Globe, Users, Building } from "lucide-react";

export default function OultaSection() {
  const features = [
    {
      id: "citizens",
      title: "Citizens",
      desc: "Sovereign identity, action logging, and receiving Universal Basic Impact.",
      icon: User,
      pos: "lg:col-start-1 lg:row-start-1",
      color: "border-white/5 hover:border-primary-crimson/30",
      iconColor: "text-secondary-crimson",
    },
    {
      id: "communities",
      title: "Communities",
      desc: "Local collective decision-making, direct collaboration, and project hosting.",
      icon: Users,
      pos: "lg:col-start-1 lg:row-start-3",
      color: "border-white/5 hover:border-primary-crimson/30",
      iconColor: "text-secondary-crimson",
    },
    {
      id: "ngos",
      title: "NGOs",
      desc: "Action validation, campaign management, and impact-based resource distribution.",
      icon: Globe,
      pos: "lg:col-start-3 lg:row-start-1",
      color: "border-white/5 hover:border-primary-indigo/30",
      iconColor: "text-secondary-indigo",
    },
    {
      id: "companies",
      title: "Companies",
      desc: "Direct funding of impact pools, transparency logs, and verified ESG integration.",
      icon: Building,
      pos: "lg:col-start-3 lg:row-start-3",
      color: "border-white/5 hover:border-primary-indigo/30",
      iconColor: "text-secondary-indigo",
    },
  ];

  return (
    <section id="oulta" className="relative py-28 md:py-44 bg-background overflow-hidden">
      {/* Soft backlighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-indigo/2 blur-[140px] rounded-full pointer-events-none" />

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
              THE ENGINE
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-text-primary tracking-tight leading-none mb-6"
          >
            The Infrastructure Behind Impactism
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-text-secondary leading-relaxed text-sm md:text-base"
          >
            Ideas need infrastructure. Oulta connects citizens, NGOs, communities, and companies into a single platform for creating verified real-world impact.
          </motion.p>
        </div>

        {/* Central Hub visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-12 lg:gap-8 items-center relative">
            {/* SVG Connecting Lines - Elegant & Thin */}
            <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
              <svg className="w-full h-full" fill="none animate-pulse-slow">
                <path d="M 280 100 Q 380 150 420 220" stroke="#C62828" strokeWidth="1" opacity="0.3" />
                <path d="M 280 440 Q 380 390 420 320" stroke="#C62828" strokeWidth="1" opacity="0.3" />
                <path d="M 540 220 Q 580 150 680 100" stroke="#283593" strokeWidth="1" opacity="0.3" />
                <path d="M 540 320 Q 580 390 680 440" stroke="#283593" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>

            {/* Hub: Oulta Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-start-2 lg:row-start-2 flex flex-col items-center justify-center relative z-10 my-4 lg:my-0"
            >
              {/* Very soft glow circles */}
              <div className="absolute w-36 h-36 bg-primary-indigo/8 rounded-full blur-xl pointer-events-none" />
              <div className="absolute w-24 h-24 bg-primary-crimson/3 rounded-full blur-lg pointer-events-none" />

              {/* Central Glowing Disk */}
              <div className="w-32 h-32 rounded-full bg-surface border border-white/5 flex flex-col items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.8)] p-4 text-center">
                <span className="text-[9px] font-bold tracking-widest text-text-secondary uppercase mb-1">
                  PLATFORM
                </span>
                <span className="font-display font-black text-xl tracking-wider text-text-primary">
                  OULTA
                </span>
                <span className="text-[8px] text-text-secondary/50 mt-1 font-medium">
                  ENGINE
                </span>
              </div>
            </motion.div>

            {/* Surround feature elements */}
            {features.map((feat, index) => {
              const IconComponent = feat.icon;

              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${feat.pos} relative rounded-2xl bg-surface/30 border ${feat.color} p-6 transition-all duration-300 group cursor-pointer z-10`}
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <IconComponent className={`w-5 h-5 ${feat.iconColor} stroke-[1.5]`} />
                    <h3 className="font-display font-bold text-base text-text-primary group-hover:text-text-primary/95 transition-colors">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
