import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Skills = () => {
  // activeTab → currently selected tab
  //setActiveTab → tab change karne ka button
  const [activeTab, setActiveTab] = useState("frontend");

  // Marquee skills (all skills)
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "C++",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Vercel",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  // Tab based skills
  //category wise ui tabhi obj bnaya
  //“Tab ka naam hi key hoga aur us key ke andar us tab ki skills
  //Kal new tab add karna ho → bas object me ek key add krdo value ke sath obviously
  const skillsData = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    backend: ["Node.js", "MongoDB", "Express"],
    version: ["Git", "GitHub"],
    deployment: ["Vercel"],
  };

  return (
    <section id="skills" className="relative p-25">

      {/* ===== Content Wrapper ===== */}
      <div className="animate-fade-in animation-delay-600">

        {/* ===== Section Intro ===== */}
        <p className="text-sm text-muted-foreground text-center mb-6">
          Technologies I work with
        </p>

        {/* ===== Marquee ===== */}
        <div className="relative overflow-hidden mb-15 mt-10">

          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Marquee content */}
          <div className="flex animate-marquee gap-x-14">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="flex-shrink-0">
                <span className="text-lg font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Tabs ===== */}
        <div className="flex justify-center flex-wrap gap-3 mb-6">
          {Object.keys(skillsData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium
                border transition-all duration-300
                ${
                  activeTab === key
                    ? "border-primary text-primary bg-muted/40"
                    : "border-border text-muted-foreground hover:text-primary"
                }
              `}
            >
              {key}
            </button>
          ))}
        </div>

        {/* ===== Skills per active tab ===== */}
        <div className="flex justify-center flex-wrap gap-3">
          {/* skillsData[activeTab] ---->abhi konsa key choose kra hai (dynamically skillsData ki keys ko access karna) */}
          {skillsData[activeTab].map((skill, idx) => (
            <span
              key={idx}
              className="
                rounded-full
                border border-border
                bg-muted/30
                px-5 py-2
                text-sm font-medium
                text-muted-foreground
                transition-all duration-300
                hover:text-primary
                hover:border-primary/50
              "
            >
              {skill}
            </span>
          ))}
        </div>

      </div>

      {/* ===== Scroll Indicator ===== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-[10px] uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>

    </section>
  );
};
