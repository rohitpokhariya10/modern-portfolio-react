import React from "react";

//named ecport kara hai sare components ko tabhi ese import krahai {}
import {Navbar} from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Skills } from "@/sections/Skills";
import { Footer } from "./layout/Footer";


const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects />
        
        <Contact />
        <Footer/>
      </main>
    </div>
  );
};

export default App;
