import React from "react";
import "./sections.css";

function HomeSection() {
  return (
    <div className="homesectioncontainer">
      <div>
        <div className="portfolio-title">
          <div>FRONTEND</div>
          <div id="devcolor">DEVELOPER</div>
          <div className="longline"></div>
        </div>
        <div className="textIntro">
          <p>
            I'm a Frontend Developer with Full-Stack expertise, passionate about
            building fast, scalable, and user-centered web applications. I
            transform ideas into reliable digital products by combining
            intuitive user interfaces with robust backend systems. From
            responsive frontend experiences to secure and efficient APIs, I
            focus on creating solutions that are both technically sound and
            impactful for users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
