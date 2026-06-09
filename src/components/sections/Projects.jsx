import React from "react";
import ideavault from "../assets/ideavault.jpg";
import ecommerce from "../assets/ecommerce.png";
import quizapp from "../assets/quizapp.jpg";
import yarnix from "../assets/yarnix.jpg";
import scraper from "../assets/scraper.jpg";
import movieplace from "../assets/movieplace.jpg";
import dashboard from "../assets/dashboard.jpg";
import cbt from "../assets/cbt.jpg";
import meter from "../assets/meter.jpg";
import authenticate from "../assets/authenticate.png";
import catch1 from "../projectPages/assets/catch1.jpg";
import front from "../projectPages/assets/front.jpg";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projectsContainer">
      <div>
        <div className="portfolio-title">
          <div>RECENT</div>
          <div id="devcolor">PROJECTS</div>
          <div className="longline"></div>
        </div>
        <div className="projdist">
          <Link to="/ecommerce">
            <div className="projectblocks">
              <img src={ecommerce} alt="" className="projimg1" />
              <div className="projtitle">Ecommerce app</div>
              <div className="progtext">
                <p>
                  NediFoods is a full-stack e-commerce platform built to deliver
                  a smooth, secure, and scalable online shopping experience for
                  food products.{" "}
                  <span style={{ color: "Skyblue" }}>more...</span>
                </p>
              </div>
            </div>
          </Link>
          <Link to="/dashboard">
            <div className="projectblocks">
              <img src={dashboard} alt="" className="projimg1" />
              <div className="projtitle">Dashboard app</div>
              <div className="progtext">
                <p>
                  A full-stack SaaS-style dashboard application for managing
                  users, projects, communication, and schedules in one
                  centralized system.{" "}
                  <span style={{ color: "Skyblue" }}>more...</span>
                </p>
              </div>
            </div>
          </Link>
          <Link to="/exam_cbt">
            <div className="projectblocks">
              <img src={cbt} alt="" className="projimg1" />
              <div className="projtitle">Custom Exam CBT app</div>
              <div className="progtext">
                <p>
                  A full-stack SaaS-style dashboard application for managing
                  users, projects, communication, and schedules in one
                  centralized system.{" "}
                  <span style={{ color: "Skyblue" }}>more...</span>
                </p>
              </div>
            </div>
          </Link>

          <Link to="/catchline">
            <div className="projectblocks">
              <img src={catch1} alt="" className="projimg1" />
              <div className="projtitle">Catchline Group</div>
              <div className="progtext">
                <p>
                  Catchline Group is a professional corporate website built to
                  represent a leading consulting and business development firm
                  focused on transforming African.
                  <span style={{ color: "Skyblue" }}>more...</span>
                </p>
              </div>
            </div>
          </Link>
          <Link to="https://product-listing-ecru-kappa.vercel.app/">
            <div className="projectblocks">
              <img src={front} alt="" className="projimg1" />
              <div className="projtitle">Product listing</div>
              <div className="progtext">
                <p>
                  Product listing is a demo ecommerce platform that displays how
                  products a listed form an Ecommerce API onto the web
                  application. <span style={{ color: "Skyblue" }}>more...</span>
                </p>
              </div>
            </div>
          </Link>

          <Link to="/metering">
            <div className="projectblocks">
              <img src={meter} alt="" className="projimg1" />
              <div className="projtitle">Engineering website</div>
              <div className="progtext">
                <p>
                  The Metering Website is a web-based platform designed to
                  manage, display, and monitor metering and instrumentation data
                  in a clear and structured way.{" "}
                  <span style={{ color: "Skyblue" }}>more...</span>
                </p>
              </div>
            </div>
          </Link>

          <Link to="/quizapp">
            <div className="projectblocks">
              <img src={quizapp} alt="" className="projimg1" />
              <div className="projtitle">CBT quiz app</div>
              <div className="progtext">
                <p>
                  The WAEC Cbt quiz Application is an interactive computer-based
                  testing platform designed to help students prepare effectively
                  for the WAEC examination.{" "}
                  <span style={{ color: "Skyblue" }}>more...</span>
                </p>
              </div>
            </div>
          </Link>

          <Link to="movieapp">
            <div className="projectblocks">
              <img src={movieplace} alt="" className="projimg1" />
              <div className="projtitle">Movie info Api</div>
              <div className="progtext">
                <p>
                  The Movie Info API is a backend-driven application designed to
                  fetch, process, and serve detailed movie information from an
                  external data source.{" "}
                  <span style={{ color: "Skyblue" }}>more...</span>
                </p>
              </div>
            </div>
          </Link>

          {/* <Link to='ideavault'>
                        <div className='projectblocks'>
                            <img src={ideavault} alt='' className='projimg1' />
                            <div className='projtitle'>ideaVault</div>
                            <div className='progtext'>
                                <p>idea Vault is a full-stack productivity application designed
                                    to help creatives, entrepreneurs, and developers store and
                                    manage their ideas effortlessly. <span style={{ color: 'Skyblue' }}>more...</span>
                                </p>
                            </div>
                        </div>
                    </Link> */}

          <Link to="/amazonscraper">
            <div className="projectblocks">
              <img src={scraper} alt="" className="projimg1" />
              <div className="projtitle">Amazon webscraper</div>
              <div className="progtext">
                <p>
                  The Amazon Web Scraper is a backend-focused automation tool
                  built to extract structured product data from Amazon product
                  pages. The project{" "}
                  <span style={{ color: "Skyblue" }}>more...</span>
                </p>
              </div>
            </div>
          </Link>

          <Link to="/authentication">
            <div className="projectblocks">
              <img src={authenticate} alt="" className="projimg1" />
              <div className="projtitle">Authentication system</div>
              <div className="progtext">
                <p>
                  The Authentication & Login System is a robust user access
                  management solution built to securely handle user
                  registration, login, session management, and{" "}
                  <span style={{ color: "Skyblue" }}>more...</span>
                </p>
              </div>
            </div>
          </Link>

          {/* <Link to='/yarnix'>
                        <div className='projectblocks'>
                            <img src={yarnix} alt='' className='projimg1' />
                            <div className='projtitle'>Yarnix</div>
                            <div className='progtext'>
                                <p>Yarnix is a full-stack social media application built to connect users
                                    through posts, interactions, and real-time engagement.
                                    Inspired by modern <span style={{ color: 'Skyblue' }}>more...</span>
                                </p>
                            </div>
                        </div>
                    </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
