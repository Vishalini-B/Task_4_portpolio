import React from "react";
import { Palette, Globe, Layers, ArrowUpRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Palette size={40} strokeWidth={1.5} />,
      title: "UI/UX Design",
      desc: "Creating visually stunning and user-centric designs that prioritize usability and modern aesthetics.",
      features: ["Figma-based design", "Wireframes + Prototypes", "Mobile-first layouts"],
    },
    {
      icon: <Globe size={40} strokeWidth={1.5} />,
      title: "Web Design",
      desc: "Elegant, high-performance websites built with clean code and professional aesthetics.",
      features: ["Responsive UI", "Performance optimization", "Tailwind CSS experts"],
    },
    {
      icon: <Layers size={40} strokeWidth={1.5} />,
      title: "React Development",
      desc: "Building scalable and interactive web applications using the latest React features.",
      features: ["Component architecture", "State management", "Modern frontend flow"],
    },
  ];

  return (
    <section className="py-32 bg-slate-900 dark:bg-black text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h4 className="text-accent font-black uppercase tracking-[0.3em] text-xs">
              Solutions
            </h4>
            <h2 className="text-4xl md:text-6xl font-outfit font-extrabold">
              My Specialties
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed">
            Delivering high-end digital solutions that combine creative design with powerful engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-gray-800/30 backdrop-blur-xl p-10 rounded-[3rem] border border-gray-800 hover:border-accent/40 transition-all duration-500 relative flex flex-col"
            >
              <div className="absolute top-8 right-8 text-gray-700 group-hover:text-accent transition-colors">
                <ArrowUpRight size={32} />
              </div>

              <div className="bg-gray-800 p-6 rounded-[2rem] w-fit mb-10 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                {service.icon}
              </div>

              <h3 className="text-3xl font-outfit font-extrabold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-8 font-light leading-relaxed group-hover:text-gray-200 transition-colors">
                {service.desc}
              </p>

              <ul className="mt-auto space-y-4 pt-8 border-t border-gray-800">
                {service.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-center gap-3 text-sm font-bold tracking-wide text-gray-500 group-hover:text-white transition-all"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
