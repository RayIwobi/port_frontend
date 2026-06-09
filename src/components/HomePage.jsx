import HomeSection from "./sections/HomeSection";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";

import './sections/sections.css'

import { useEffect } from "react";
import Navbar from "./Navbar";

export default function HomePage({ setActive }) {
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.section);
          }
        });
      },
      {
        rootMargin: "-80px 0px -40% 0px", // adjust for fixed navbar
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActive]);

  return (
    <>
    <Navbar/>
      <section id="home" >
        <HomeSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience" >
        <Experience />
      </section>

      <section id="tools" >
        <Tools />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <div id='registry' >
        <h6>Built by Raymond Iwobi | Powered by React</h6>
      </div>
    </>
  );
}


