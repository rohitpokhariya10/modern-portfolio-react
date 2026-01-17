import { Download } from "lucide-react";
// className=""--> ye fallback hai taki props me className nhi aye tuh app crash na ho
export const AnimatedBorderButton = ({ children , className="" }) => {
    console.log(children);
    console.log(className);//extra className receive kar rhe hai jo props se arhi hai <AnimatedBorderButton> es component se
    
    
  return (
    <button
    // .group parent element hota hai Tailwind me ye class lagayi jaati hai taaki child elements parent ke hover pe react karein
    className={`
        relative bg-transparent border border-border 
    text-foreground hover:border-primary/50 transition-all 
    duration-1000 focus:outline-none focus-visible:ring-2 
    focus-visible:ring-primary focus-visible:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed group 
    px-8 py-4 text-lg font-medium rounded-full overflow-visible 

    animated-border
    // yha pe apply kar rhe hai className jo props me receive kara hai
     ${className}`}  
    >
        {/* animated-border--> index.css me define hai */}
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      {/* span ke andar download icon and text donu hai tabhi humne span bnake flex diya taki vo donu ek line me jaye */}
   
        {children}
     
    </button>
  );
};