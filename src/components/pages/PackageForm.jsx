import { Link } from "react-router-dom";
import { useState } from "react";
import "../style.css";
import bs from "../assets/other_images/bs.jpg";
import aspirin from "../assets/other_images/aspirin.jpg";
// import ab2 from '../assets/other_images/ab2.jpg'
import ab2 from "../assets/other_images/duo.png";
import ab3 from "../assets/other_images/ab3.jpg";
import alab from "../assets/other_images/alab2.png";
import handshake from "../assets/other_images/handshake.jpg";
import gal1 from "../assets/other_images/gal1.jpg";
import gal2 from "../assets/other_images/gal2.jpg";
import gal3 from "../assets/other_images/gal3.jpg";
import gal4 from "../assets/other_images/gal4.jpg";
import member1 from "../assets/other_images/member1.png";
import member2 from "../assets/other_images/member2.png";
import member3 from "../assets/other_images/member3.png";
import member4 from "../assets/other_images/member4.png";
import alabimage from "../assets/other_images/alabimage.jpg";
import formpage from "../assets/other_images/formpage.jpg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//message notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BusinessSchool() {
  const [client_name, setClient_name] = useState("");
  const [client_email, setClient_email] = useState("");
  const [client_number, setClient_number] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

     const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
          if(client_name === ""){
            toast.error("please type your name")
            return
          }
          if(client_number === ""){
            toast.error("please type your number")
            return
          }
      
          emailjs
            .sendForm('service_iuwzaut', 'template_u95efar', form.current, {
              publicKey: '-jZ2Fuctdb1E1mzvW',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              setClient_name(""),
              setClient_email(""),
              setClient_number(""),
              setLocation(""),
              setMessage(""),
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
            toast.success('Application sent successfully');
        };


  return (
    <div className="centralContainer">
      <ToastContainer position="top-right" autoClose={3000} />
      <div>
        <img src={formpage} alt="bs" className="servicebanner" />
        <div className="busi-school">
          <div className="formContainer">
            <div className="theinnersection">

              <div className="formSectionxa">
                <h3>Please apply by filling the form and we will get in touch</h3>
                <div className="packageforminput">
                  <form ref={form} onSubmit={sendEmail} className="packageforminput">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    value={client_name}
                    name="client_name"
                    onChange={(e) => setClient_name(e.target.value)}
                    placeholder="Enter your name"
                    className="packageformitems"
                  />
                  <label>Email:</label>
                  <input
                    type="email"
                    value={client_email}
                    name="client_email"
                    onChange={(e) => setClient_email(e.target.value)}
                    placeholder="Enter your email"
                    className="packageformitems"
                  />
                  <label>Phone Number:</label>
                  <input
                    type="number"
                    value={client_number}
                    name="client_number"
                    onChange={(e) => setClient_number(e.target.value)}
                    placeholder="Enter your phone number"
                    className="packageformitems"
                  />
                  <label>Location:</label>
                  <input
                    type="text"
                    value={location}
                    name="location"
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your location"
                    className="packageformitems"
                  />
                  <label>Select your package:</label>
                  <select name="package">
                    <option value="">Select a Package</option>
                    <option value="online package">Online Package</option>
                    <option value="corporate package">Corporate Package</option>
                    <option value="executive package">Executive Package</option>
                  </select>
                  <br />

                  <label>Tell us about you:</label>
                  <textarea
                    type="text"
                    value={message}
                    name="message"
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us a little about yourself."
                  />

                  <button>Send Message</button>
                  </form>
                </div>
              </div>

              <div className="alabcontent" id="alabinpackage">
                <h3>
                  A-LAB Cohort 3: Leadership & Organizational Development
                  Program
                </h3>

                <h3>Key learning outcomes</h3>
                <p>
                  By completting all 7 modules, participants will:
                  <br />
                  1. Transition from their current leadership leveland
                  effectiveness to its pinnacle
                  <br />
                  2. Build and manage high performing teams by learning its key
                  dynamic stages
                  <br />
                  3. Be equipped with skills necessary fordeveloping products
                  and services that meets the evolving market standards
                  <br />
                  4. Learn to align company strategic structure and culture for
                  organizational success
                  <br />
                  5. Learn to enhance client engagement and retention to drive
                  profitability
                  <br />
                </p>

                <div className="modules">
                  <h3>Modules</h3>
                  <div className="insidemodules" id="insidemodules-package">
                    <p>
                      1. Leadership growthe path and transitions
                      <br />
                      2. People growth path and transitions
                      <br />
                      3. Team growth path and transition
                      <br />
                      4. Client growth path and transition
                      <br />
                      5. Product growth path and transition
                      <br />
                      6. Dynamics of strategic structure
                      <br />
                      7. Dynamics of strategic culture
                      <br />
                    </p>
                    <img
                      src={alabimage}
                      alt="alab"
                      className="alabimage"
                      id="alabaimage-package"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={handshake} alt="handshake" className="handshake" />

          <div className="businndownsec">
            <div className="secondbusinndownsec">
              <div className="insidebus" id="fort2">
                <img src={ab2} alt="show images" />
                <div className="underimage">
                  <h3>Target Audience</h3>
                  <p>
                    THE EDGE Business School serves SMEs, aspiring
                    entrepreneurs, and corporate executives seeking to
                    strengthen leadership capability, build competitive
                    enterprises, and expand their impact. Our programs re
                    designed for individuals and organisations committed to
                    growth, excellence, and sustainable success.
                  </p>
                </div>
              </div>
              <div className="insidebus" id="fort3">
                <div className="underimage">
                  <h3>Benefits</h3>
                  <p>
                    <strong>Expert Faculty</strong>: Participants learn from
                    experienced faculty and industry practitioners who bring
                    deep expertise, practical insight, and real-world
                    perspective to every program.
                  </p>
                  <p>
                    <strong>Innovative Curriculum</strong>: Our curriculum is
                    continuously updated to reflect evolving business realities,
                    combining leadership, entrepreneurship, strategy,
                    technology, and global market insights.
                  </p>
                  <p>
                    <strong>Practical Learning</strong>: We emphasise
                    experiential learning through case studies, simulations,
                    projects, and real-world applications that translate
                    knowledge into action.
                  </p>
                  <p>
                    <strong>Certification</strong>: Participants receive
                    recognised certification that validates their skills,
                    knowledge, and professional development, enhancing
                    credibility and career advancement.
                  </p>
                  <p>
                    <strong>Global Competitiveness</strong>: Our programs are
                    designed to prepare participants to operate confidently in
                    local and international markets, strengthening
                    competitiveness, adaptability, and global relevance.
                  </p>
                </div>

                <img
                  src={ab3}
                  alt="showimage"
                  id="secondbusinessimg"
                  id="sndimg"
                />
              </div>
              <img src={ab3} alt="showimage" id="showimagein" />
            </div>
          </div>
          <div className="facultyContainer">
            <div className="txtcont">
              <div className="factext">Faculty Members</div>
            </div>
            <div className="facultyMembers">
              <div>
                <img src={member1} alt="member" className="fac1" />
              </div>
              <div>
                <img src={member2} alt="member" className="fac1" />
              </div>
              <div>
                <img src={member3} alt="member" className="fac1" />
              </div>
              <div>
                <img src={member4} alt="member" className="fac1" />
              </div>
            </div>
          </div>
          <div className="numbusiness">
            <div className="theprofbusiness">
              <h3>Practical class</h3>
              <div className="progsides" id="galleryimages1">
                <div className="imagegal1">
                  <img src={gal1} alt="gal1" className="galleryimage" />
                  <img src={gal2} alt="gal1" className="galleryimage" />
                </div>
                <div className="imagegal1">
                  <img src={gal3} alt="gal1" className="galleryimage" />
                  <img src={gal4} alt="gal1" className="galleryimage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSchool;
