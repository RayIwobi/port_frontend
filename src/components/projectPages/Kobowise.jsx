import { Link, useNavigate } from "react-router-dom";
import "../home.css";
import catch1 from "./assets/catch1.jpg";
import catch2 from "./assets/catch2.jpg";
import catch3 from "./assets/catch3.jpg";
import world from "../assets/world.png";
import richi from "../assets/richi.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import handpointing from "./assets/handpointing.png";
import arrowleft from "../assets/arrowleft.png";
import kobo from "../assets/kobo.jpg";

function Catchline() {
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
                  <h1>Kobowise – Digital Savings & Wealth Management Platform </h1>
                  <div>(undergoing development)</div>

                  <div className="thelinknavigation">
                    <img src={handpointing} alt="livewebsite" />
                    <Link to="https://kobowise-beta.vercel.app/">
                      Live website
                    </Link>
                  </div>

                  <img src={kobo} alt="ideaimages" className="ideaimages" />
                  <div className="projectsContent">
                    Kobowise is a modern fintech platform designed to help
                    individuals build healthy financial habits through automated
                    savings, goal-based planning, and smart wealth management.
                    Inspired by the simplicity of leading digital savings
                    platforms while maintaining its own unique identity,
                    Kobowise provides users with an intuitive, secure, and
                    engaging way to save, plan, and grow their money. <br/><br/>
                    
                    The
                    platform was designed with a strong emphasis on user
                    experience, combining a premium interface with practical
                    financial tools that encourage consistent saving and
                    long-term financial discipline. Every aspect of the
                    application—from the onboarding experience to the
                    interactive dashboard—was crafted to make personal finance
                    simple, accessible, and visually appealing.<br/><br/> 
                    
                    Key Features<br/><br/>
                    * Automated recurring savings <br/><br/>
                    * Goal-based savings plans <br/><br/>
                    * Smart savings dashboard with real-time insights 
                    * Secure user authentication <br/><br/>
                    * Personalized financial progress tracking <br/><br/>
                    * Responsive, mobile-friendly interface <br/><br/>
                    * Beautiful landing page with modern animations <br/><br/>
                    * Interactive savings analytics <br/><br/>
                    * Transaction history and account management <br/><br/>
                    * Future-ready architecture for investments, bill payments,
                    and digital banking integrations <br/><br/> 
                    
                    My Role As the lead designer and full-stack developer, I was responsible for the
                    complete product lifecycle, including: <br/><br/>
                    
                    * Product planning and feature architecture 
                    * UI/UX design 
                    * Frontend
                    development 
                    * Backend API development 
                    * Database design 
                    *
                    Authentication and security implementation 
                    * Responsive
                    design optimization 
                    * Performance optimization 
                    * Deployment
                    preparation ### 
                    
                    Technologies Used 
                    * React.js <br/><br/>
                    * JavaScript
                    (ES6+) <br/><br/>
                    * HTML5 <br/><br/>
                    * CSS3 <br/><br/>
                    * Node.js <br/><br/>
                    * Express.js <br/><br/>
                    * MongoDB<br/><br/> 
                    *
                    REST APIs <br/><br/>
                    * Axios 
                    * React Router 
                    * React Toastify 
                    * Lucide
                    React 
                    * Git & GitHub <br/><br/>
                    
                    
                    Design Philosophy Kobowise was
                    built around the idea that financial applications should
                    inspire confidence without feeling complicated. The
                    interface combines clean typography, subtle animations,
                    modern glassmorphism, rich gradients, and carefully chosen
                    color palettes to create a premium experience that feels
                    approachable for everyday users. The platform emphasizes
                    simplicity, speed, and trust, ensuring users can focus on
                    achieving their financial goals without unnecessary
                    complexity. <br/><br/>
                    
                    
                    Project Outcome Kobowise demonstrates my
                    ability to design and develop complete fintech solutions
                    from concept to implementation. The project showcases
                    expertise in full-stack development, responsive UI
                    engineering, component-based architecture, API integration,
                    user-centered design, and modern frontend development
                    practices while maintaining a strong focus on usability,
                    scalability, and visual excellence. .<br />
                    <br />
                  </div>
                  
                  <div className="facticons">
                    <Link to="https://github.com/RayIwobi/kobowise">
                      <div className="conicons"></div>{" "}
                    </Link>
                    <Link to="https://kobowise-beta.vercel.app">
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

export default Catchline;
