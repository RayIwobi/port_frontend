import { Link, useNavigate } from "react-router-dom";
import "../home.css";
import inventory from "../assets/inventory.jpg";
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
                  <h1>Inventory & Pharmacy Management </h1>

                  <div className="thelinknavigation">
                    <img src={handpointing} alt="livewebsite" />
                    <Link to="https://pharmacy-main-test.vercel.app/">
                      Live website
                    </Link>
                  </div>

                  <img
                    src={inventory}
                    alt="ideaimages"
                    className="ideaimages"
                  />
                  <div className="projectsContent">
                    A full-stack Inventory and Pharmacy Management System built
                    to help businesses and pharmacies manage products, monitor
                    stock, record sales, and keep essential business information
                    organized in one place. The system provides a practical
                    digital alternative to manual stock books and scattered
                    sales records, helping users make better day-to-day
                    operational decisions.
                    <br />
                    <br />
                  </div>
                  <div>
                    Core Features
                    <br />
                    <br />
                    ☆ Product and medicine inventory management for maintaining
                    organized stock records
                    <br />
                    ☆ Stock quantity monitoring and inventory summaries
                    <br />
                    ☆ Sales recording and transaction history
                    <br />
                    ☆ Sales returns management to help keep stock records
                    accurate
                    <br />
                    ☆ Business reports for reviewing sales, stock, and
                    performance
                    <br />
                    ☆ Profit tracking and sales analysis to support business
                    decisions
                    <br />
                    ☆ Debtor tracking for recording and monitoring outstanding
                    customer balances
                    <br />
                    ☆ Pharmacy-oriented workflows for managing medicine stock
                    and sales
                    <br />
                    ☆ Centralized records designed to reduce reliance on paper
                    registers and manual calculations
                    <br />
                    ☆ Responsive interface for convenient use across supported
                    desktop and mobile screen sizes
                    <br />
                    ☆ Frontend-to-backend API integration for handling and
                    retrieving application data
                    <br />
                    <br />
                    <br />
                  </div>
                  <div>
                    Tech Stack
                    <br />
                    <br />
                    ☆ Frontend: React with Vite
                    <br />
                    ☆ Backend: Node.js and Express.js
                    <br />
                    ☆ Database: MongoDB
                    <br />
                    ☆ API: RESTful endpoints connecting the frontend and
                    backend
                    <br />
                    ☆ Deployment: Web-based deployment with a hosted database
                    <br />
                    <br />
                    <br />
                  </div>
                  <div>
                    Challenges & Solutions
                    <br />
                    <br />
                    Inventory and pharmacy operations depend on reliable stock
                    records and accurate sales information. The system brings
                    stock management, sales, returns, debtor records, and
                    reporting into a single application. Organizing these
                    workflows around shared data helps users review business
                    activity without having to manage separate manual records.
                    <br />
                    <br />
                    <br />
                    Outcome
                    <br />
                    <br />
                    The result is a practical business management application
                    that supports everyday inventory and pharmacy operations.
                    It demonstrates full-stack development skills, database
                    integration, API-driven application design, and the ability
                    to translate real business needs into useful software.
                    <br />
                    <br />
                  </div>
                  <div className="facticons">
                    {/* <Link to="https://github.com/RayIwobi/ecommerce-clientside">
                      <div className="conicons"></div>{" "}
                    </Link> */}
                    <Link to="https://pharmacy-main-test.vercel.app/">
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
