import { ArrowRight, Download, Github, GithubIcon, Linkedin } from "lucide-react";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Hero = () => {

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
                                {/* redirect to contact page */}
                                <a href="#contact"
                                    className="flex items-center gap-2">

                                    Contact Me <ArrowRight className="w-5 h-5" />
                                </a>
                            </Button>
                            {/* Download cv button */}
                            <a
                                href="/Rohit_Pokhariya_CV.pdf"
                                //custom file name of a resume
                                download="Rohit_Pokhariya_Resume.pdf"
                            >
                                <AnimatedBorderButton className="flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download CV
                                </AnimatedBorderButton>
                            </a>


                        </div>
                        {/* social links */}
                        {/* animate-fade-in --> ye animation bna rkhi hai idex.css me */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me: </span>
                            {
                                [
                                    { icon: <Github />, href: "https://github.com/rohitpokhariya10" },
                                    { icon: <Linkedin />, href: "https://www.linkedin.com/in/rohit-singh-pokhariya-24742a220/" }
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
            </div>
        </section>

    );
}