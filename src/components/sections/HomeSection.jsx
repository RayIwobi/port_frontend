import React from "react";
import "./sections.css";
import portrait from "../assets/richi.jpg";

export default function HomeSection() {
  return (
    <div className="hero section-wrap">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" /> SOFTWARE DEVELOPER · IT PROFESSIONAL
        </div>
        <h1>
          I turn complex ideas
          <br />
          into <span>useful digital</span>
          <br />
          <span>experiences.</span>
        </h1>
        <p className="hero-intro">
          I’m Raymond Iwobi — a full-stack and mobile developer combining modern
          software engineering with deep IT operations experience to build
          products that solve real business problems.
        </p>
        <div className="hero-actions">
          <a
            className="button-primary"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore my work <span>↘</span>
          </a>
          <a className="button-secondary" href="mailto:rayicon@gmail.com">
            Contact me <span>↗</span>
          </a>
        </div>
        <div className="hero-proof">
          <div>
            <strong>Full-stack</strong>
            <span>Web applications</span>
          </div>
          <div>
            <strong>Mobile</strong>
            <span>React Native</span>
          </div>
          <div>
            <strong>15+ years</strong>
            <span>IT experience</span>
          </div>
        </div>
      </div>
      <div
        className="hero-visual hero-portrait-wrap"
        aria-label="Portrait of Raymond Iwobi, software developer"
      >
        <div className="portrait-glow" />
        <div className="portrait-frame">
          <img
            className="hero-portrait"
            src={portrait}
            alt="Raymond Iwobi, full-stack software developer"
          />
          <div className="portrait-overlay" />
          <div className="portrait-label">
            <span className="status-dot" />
            <div>
              <strong>Raymond Iwobi</strong>
              <small>SOFTWARE ENGINEER · TECHLOD</small>
            </div>
          </div>
        </div>
        <div className="floating-chip chip-code">
          <span>⌘</span> Full-stack
        </div>
        <div className="floating-chip chip-cloud">
          <span>☁</span> Cloud-ready
        </div>
        <div className="floating-chip chip-stack">
          <span>↗</span> Web · Mobile · APIs
        </div>
        <div className="visual-caption">
          <span className="status-dot" /> Building useful digital products
        </div>
      </div>
    </div>
  );
}
