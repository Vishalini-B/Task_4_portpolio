import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Ayurvedic Hospital Portal",
      description:
        "A comprehensive Patient Management System built for workflow automation, record tracking, and secure data visualization.",
      tags: ["React", "MongoDB", "Node.js", "Tailwind"],
      image: "https://i.postimg.cc/65tCxzFV/Screenshot-2025-09-17-183040.png",
    },
    {
      title: "Musify Application",
      description:
        "An elegant music streaming interface with custom library management, real-time player controls, and cloud integration.",
      tags: ["React JS", "Firebase", "CSS3"],
      image: "https://i.postimg.cc/J4Y0Yq8B/image.png",
    },
  ];

  return (
    <section id="portfolio" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="space-y-2">
            <h4 className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">
              Portfolio
            </h4>
            <h2 className="text-3xl md:text-4xl font-outfit font-extrabold">
              Creative Work
            </h2>
          </div>
          <div className="text-slate-500 max-w-sm text-sm font-light leading-relaxed">
            A selection of projects where I've blended{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              problem-solving
            </span>{" "}
            with refined visual aesthetics.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white dark:bg-gray-900/40 rounded-[2rem] border border-slate-100 dark:border-gray-800 transition-all hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none overflow-hidden"
            >
              {/* Image Showcase */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center gap-4">
                  <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-lg">
                    <ExternalLink size={18} />
                  </button>
                  <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-lg">
                    <Github size={18} />
                  </button>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] uppercase font-black tracking-wider bg-slate-50 dark:bg-gray-800 text-slate-400 dark:text-slate-500 px-2 py-0.5 rounded-full border border-slate-100 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-outfit font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-50 dark:border-gray-800">
                  <button className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-[10px] group/btn w-fit">
                    Case Study{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
