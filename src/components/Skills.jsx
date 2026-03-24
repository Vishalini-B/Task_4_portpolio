import React from "react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "MongoDB", "Firebase"],
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "Wireframing", "Responsive Design"],
    },
  ];

  return (
    <section id="skills" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-accent font-bold uppercase tracking-widest text-sm">
            Core Capabilities
          </h4>
          <h2 className="text-4xl font-outfit font-bold">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass p-10 rounded-[2.5rem] shadow-lg border border-white dark:border-gray-800"
            >
              <h3 className="text-2xl font-outfit font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-accent rounded-full"></span>
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent hover:text-white transition-all cursor-default shadow-sm border border-transparent hover:shadow-md active:scale-95"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
