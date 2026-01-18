// Icons import ho rahe hain lucide-react se (SVG icons as React components)
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

// Highlights data → Right side cards ke liye (icon + title + description)
const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    // section tag → ek logical block of content
    // id="about" → navbar ke #about link se yahin scroll hoga
    <section id="about" className="py-29 relative overflow-hidden">
      
      {/* 
        container → content ko center me rakhta hai
        mx-auto → left-right auto margin
        px-6 → horizontal padding
      */}
      <div className="container mx-auto px-6 relative z-10">

        {/* 
          grid layout:
          - mobile: 1 column (default)
          - lg screen: 2 columns
        */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-8">

            {/* Small heading (About Me) */}
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              {/* span inline hota hai isliye line automatic break hoti hai width ke hisaab se */}
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            {/* About description paragraphs */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Hi, I'm Rohit Pokhariya, a final-year B.Tech Computer Science
                student with a strong interest in frontend development. Over the
                past year, I’ve been building real-world projects using React and
                modern frontend technologies, focusing on clean UI, performance,
                and usability.
              </p>

              <p>
                I’m actively looking for opportunities where I can grow as a
                frontend developer, contribute to meaningful products, and learn
                from experienced engineers. I enjoy writing clean, maintainable
                code and creating user interfaces that feel smooth, intuitive,
                and responsive.
              </p>

              <p>
                Outside of development, I like exploring new frontend tools,
                improving my technical skills, and staying updated with modern
                web technologies.
              </p>
            </div>

           
          </div>
          

          {/* ================= RIGHT COLUMN (HIGHLIGHTS) ================= */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* 
              map() → highlights array ke har object se ek card bana rahe hain
            */}
           
            {highlights.map((item, idx) => (
              <div
                key={idx} // React ko batata hai kaunsa item unique hai
                className="glass p-6 rounded-2xl animate-fade-in"
                // har card ka animation thoda delay se start ho
                style={ { animationDelay:`${(idx + 1) * 200}ms `}}
              >
                {/* Icon container */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  {/* Dynamic icon component */}
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Card title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Card description */}
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
         {/* Mission statement card */}
           <div className="flex items-center justify-center ">
             <div className="mt-20 glass rounded-2xl p-8 glow-border animate-fade-in animation-delay-300  max-h-2x max-w-3xl">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful products that users love to
                use and developers love to maintain."
              </p>
            </div>
           </div>
      </div>
    </section>
  );
};
