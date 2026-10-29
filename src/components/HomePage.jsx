import { useEffect } from "react";
import Navbar from "./Navbar";
import HomeSection from "./sections/HomeSection";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import "./sections/sections.css";

function Services() {
  const items = [
    [
      "01",
      "Web applications",
      "Responsive websites, customer portals, dashboards and business platforms designed around real workflows.",
    ],
    [
      "02",
      "Backend & APIs",
      "REST APIs, authentication, database design, integrations, permissions and dependable application logic.",
    ],
    [
      "03",
      "Mobile experiences",
      "React Native app development and mobile-first experiences that make everyday tasks easier.",
    ],
    [
      "04",
      "Cloud & deployment",
      "Production deployment, environment configuration, database hosting, CI/CD workflows and troubleshooting.",
    ],
    [
      "05",
      "Business systems",
      "Inventory, pharmacy, procurement, invoicing, project collaboration and operations management tools.",
    ],
    [
      "06",
      "Testing & improvement",
      "API checks, debugging, responsive QA, performance improvements and iterative product refinement.",
    ],
  ];
  return (
    <section className="section-wrap" id="services" data-section="services">
      <div className="section-kicker">HOW I CAN HELP</div>
      <h2 className="section-heading">
        From the first idea
        <br />
        <span>to a product that works.</span>
      </h2>
      <div className="services-grid">
        {items.map(([num, title, body]) => (
          <article className="service-card" key={num}>
            <span className="service-number">{num}</span>
            <h3>{title}</h3>
            <p>{body}</p>
            <span className="service-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    [
      "01",
      "Understand",
      "Clarify the problem, people, business rules and definition of success.",
    ],
    [
      "02",
      "Plan & design",
      "Map the experience, data, architecture and delivery milestones.",
    ],
    [
      "03",
      "Build & test",
      "Develop in practical iterations, validate flows and resolve edge cases.",
    ],
    [
      "04",
      "Launch & support",
      "Deploy, monitor, improve and document the product for continued growth.",
    ],
  ];
  return (
    <section className="section-wrap process-section">
      <div className="section-kicker">A PRACTICAL APPROACH</div>
      <h2 className="section-heading">
        Good software is <span>built with purpose.</span>
      </h2>
      <div className="process-grid">
        {steps.map(([n, t, d]) => (
          <div className="process-step" key={n}>
            <span>{n}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            document
              .querySelectorAll(".site-nav button")
              .forEach((button) =>
                button.classList.toggle(
                  "nav-active",
                  button.textContent.toLowerCase() ===
                    entry.target.dataset.section ||
                    (entry.target.dataset.section === "skills" &&
                      button.textContent === "Skills"),
                ),
              );
        }),
      { rootMargin: "-100px 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <main className="page-content">
        <section id="home" data-section="home">
          <HomeSection />
        </section>
        <section id="about" data-section="about">
          <About />
        </section>
        <Services />
        <section id="projects" data-section="projects">
          <Projects />
        </section>
        <section id="skills" data-section="skills">
          <Tools />
        </section>
        <Process />
        <section id="experience" data-section="experience">
          <Experience />
        </section>
        <section id="contact" data-section="contact">
          <Contact />
        </section>
      </main>
      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          RI<span>.</span>
        </a>
        <p>Thoughtful engineering. Useful digital products.</p>
        <span>© {new Date().getFullYear()} Raymond Iwobi</span>
      </footer>
    </div>
  );
}
