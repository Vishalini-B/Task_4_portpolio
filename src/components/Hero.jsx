import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe,
  Database,
  Code2,
} from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content Side */}
          <div className="w-full lg:w-3/5 space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-bold animate-fade-in tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                OPEN TO OPPORTUNITIES
              </div>

              <h1 className="text-5xl md:text-8xl font-outfit font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                Designing the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-500 to-blue-500">
                  Digital Future.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-light">
                Hi, I'm{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Vishalini B
                </span>
                . A Chennai-based architect of modern web experiences, blending{" "}
                <span className="text-accent italic font-medium">
                  elegant design
                </span>{" "}
                with{" "}
                <span className="text-accent italic font-medium">
                  robust performance
                </span>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#portfolio"
                className="group bg-accent hover:bg-accent-dark text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 active:scale-95"
              >
                Explore Work
                <ArrowRight
                  size={22}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#contact"
                className="px-10 py-5 rounded-2xl font-bold transition-all border-2 border-slate-200 dark:border-gray-800 hover:border-accent hover:text-accent flex items-center gap-2 active:scale-95"
              >
                Let's Talk
              </a>
            </div>

            {/* Feature Badges */}
            <div className="pt-8 border-t border-slate-200 dark:border-gray-800 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { label: "Full Stack Dev", icon: <Code2 size={18} /> },
                { label: "UI/UX Specialist", icon: <Smartphone size={18} /> },
                { label: "Backend Architect", icon: <Database size={18} /> },
                { label: "Responsive Expert", icon: <Globe size={18} /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="text-accent transform group-hover:rotate-12 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Side */}
          <div className="w-full lg:w-2/5 relative order-1 lg:order-2">
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square">
              {/* Complex Decorative Ring */}
              <div className="absolute inset-0 -m-8 border-[1px] border-dashed border-accent/30 rounded-full animate-[spin_20s_linear_infinite] -z-10"></div>
              <div className="absolute inset-0 -m-16 border-[1px] border-accent/10 rounded-full -z-10"></div>

              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-4 border-white dark:border-gray-900 group">
                <img
                  src="https://i.postimg.cc/mrwSKJg2/IMG-20260218-WA0016-jpg.jpg"
                  alt="Vishalini B Portrait"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Performance Card */}
              <div className="absolute -bottom-8 -left-8 md:-left-12 glass p-5 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-800 min-w-[160px] animate-bounce-slow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-xs font-black tracking-widest uppercase text-slate-400">
                    Status
                  </span>
                </div>
                <div className="text-2xl font-bold font-outfit">
                  Project 100%
                </div>
                <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold">
                  Successfully Delivered
                </p>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-6 -right-6 md:-right-10 bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-gray-800 text-center animate-float">
                <div className="text-4xl font-black text-accent font-outfit leading-none">
                  B.Tech
                </div>
                <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mt-2">
                  IT Graduate '27
                </div>
              </div>

              {/* Decorative Floating Dots */}
              <div className="absolute top-1/2 -right-16 grid grid-cols-3 gap-2 opacity-30">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(2deg);
          }
          50% {
            transform: translateY(-10px) rotate(-2deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
