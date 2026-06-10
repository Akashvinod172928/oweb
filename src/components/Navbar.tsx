"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Movement", href: "#hero" },
    { name: "The Choice", href: "#choice" },
    { name: "Principles", href: "#principles" },
    { name: "Flow", href: "#flow" },
    { name: "Oulta", href: "#oulta" },
    { name: "Singularity", href: "#singularity" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Logo - Split Crimson & Indigo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="font-display font-black text-xl tracking-wider select-none">
              <span className="text-primary-crimson transition-opacity group-hover:opacity-90">IMPACT</span>
              <span className="text-secondary-indigo transition-opacity group-hover:opacity-90">ISM</span>
            </div>
            <span className="text-[9px] font-bold tracking-widest text-secondary-indigo bg-primary-indigo/10 px-2 py-0.5 rounded-full border border-primary-indigo/20">
              BY OULTA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-semibold tracking-wider uppercase text-text-secondary hover:text-text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary-indigo transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button - Primary (Indigo) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-1 px-5 py-2 rounded-full bg-primary-indigo hover:bg-secondary-indigo text-text-primary text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 shadow-sm"
            >
              <span>JOIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-primary" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-8 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-display font-medium text-text-primary hover:text-secondary-indigo transition-colors py-2 border-b border-slate-900"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="#join"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-primary-indigo hover:bg-secondary-indigo text-xs font-bold tracking-widest uppercase text-text-primary transition-colors"
              >
                JOIN THE MOVEMENT
              </a>
              <a
                href="#manifesto"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-transparent border border-primary-crimson hover:bg-primary-crimson/10 text-xs font-bold tracking-widest uppercase text-primary-crimson transition-colors"
              >
                READ THE MANIFESTO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
