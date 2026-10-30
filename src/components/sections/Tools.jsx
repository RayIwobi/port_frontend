import React from "react";
import "./sections.css";

const groups = [
  {
    title: "Frontend engineering",
    subtitle: "Interfaces people enjoy using",
    skills: [
      "React",
      "JavaScript",
      "HTML5 & CSS3",
      "Responsive UI",
      "React Router",
      "State management",
      "Accessibility basics",
    ],
  },
  {
    title: "Backend engineering",
    subtitle: "Reliable logic and integrations",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication & roles",
      "Third-party APIs",
      "File & media handling",
      "Payment integrations",
    ],
  },
  {
    title: "Data & persistence",
    subtitle: "Structured, useful information",
    skills: [
      "MongoDB",
      "Mongoose",
      "SQL fundamentals",
      "Schema design",
      "CRUD workflows",
      "Data validation",
    ],
  },
  {
    title: "Mobile development",
    subtitle: "Mobile-first product thinking",
    skills: [
      "React Native",
      "Cross-platform UI",
      "API integration",
      "Navigation patterns",
      "Device-friendly layouts",
    ],
  },
  {
    title: "Cloud & delivery",
    subtitle: "From local development to production",
    skills: [
      "Vercel",
      "Render",
      "MongoDB Atlas",
      "AWS fundamentals",
      "Git & GitHub",
      "CI/CD workflows",
      "Environment configuration",
    ],
  },
  {
    title: "Testing & quality",
    subtitle: "Confidence through iteration",
    skills: [
      "Postman API testing",
      "Debugging",
      "Integration checks",
      "Responsive QA",
      "Performance checks",
      "Error handling",
    ],
  },
  {
    title: "Tools & collaboration",
    subtitle: "A practical delivery toolkit",
    skills: [
      "VS Code",
      "GitHub",
      "Figma handoff",
      "Agile collaboration",
      "Technical documentation",
      "AI-assisted workflows",
    ],
  },
];

export default function Tools() {
  return (
    <div className="section-wrap skills-section">
      <div className="section-kicker">MY TOOLKIT</div>
      <h2 className="section-heading">
        Skills that span <span>the stack.</span>
      </h2>
      <p className="section-subtitle">
        I choose tools to fit the product, keep the implementation maintainable
        and make sure the finished experience works beyond a developer’s
        machine.
      </p>
      <div className="skills-grid">
        {groups.map((group, i) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-top">
              <span>0{i + 1}</span>
              <span className="skill-symbol">
                {["◫", "⌘", "▤", "▯", "☁", "✓", "✳"][i]}
              </span>
            </div>
            <h3>{group.title}</h3>
            <p>{group.subtitle}</p>
            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
