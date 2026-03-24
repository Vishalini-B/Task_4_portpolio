import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* Background blobs for visual flair inspired by the reference */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="blob bg-accent w-[500px] h-[500px] -top-40 -left-40 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>

        <div
          className="blob bg-blue-400 w-[400px] h-[400px] bottom-0 -right-20 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
