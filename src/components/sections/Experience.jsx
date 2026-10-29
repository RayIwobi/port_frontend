import React from 'react';
import './sections.css';

const roles = [
  { period: 'JAN 2024 — PRESENT', role: 'Full-Stack Developer', company: 'NediFoods Limited · UK / Remote', details: ['Develop and maintain e-commerce features across frontend, backend and data workflows.', 'Work with API integrations, authentication, payment-related flows and production deployments.', 'Collaborate remotely to improve reliability, maintainability and the customer experience.'] },
  { period: 'MAY 2023 — DEC 2023', role: 'Independent Software Consultant', company: 'Self-employed', details: ['Built and improved web applications for business and customer-facing use cases.', 'Delivered responsive React interfaces, REST API integrations and backend features.', 'Handled deployment configuration, debugging, QA and third-party service integrations.'] },
  { period: 'AUG 2020 — APR 2023', role: 'Junior Web Developer', company: 'Techlod Nig · Nigeria', details: ['Built websites, REST APIs and internal tools for commerce and business workflows.', 'Integrated external services and implemented search, forms and data-driven features.', 'Supported testing, deployment and ongoing improvements across client projects.'] },
  { period: '2013 — 2020', role: 'IT Manager / IT Leadership', company: 'IT services & software environment', details: ['Managed technology operations, user support, infrastructure and business systems.', 'Connected technical delivery with team coordination, customer needs and operational priorities.'] },
  { period: '2007 — 2013', role: 'IT Technical Engineer', company: 'Access Bank', details: ['Supported enterprise IT operations including networks, servers, databases, hardware and user support.', 'Built a foundation in uptime, troubleshooting, service delivery and mission-critical systems.'] }
];

export default function Experience() {
  return <div className="section-wrap experienceContainer"><div className="section-kicker">CAREER PATH</div><h2 className="section-heading">Built on experience.<br/><span>Driven by curiosity.</span></h2><p className="section-subtitle">A career that bridges hands-on IT operations, business-facing leadership and modern software development.</p><div className="timeline">{roles.map((role, index) => <article className="timeline-item" key={role.company + role.period}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-content"><div className="timeline-period">{role.period}</div><h3>{role.role}</h3><div className="timeline-company">{role.company}</div><ul>{role.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div></div>;
}
