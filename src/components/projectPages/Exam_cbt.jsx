import { Link, useNavigate } from "react-router-dom";
import "../home.css";
import eco1 from "./assets/eco1.png";
import eco2 from "./assets/eco2.jpg";
import eco3 from "./assets/eco3.jpg";
import cbt from "./assets/cbt.jpg";
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
                  <h1>Custom Exam CBT Application </h1>

                  <div className="thelinknavigation">
                    <img src={handpointing} alt="livewebsite" />
                    <Link to="https://customcbtapp.vercel.app/">
                      Live website
                    </Link>
                  </div>

                  <img src={cbt} alt="ideaimages" className="ideaimages" />
                  <div className="projectsContent">
                    The Custom CBT Examination Platform is a full-featured
                    web-based assessment system developed to modernize and
                    streamline the examination process for educational
                    institutions and organizations. The platform eliminates the
                    challenges associated with traditional paper-based
                    examinations by providing a secure, scalable, and automated
                    testing environment. <br />
                    <br />
                    Built with a focus on usability, flexibility, and
                    performance, the system enables administrators to manage
                    examinations, students, subjects, and results from a
                    centralized dashboard while providing candidates with a
                    smooth and distraction-free testing experience..
                    <br />
                    <br />
                  </div>

                  <div className="projectsContent">
                    Key Features
                    <br />
                    <br />
                    Examination Management <br/><br/>
                    ☆ Create and manage examinations with ease. <br/>
                    ☆ Configure examination duration and schedules.<br/> 
                    ☆ Support for multiple subjects and categories.<br/>
                    ☆ Automatic exam submission when time expires. <br/>
                    ☆ Real-time examination timer and progress tracking.<br/><br/>


                    Question Management<br/><br/>

                    ☆ Add questions individually through an intuitive interface.<br/>
                    ☆ Bulk upload thousands of questions using CSV or Excel files.<br/>
                    ☆ Organize questions by subject, category, or examination.<br/>
                    ☆ Support for multiple-choice questions (MCQs). <br/>
                   ☆ Randomized question presentation to improve exam integrity. <br/><br/>

                    Student management <br/><br/>
                    ☆ Register students individually. <br/>
                    ☆ Bulk upload student records using CSV or Excel files. <br/>
                    ☆ Manage student profiles and examination access. <br/>
                    ☆ Assign students to specific examinations or categories. <br/>
                    ☆ Efficient handling of large student populations.<br/><br/>

                    Multi-User System <br/>
                    The platform supports multiple user roles, including:<br/><br/>

                    Administrators<br/><br/> 
                    ☆ Full system management capabilities. <br/>
                    ☆ User and examination administration.<br/> 
                    ☆ Question and student management. <br/>
                    ☆ Results monitoring and reporting. <br/><br/>

                    Instructors/Teachers <br/><br/>
                     ☆Examination creation and management. <br/>
                    ☆ Question bank management.<br/>
                    ☆ Performance monitoring. <br/><br/>

                    Students<br/><br/>  
                    ☆ Secure login and examination access. <br/>
                    ☆ View examination schedules. <br/>
                    ☆ Take examinations online. <br/>
                    ☆ Access examination results where permitted.<br/><br/>

                    Automated Result Processing<br/><br/> 
                    The system automatically grades submitted examinations and generates results instantly. 
                    ☆ Features include:<br/> 
                    ☆ Instant score calculation. <br/>
                    ☆ Automatic grading. <br/>
                    ☆ Detailed performance reports.<br/> 
                    ☆ Pass/fail determination. <br/>
                    ☆ Examination statistics and analytics. <br/>
                    ☆ Result history tracking. <br/><br/>
                    
                    Result Export Options<br/><br/>
                    ☆ Results can be: <br/>
                    ☆ Printed directly from the platform. <br/>
                    ☆ Saved digitally for future reference. <br/>
                    ☆ Downloaded for record keeping. <br/>
                    ☆ Archived within the system for long-term access.<br/><br/>

                    User Experience<br/>
                    The platform was designed with simplicity and accessibility in mind.<br/><br/>
                    Benefits <br/><br/>
                    ☆ Clean and intuitive user interface. <br/>
                    ☆ Minimal learning curve.<br/> 
                   ☆ Responsive design for desktop and mobile devices. <br/>                    
                   ☆ Fast navigation and efficient workflows. <br/>
                   ☆ Optimized for both small and large-scale examinations. <br/><br/>

                    Security Features<br/><br/>
                    ☆ To ensure examination integrity and data protection, the platform includes:<br/> 
                    ☆ Secure authentication and authorization. <br/>
                   ☆ Role-based access control.<br/>
                    ☆ Protected examination sessions. <br/>
                    ☆ Automatic timeout and submission handling. <br/>
                    ☆ Secure data storage and management.<br/><br/>

                    Administrative Efficiency<br/><br/> 
                    The platform dramatically reduces administrative workload by automating traditionally manual
                    processes, including: <br/>
                    ☆ Student registration. <br/>
                    ☆ Question management. <br/>
                    ☆ Examination scheduling. <br/>
                    ☆ Grading and scoring.<br/>
                    ☆ Result generation. <br/>
                    ☆ Report preparation. <br/>
                    ☆ This allows institutions to focus more on education and assessment
                    quality rather than administrative tasks. <br/><br/>

                    Technical Highlights <br/><br/>
                    
                    Core Capabilities <br/><br/>
                    ☆ Full-stack web application architecture. <br/>
                    ☆ Real-time examination management. <br/>
                    ☆ Bulk data import functionality. <br/>
                    ☆ Automated grading engine. <br/>
                    ☆ Role-based user management.<br/> 
                   ☆ Dynamic reporting system. <br/>
                    ☆ Secure database-driven architecture. <br/>
                    ☆ Scalable design suitable for institutions of various sizes. <br/><br/>

                    Project Impact <br/><br/>
                    The Custom CBT Examination Platform demonstrates the ability to design and
                    develop enterprise-level educational technology solutions
                    that solve real-world assessment challenges. By combining
                    automation, usability, and scalability, the platform
                    delivers a modern examination experience for administrators,
                    instructors, and students while significantly improving
                    operational efficiency. <br/><br/>
                    
                    Technologies Used: <br/><br/>
                    React.js,Node.js, Express.js, MySQL/MongoDB, JWT Authentication, REST
                    APIs, CSV Processing, and Modern Responsive UI Design.<br/><br/>
                    <br />
                  </div>
                  <div className="facticons">
                    {/* <Link to='https://github.com/RayIwobi/ecommerce-clientside' ><div className='conicons'></div> </Link> */}
                    <Link to="https://customcbtapp.vercel.app/">
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
