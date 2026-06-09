import { Link, useNavigate } from "react-router-dom";
import "../home.css";
import eco1 from "./assets/eco1.png";
import eco2 from "./assets/eco2.jpg";
import eco3 from "./assets/eco3.jpg";
import dashboard from "./assets/dashboard.jpg";
import world from "../assets/world.png";
import richi from "../assets/richi.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import handpointing from "./assets/handpointing.png";
import arrowleft from "../assets/arrowleft.png";

function Ecommerce() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="mainContainer">
        <div className="portfolioname">My Portfolio</div>
        <div className="sideContent">
          <img src={richi} alt="portfolioImage" className="portfolioImage" />
          <div className="homecontent">
            <div id="name">Raymond Iwobi</div>
            <div id="brief">
              I design and build full-stack applications that solve real
              problems and deliver great user experiences.
            </div>
            <div className="antonclu">
              <div id="icons">
                <Link to="https://portfolio-zeta-one-if72k9ugz5.vercel.app/">
                  <img src={world} alt="portfolio" />
                </Link>
                <Link to="https://github.com/rayiwobi">
                  <img src={github} alt="github" />
                </Link>
                <Link to="https://www.linkedin.com/in/raymond-iwobi-843785157/">
                  <img src={linkedin} alt="linkedin" />
                </Link>
                <Link to="mailto:rayicon@gmail.com">
                  <img src={email} alt="email" />
                </Link>
              </div>
              <img
                src={arrowleft}
                alt="arrow"
                onClick={handleclick}
                className="arrowleft"
              />
            </div>
          </div>
        </div>
        <div className="maincontent">
          <button onClick={handleclick} id="backbtn"></button>
          <div className="maincontent-inner">
            <div className="experienceContainer">
              <div>
                <div className="projectpages">
                  <h1>Projects Dashboard Application </h1>
                  <div>(under development)</div>

                  <div className="thelinknavigation">
                    <img src={handpointing} alt="livewebsite" />
                    <Link to="https://dashboardapp-pink.vercel.app/">
                      Live website
                    </Link>
                  </div>

                  <img
                    src={dashboard}
                    alt="ideaimages"
                    className="ideaimages"
                  />
                  <div className="projectsContent">
                    This dashboard application is a comprehensive full-stack
                    system designed to centralize communication, project
                    management, scheduling, and data monitoring. It serves as a
                    productivity hub where users can collaborate, organize
                    tasks, and manage workflows efficiently in one place.
                    <br />
                    <br />
                  </div>
                  <div>
                    Core Features
                    <br />
                    <br />
                    ☆ Role-based authentication and secure access control
                    <br />
                    ☆ Real-time chat system with messaging and notifications
                    <br />
                    ☆ Project management module for creating, tracking, and
                    organizing projects <br />☆ Meeting scheduler for planning
                    and managing team sessions <br />
                    ☆ Calendar system with event scheduling and reminders
                    <br />☆ Interactive dashboard with analytics and system
                    overview <br />
                    ☆ Timer functionality for task tracking and productivity
                    sessions <br />
                    ☆ User management system (admin controls for users and
                    roles) <br />☆ Responsive UI optimized for desktop and
                    mobile devices <br />
                    ☆ RESTful API integration between frontend and backend
                    <br />
                    <br />
                    <br />
                  </div>
                  <div>
                    Tech Stack <br />
                    <br />
                    ☆ Frontend: React (Vite), responsive UI components, state
                    management <br />
                    ☆ Backend: Node.js, Express.js <br />
                    ☆ Database:MongoDB <br />
                    ☆ Authentication: JWT-based secure login system
                    <br />
                    ☆ Communication: REST APIs + real-time messaging (WebSockets
                    or similar if used)
                    <br />
                    <br /><br/> 
                  </div>
                  <div>
                    Challenges & Solutions <br/> <br/> 
                    One of the main challenges was
                    integrating multiple system modules—chat, scheduling,
                    projects, and analytics—without making the application feel
                    cluttered. This was solved through modular architecture,
                    separating features into independent components and services
                    while maintaining a consistent UI design system. <br/> <br/> <br/> 
                    
                    Outcome<br/> <br/> 
                    The final product is a scalable, multi-functional dashboard that
                    improves productivity through centralized communication and
                    workflow management tools. It demonstrates strong full-stack
                    capability, real-time system design, and practical
                    SaaS-level architecture.<br/> <br/> 
                  </div>
                  <div className="facticons">
                    {/* <Link to="https://github.com/RayIwobi/ecommerce-clientside">
                      <div className="conicons"></div>{" "}
                    </Link> */}
                    <Link to="https://dashboardapp-pink.vercel.app/">
                      <button className="coniconsbutton">live website</button>
                    </Link>
                  </div>
                  <br />
                </div>
                <div id="registry">
                  <h6>Built by Raymond Iwobi | Powered by React</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
