import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ecommerce from "../assets/ecommerce.png";
import quizapp from "../assets/quizapp.jpg";
import movieplace from "../assets/movieplace.jpg";
import dashboard from "../assets/dashboard.jpg";
import cbt from "../assets/cbt.jpg";
import meter from "../assets/meter.jpg";
import catch1 from "../projectPages/assets/catch1.jpg";
import front from "../projectPages/assets/front.jpg";
import kobo from "../assets/kobo.jpg";
import ideavault from "../assets/ideavault.jpg";
import yarnix from "../assets/yarnix.jpg";
import authenticate from "../assets/authenticate.png";
import "./sections.css";

const projects = [
  {
    title: "Project & Team Dashboard",
    category: "Business systems",
    type: "case",
    to: "/dashboard",
    image: dashboard,
    description:
      "A collaborative workspace for projects, tasks, documents, team communication, calendars and time tracking.",
    tags: ["React", "Node.js", "MongoDB", "Realtime workflows"],
  },
  {
    title: "NediFoods E-commerce",
    category: "E-commerce",
    type: "case",
    to: "/ecommerce",
    image: ecommerce,
    description:
      "A full-stack online shopping experience connecting product discovery, customer journeys and order management.",
    tags: ["MERN", "Payments", "Commerce"],
  },
  {
    title: "Procurement & Invoice Systems",
    category: "Business systems",
    type: "concept",
    image: meter,
    description:
      "Business workflow tools for quotations, purchase orders, invoices, vendors, waybills and petty-cash tracking.",
    tags: ["Workflow automation", "Permissions", "Reporting"],
  },
  {
    title: "Inventory & Pharmacy Management",
    category: "Business systems",
    type: "concept",
    image: cbt,
    description:
      "Stock, sales, returns, profit reports and operational records for inventory-led businesses and pharmacy workflows.",
    tags: ["Inventory", "Reporting", "Data management"],
  },
  {
    title: "Custom Examination CBT",
    category: "Education",
    type: "case",
    to: "/exam_cbt",
    image: cbt,
    description:
      "A configurable computer-based testing platform for institutions, training centres and assessment programmes.",
    tags: ["Assessment", "Admin tools", "Web app"],
  },
  {
    title: "WAEC Practice Quiz",
    category: "Education",
    type: "case",
    to: "/quizapp",
    image: quizapp,
    description:
      "An interactive exam-practice experience designed to help students prepare and test their knowledge.",
    tags: ["Learning", "Quizzes", "Frontend"],
  },
  {
    title: "Kobowise",
    category: "Finance",
    type: "case",
    to: "/kobowise",
    image: kobo,
    description:
      "A fintech product concept focused on personal savings habits, goals and clearer money planning.",
    tags: ["Fintech concept", "Product design", "Web"],
  },
  {
    title: "Catchline Group",
    category: "Websites",
    type: "case",
    to: "/catchline",
    image: catch1,
    description:
      "A polished corporate web presence for a consulting and business development organisation.",
    tags: ["Corporate website", "Responsive UI"],
  },
  {
    title: "Engineering & Metering Website",
    category: "Websites",
    type: "case",
    to: "/metering",
    image: meter,
    description:
      "An engineering-focused website presenting metering and instrumentation services and information.",
    tags: ["Business website", "Responsive UI"],
  },
  {
    title: "Product Listing Experience",
    category: "E-commerce",
    type: "external",
    to: "https://product-listing-ecru-kappa.vercel.app/",
    image: front,
    description:
      "A frontend demonstration consuming an e-commerce API to display and browse product data.",
    tags: ["API integration", "Product UI"],
  },
  {
    title: "Movie Information App",
    category: "API projects",
    type: "case",
    to: "/movieapp",
    image: movieplace,
    description:
      "A movie discovery interface backed by external data, with a focus on retrieving and presenting useful details.",
    tags: ["External API", "Data display"],
  },
  {
    title: "IdeaVault",
    category: "Productivity",
    type: "case",
    to: "/ideavault",
    image: ideavault,
    description:
      "A productivity concept for capturing, organising and revisiting ideas in one place.",
    tags: ["Productivity", "CRUD workflows"],
  },
 
];
const filters = [
  "All work",
  "Business systems",
  "E-commerce",
  "Education",
  "Websites",
  "API projects",
  "Finance",
  "Productivity",
  "Social",
];

function ProjectCard({ project, index }) {
  const content = (
    <>
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
        />
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="project-open">↗</span>
      </div>
      <div className="project-card-copy">
        <div className="project-category">{project.category}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
  if (project.to && project.type === "case")
    return (
      <Link className="project-card" to={project.to} key={project.title}>
        {content}
      </Link>
    );
  if (project.to && project.type === "external")
    return (
      <a
        className="project-card"
        href={project.to}
        target="_blank"
        rel="noreferrer"
        key={project.title}
      >
        {content}
      </a>
    );
  return (
    <article className="project-card project-card-static" key={project.title}>
      {content}
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All work");
  const visibleProjects = useMemo(
    () =>
      filter === "All work"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );
  return (
    <div className="section-wrap projectsContainer">
      <div className="section-kicker">SELECTED WORK & PRODUCT BUILDS</div>
      <div className="projects-heading-row">
        <h2 className="section-heading">
          Real problems.
          <br />
          <span>Practical digital solutions.</span>
        </h2>
        <p className="section-subtitle">
          A selection of client work, product builds and technical explorations
          across business operations, commerce, education and everyday
          productivity.
        </p>
      </div>
      <div className="project-filters" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            className={filter === item ? "filter-active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
      <p className="project-note">
        Some projects are client or private builds, so live demos or source code
        may not be publicly available. Case-study links open where a dedicated
        project page exists.
      </p>
    </div>
  );
}
