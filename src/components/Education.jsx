import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16 space-y-4">
        <h4 className="text-accent font-black uppercase tracking-[0.3em] text-xs">
          Foundation
        </h4>
        <h2 className="text-4xl md:text-5xl font-outfit font-extrabold">
          Academic Journey
        </h2>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="relative group">
          {/* Decorative background blur */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

          <div className="relative glass p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white dark:border-gray-800 overflow-hidden">
            {/* Background Icon */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
              <GraduationCap size={400} />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10 text-center lg:text-left">
              <div className="relative">
                <div className="bg-accent/10 p-8 rounded-[2.5rem] text-accent ring-8 ring-accent/5">
                  <GraduationCap size={64} strokeWidth={1.5} />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
                  <Award size={24} />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Currently Pursuing
                  </div>

                  <h3 className="text-3xl md:text-5xl font-outfit font-extrabold text-slate-900 dark:text-white">
                    B.Tech in Information Technology
                  </h3>

                  <p className="text-xl text-slate-500 dark:text-slate-400 mt-2 font-medium">
                    Anna University Affiliate Institute
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-accent">
                      <Calendar size={20} />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
                        Duration
                      </span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        2023 - 2027
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-accent">
                      <MapPin size={20} />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
                        Location
                      </span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        Chennai, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end glass */}
        </div>
      </div>
    </section>
  );
};
