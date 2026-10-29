import React from 'react';
import './sections.css';

export default function About() {
  return <div className="section-wrap about-layout">
    <div className="about-label"><div className="section-kicker">A LITTLE ABOUT ME</div><h2 className="section-heading">A developer with<br/><span>an operations mindset.</span></h2><div className="about-stamp">PEOPLE · PROCESS · PRODUCT</div></div>
    <div className="about-copy"><p className="lead-copy">I build software with a practical understanding of how technology is used, supported and relied on every day.</p><p>My background spans enterprise IT support, networking, systems administration, customer relations, team leadership and modern application development. That mix helps me see beyond the code: the people using a product, the process it should improve, and the reliability it needs once it goes live.</p><p>Today, I work across the product lifecycle — from shaping an idea and building the interface to developing APIs, connecting databases, testing workflows and deploying applications to the cloud.</p><div className="about-tags"><span>Problem solving</span><span>Product thinking</span><span>Team collaboration</span><span>Continuous learning</span></div></div>
  </div>;
}
