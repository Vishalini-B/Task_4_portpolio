import React from "react";
import { User, Layout, Code, Server, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden scroll-mt-24">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-gray-800 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-5/12 relative">
            <div className="relative group">
              {/* Creative Image Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-blue-500 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900 aspect-square">
                <img
                  src="https://i.postimg.cc/pXF43Vb0/image.png"
                  alt="About Vishalini"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Experience Stat */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-gray-700 animate-float">
                <div className="text-accent">
                  <Sparkles size={32} />
                </div>
                <div className="mt-2">
                  <span className="block text-2xl font-bold font-outfit">
                    Creative
                  </span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">
                    Developer
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 space-y-8">
            <div className="space-y-4">
              <h4 className="text-accent font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent"></span> Discovery
              </h4>

              <h2 className="text-4xl md:text-6xl font-outfit font-extrabold text-slate-900 dark:text-white leading-tight">
                Crafting Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
                  Excellence.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 dark:text-slate-400">
              <p className="text-xl leading-relaxed font-light">
                Based in Chennai, I specialize in bridging the gap between{" "}
                <span className="text-slate-900 dark:text-white font-medium">
                  high-end design
                </span>{" "}
                and{" "}
                <span className="text-slate-900 dark:text-white font-medium">
                  scalable development
                </span>
                . My approach is rooted in creating intuitive user journeys that
                leave a lasting impression.
              </p>

              <p className="text-lg leading-relaxed">
                Whether it's architecting a complex Patient Management System for
                Ayurvedic hospitals or building interactive music applications
                like "Musify," I focus on{" "}
                <span className="text-accent font-semibold">
                  performance, accessibility, and elegance
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {[
                {
                  icon: <Layout className="text-accent" />,
                  title: "UI/UX Design",
                  desc: "Figma-centric design systems.",
                },
                {
                  icon: <Code className="text-accent" />,
                  title: "React Mastery",
                  desc: "Efficient, modular frontend logic.",
                },
                {
                  icon: <Server className="text-accent" />,
                  title: "Full Stack",
                  desc: "Node.js & MongoDB integration.",
                },
                {
                  icon: <User className="text-accent" />,
                  title: "Collaboration",
                  desc: "Team-oriented development flow.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-3xl bg-slate-50 dark:bg-gray-900/50 border border-transparent hover:border-accent/20 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-sm w-fit mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>

                  <h5 className="font-bold text-slate-900 dark:text-white text-lg">
                    {item.title}
                  </h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
