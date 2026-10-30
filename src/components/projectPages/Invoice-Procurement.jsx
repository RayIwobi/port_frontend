import { Link, useNavigate } from "react-router-dom";
import "../home.css";
import invoice from "../assets/invoice.jpg";
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
          <img src={richi} alt="Raymond Iwobi" className="portfolioImage" />

          <div className="homecontent">
            <div id="name">Raymond Iwobi</div>
            <div id="brief">
              I design and build full-stack applications that solve real
              problems and deliver great user experiences.
            </div>

            <div className="antonclu">
              <div id="icons">
                <Link to="https://portfolio-zeta-one-if72k9ugz5.vercel.app/" aria-label="Portfolio">
                  <img src={world} alt="Portfolio" />
                </Link>
                <Link to="https://github.com/rayiwobi" aria-label="GitHub">
                  <img src={github} alt="GitHub" />
                </Link>
                <Link to="https://www.linkedin.com/in/raymond-iwobi-843785157/" aria-label="LinkedIn">
                  <img src={linkedin} alt="LinkedIn" />
                </Link>
                <Link to="mailto:rayicon@gmail.com" aria-label="Email Raymond">
                  <img src={email} alt="Email" />
                </Link>
              </div>

              <img
                src={arrowleft}
                alt="Go back"
                onClick={handleclick}
                className="arrowleft"
              />
            </div>
          </div>
        </div>

        <div className="maincontent">
          <button onClick={handleclick} id="backbtn" aria-label="Go back" />

          <div className="maincontent-inner">
            <div className="experienceContainer">
              <div>
                <div className="projectpages">
                  <h1>Procurement & Invoice Management System</h1>

                  <div className="thelinknavigation">
                    <img src={handpointing} alt="" />
                    <Link to="https://procurement-public-ten.vercel.app/">
                      Live website
                    </Link>
                  </div>

                  <img
                    src={invoice}
                    alt="Procurement and invoice management application preview"
                    className="ideaimages"
                  />

                  <div className="projectsContent">
                    A full-stack business management system designed to help
                    procurement teams organize purchasing activities and manage
                    the documents that move through the procurement process.
                    It brings key records and workflows—including quotations,
                    purchase orders, invoices, waybills, vendors, and petty
                    cash—into one centralized application.
                    <br />
                    <br />
                    The system is designed to improve document traceability,
                    reduce scattered paperwork, and help authorized team
                    members access the information relevant to their roles and
                    projects.
                  </div>

                  <div>
                    <strong>Core Features</strong>
                    <br />
                    <br />
                    ☆ Quotation management for recording and organizing supplier
                    quotations
                    <br />
                    ☆ Purchase order management to document procurement
                    requests and orders
                    <br />
                    ☆ Invoice management for recording and tracking supplier
                    invoices
                    <br />
                    ☆ Waybill records for documenting the movement or delivery
                    of procured items
                    <br />
                    ☆ Vendor management for maintaining supplier information
                    <br />
                    ☆ Signatory management for maintaining authorized
                    signatories
                    <br />
                    ☆ Petty cash records, including project-linked and
                    standalone expenses
                    <br />
                    ☆ Project-based organization of procurement and financial
                    documents
                    <br />
                    ☆ Role-based document access, with broader visibility for
                    authorized administrators
                    <br />
                    ☆ Support for business document workflows from quotations
                    through purchase orders and related records
                    <br />
                    ☆ Financial details configured for the business workflow,
                    including VAT
                    <br />
                    ☆ Responsive interface for accessing business records
                    across desktop and mobile screens
                    <br />
                    <br />
                  </div>

                  <div>
                    <strong>Technology Stack</strong>
                    <br />
                    <br />
                    ☆ Frontend: React and Vite
                    <br />
                    ☆ Backend: Node.js and Express.js
                    <br />
                    ☆ Database: MongoDB with Mongoose
                    <br />
                    ☆ API communication: RESTful endpoints
                    <br />
                    ☆ Authentication and authorization: user authentication
                    with role-aware access to records
                    <br />
                    ☆ Deployment: web-based deployment with a hosted backend
                    and database
                    <br />
                    <br />
                  </div>

                  <div>
                    <strong>Challenges & Solutions</strong>
                    <br />
                    <br />
                    A key design challenge in procurement software is keeping
                    related business documents organized while ensuring that
                    users only see records they are permitted to access. The
                    application addresses this through separate modules for
                    each document type and access rules based on user roles and
                    document ownership or sharing.
                    <br />
                    <br />
                    Another important consideration is the relationship between
                    procurement records. Organizing quotations, purchase
                    orders, invoices, waybills, vendors, and petty cash within
                    one system helps users follow the work more consistently
                    than managing each record in disconnected files.
                    <br />
                    <br />
                  </div>

                  <div>
                    <strong>Outcome</strong>
                    <br />
                    <br />
                    The project demonstrates the practical application of
                    full-stack development to business operations. It combines
                    document management, project organization, vendor records,
                    financial workflows, and role-aware access in a system
                    tailored to procurement teams.
                    <br />
                    <br />
                  </div>

                  <div className="facticons">
                    <Link to="https://procurement-public-ten.vercel.app/">
                      <button className="coniconsbutton">Live website</button>
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
