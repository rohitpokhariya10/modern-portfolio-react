import { ArrowRight, ChevronDown, Download, Github, GithubIcon, Linkedin } from "lucide-react";
import { Button } from "../Components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Hero = () => {
    const skills = [
        "HTML",
        "Css",
        "Javascript",
        "C++",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",

        "MongoDB",
        "Vercel",
        "Tailwind CSS",
        "Git",

    ];

    return (
        //   Radha Radha 
        <section className="relative  min-h-screen flex items-center overflow-hidden">

            <div className="absolute inset-0">
                <img src="/projects/hero-bg.jpg" alt="Hero img" className="w-full h-full object-cover opacity-40" />
            </div>
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            {/* Green Dots */}
            <div className="green-dots absolute inset-0 overflow-hidden pointer-events-none">
                {
                    // Ye Spread Operator + Array constructor ka combo hai
                    //Iska kaam hai “empty array ko usable array banana
                    //Ye JavaScript ka built-in constructor function hai
                    Array.from({ length: 30 }).map(function (elem, index) {
                        return <div key={index} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                            // 2 curley braces means
                            //1 {}--> jsx expression
                            //2{} -->style property ko object ki trh likha jata hai key-value pair ki form me tab
                            style={{
                                backgroundColor: "#20B2A6",
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                                //  animation kitne der baad start hogi
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        > </div>
                    })
                }
            </div>
            {/* content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                {/* lagrge screen me 2 column banenge */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* left content */}
                    {/* flex flex-col gap-5 ----> space-y-8 */}
                    <div className="space-y-8">
                        <div className="animate-fade-in ">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                Softare Engineer . React Specialist
                            </span>
                        </div>
                        {/* Headline */}
                        <div className="space-y-8">
                            {/* space-y-8 --> se h1 and p tag ke beech me gap ajayega vertically */}
                            {/* animation-delay-100---> jo bhi animation lagi hai 100msbaad start hogi */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    precision.
                                </span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Rohit Pokhariya — a software engineer specializing in
                                React, Next.js, and TypeScript. I build scalable, performant web
                                applications that users love.
                            </p>

                        </div>

                        {/* CTA ---> Call To Action*/}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            {/* Download cv button */}
                            <AnimatedBorderButton className="  flex items-center justify-center gap-2">
                                {/*  className="  flex items-center justify-center gap-2"--> ye props ki form me jaa rhi hai component me */}
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>

                        </div>
                        {/* social links */}
                        {/* animate-fade-in --> ye animation bna rkhi hai idex.css me */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me: </span>
                            {
                                [
                                    { icon: <Github />, href: "" },
                                    { icon: <Linkedin />, href: "" }
                                ].map(function (social, index) {
                                    return <a
                                        key={index}
                                        href={social.href}
                                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                    >

                                        {social.icon}

                                    </a>
                                })
                            }
                        </div>

                    </div>


                    {/* Right  Content*/}
                    <div>
                        {/* Profile Image */}
                        {/* max-w-md = is element ki width md se zyada kabhi mat hone do*/}
                        {/* max-w-md = 28rem ≈ 448px */}
                        <div className="relative animate-fade-in max-w-md">
                            {/* GLOW EFFECT IN BORDER OF PROFILE PICTURE */}
                            <div
                                className="absolute inset-0 
                                rounded-3xl bg-gradient-to-br 
                                from-primary/30 via-transparent 
                                to-primary/10 blur-2xl animate-pulse"
                            />

                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/projects/profile-photo.jpg" alt="profile image"
                                    className="w-full  object-cover rounded-2xl" />

                                {/* Flowting badge */}
                                <div className="absolute -bottom-4 -right-5 glass rounded-xl px-4 py-3 animate-float z-20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium" >Available for work</span>
                                    </div>
                                </div>
                                {/* stats badge */}
                                <div className="absolute  -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 ">
                                    <div className="text-2xl font-bold text-primary">1+</div>
                                    <div className="text-xs text-muted-foreground">years Exp.

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/* skills section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden">
                        <div
                            className="absolute left-0 top-0 bottom-0 w-32
                        bg-gradient-to-r from-background to-transparent z-10"
                        />
                        <div className="flex animate-marquee">
                            {/* 👉 skills list ko 2 baar jod ke (duplicate karke), har skill ko UI me show kar raha hai
                            Usually ye horizontal scrolling / marquee effect ke liye hota hai. */}
                            {/* ... spread operator lagate hai tuh vo list ke har item ko alag alag krke dikhata hai tab gap aajata hai */}
                            {/* ... data ko phelane ka kaam kr rha hai aray me */}
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>




            </div>
            {/* Scroll Down effect */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 
                animate-fade-in animation-delay-800"
            >
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>



        </section>

    );
}