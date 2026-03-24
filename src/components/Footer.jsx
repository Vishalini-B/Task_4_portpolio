import React from "react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-gray-950 border-t border-slate-100 dark:border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-outfit font-bold tracking-tight text-accent">
            Vishalini<span className="text-slate-900 dark:text-white">.B</span>
          </div>

          <div className="flex gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#home" className="hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-accent transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} — Designed & Built by Vishalini B
          </div>
        </div>
      </div>
    </footer>
  );
};
