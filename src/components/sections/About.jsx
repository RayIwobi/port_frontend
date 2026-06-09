import React from "react";
import "./sections.css";

function About() {
  return (
    <div className="homesectioncontainer">
      <div>
        <div className="portfolio-title">
          <div>MY JOURNEY</div>
          <div id="devcolor">AS A DEVELOPER</div>
          <div className="longline"></div>
        </div>
        <div className="textIntro">
          <p>
            My journey as a software developer is built on a strong foundation
            of real-world IT experience and continuous growth in technology. I
            began my career as an IT Specialist in the banking sector, where I
            spent over seven years working with enterprise systems,
            infrastructure, security, and mission-critical operations. This
            experience shaped my discipline, problem-solving mindset, and
            attention to detail in high-pressure environments. <br/><br/>
            
            I later progressed into leadership roles as an IT Manager in a healthcare
            center and IT Supervisor in an audit firm. These positions
            strengthened my ability to manage systems, support diverse users,
            and align technology with business and compliance requirements. In
            2016, I transitioned into web development, driven by a desire to
            build user-facing solutions. I started with HTML, CSS, Adobe
            ActionScript, Python, Django, and databases such as MySQL, SQLite,
            and PostgreSQL, before moving into WordPress development to create
            dynamic, functional websites.<br/> <br/>
            
            As the industry evolved, I advanced into modern full-stack development using the MERN stack (MongoDB,
            Express.js, React, and Node.js), where I now build scalable, secure,
            and user-focused applications with features such as authentication,
            APIs, databases, and payment integrations. What defines my path is
            the combination of enterprise IT experience and modern software
            engineering. I don’t just write code—I build reliable systems that
            solve real business problems. My growth continues to be driven by
            learning, building, and delivering impactful software.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
