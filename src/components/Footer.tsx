import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Movement", href: "#hero" },
    { name: "The Choice", href: "#choice" },
    { name: "Principles", href: "#principles" },
    { name: "Flow", href: "#flow" },
    { name: "Oulta", href: "#oulta" },
    { name: "Singularity", href: "#singularity" },
  ];

  return (
    <footer className="relative bg-background border-t border-white/5 pt-12 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo and Intro - Extremely Minimal */}
          <div className="flex items-center gap-2">
            <div className="font-display font-black text-xl tracking-wider select-none">
              <span className="text-primary-crimson">IMPACT</span>
              <span className="text-secondary-indigo">ISM</span>
            </div>
            <span className="text-[9px] font-bold tracking-widest text-primary-indigo bg-primary-indigo/10 px-2 py-0.5 rounded-full border border-primary-indigo/20">
              BY OULTA
            </span>
          </div>

          {/* Simple Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar - Thin separator */}
        <div className="border-t border-slate-900/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-wider text-text-secondary/50 uppercase">
            &copy; {currentYear} Impactism. Supported by Oulta.
          </p>
          <p className="text-[10px] tracking-wider text-text-secondary/50 uppercase flex items-center gap-2">
            <span>Humanity &amp; Technology</span>
            <span className="w-1 h-1 bg-primary-crimson rounded-full" />
            <span>Coexistence</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
