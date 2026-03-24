import React from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Robowaves",
      parent: "Unit of Test Yantra Software Solutions (India) Pvt. Ltd.",
      role: "Web Development Intern",
      period: "Recent Internship",
      description: [
        "Developed web applications using HTML5, CSS3, and JavaScript.",
        "Implemented responsive designs for multi-device compatibility.",
        "Built interactive components using React JS.",
        "Integrated Firebase for backend and data handling.",
        'Contributed to "Musify," a web-based music application.',
      ],
    },
    {
      company: "Retech Solutions Pvt. Ltd.",
      role: "UI/UX Design Intern",
      period: "Design Training",
      description: [
        "Gained hands-on experience in Figma and UI/UX design principles.",
        "Assisted in designing an e-commerce mobile app interface.",
        "Improved skills in layout, usability, and modern UI design.",
        "Created high-fidelity wireframes and interactive prototypes.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 bg-slate-50/50 dark:bg-gray-950 scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h4 className="text-accent font-black uppercase tracking-[0.3em] text-xs">
            Professional Path
          </h4>
          <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-slate-900 dark:text-white">
            Work Experience
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 relative">
          {/* Timeline center line - visible only on md+ */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 dark:via-gray-800 to-transparent -translate-x-px hidden md:block"></div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row gap-8 items-start ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-24px] md:left-1/2 w-4 h-4 rounded-full bg-accent ring-8 ring-accent/10 border-4 border-slate-50 dark:border-gray-950 -translate-x-1/2 z-10 hidden md:block"></div>

              <div className="w-full md:w-[45%]">
                <div className="group glass p-10 rounded-[2.5rem] shadow-xl border border-white dark:border-gray-900 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                    <div className="bg-accent/10 p-4 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Briefcase size={28} strokeWidth={1.5} />
                    </div>

                    <div className="flex items-center gap-2 bg-slate-100 dark:bg-gray-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <Calendar size={12} /> {exp.period}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h3 className="text-3xl font-outfit font-extrabold text-slate-900 dark:text-white">
                      {exp.company}
                    </h3>

                    {exp.parent && (
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {exp.parent}
                      </p>
                    )}

                    <p className="text-accent font-bold text-lg">{exp.role}</p>
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
