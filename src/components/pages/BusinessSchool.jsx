import {Link} from "react-router-dom"
import '../style.css'
import bs from '../assets/other_images/bs.jpg'
import aspirin from '../assets/other_images/aspirin.jpg'
// import ab2 from '../assets/other_images/ab2.jpg'
import ab2 from '../assets/other_images/duo.png'
import ab3 from '../assets/other_images/ab3.jpg'
import alab from '../assets/other_images/alab2.png'
import handshake from '../assets/other_images/handshake.jpg'
import gal1 from '../assets/other_images/gal1.jpg'
import gal2 from '../assets/other_images/gal2.jpg'
import gal3 from '../assets/other_images/gal3.jpg'
import gal4 from '../assets/other_images/gal4.jpg'
import member1 from '../assets/other_images/member1.png'
import member2 from '../assets/other_images/member2.png'
import member3 from '../assets/other_images/member3.png'
import member4 from '../assets/other_images/member4.png'
import alabimage from '../assets/other_images/alabimage.jpg'

function BusinessSchool() {
    return (
        <div className='centralContainer'>
            <div>
                <img src={bs} alt='bs' className='servicebanner' />
                <div className='busi-school'>
                    <div className='businesscontainer'>
                        <img src={alab} alt="alab" className='alab'/> 
                        <h4>About the School</h4>
                        <div className='businesstext'>
                            THE EDGE Business School is a leadership and entrepreneurship
                            institution under the Catchline Group, established to develop
                            forward-thinking leaders, resilient entrepreneurs, and
                            high-performing executives. The School is built on the
                            belief that sustainable economic growth depends on capable
                            leadership, ethical business practices, and globally competitive
                            enterprises. Through industry-relevant education and practical
                            engagement, THE EDGE Business School bridges the gap between
                            theory and real-world application, equipping participants with
                            the mindset and skills required to succeed in complex business
                            environments.
                        </div>
                    </div>
                    <div className='businesscont'>
                        <div className='businesssecond-line'>
                            <img src={aspirin} alt='businessimage' />
                            <div className='businesstext'>
                                <h4>Vision</h4>
                                <div>
                                    "Empowering Africa's future leaders and entrepreneurs through
                                    innovative training and development, fostering global competitiveness
                                    and ethical business practices."<br />
                                </div>

                                <h4>Mission</h4>
                                <div>
                                    "To develop and nurture visionary leaders and entrepreneurs by
                                    providing world-class education and practical skills that address
                                    the unique challenges and opportunities in the African business
                                    landscape."<br />
                                </div>

                                <h4>Core Values</h4>
                                <div>
                                    Innovation<br />
                                    Excellence<br />
                                    Integrity<br />
                                    Collaboration<br />
                                    Practicality<br />
                                    Inclusivity
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='numbusiness'>
                        <div className='theprofbusiness'>
                            <h3>Programs and Offerings</h3>
                            <div className='progsides'>
                                <p>
                                    <strong>Accelerated Leadership & Business Program</strong>:
                                    This intensive program is designed to fast-track leadership
                                    capability and business acumen for current and emerging leaders.
                                    It focuses on strategic thinking, decision-making, operational
                                    excellence, and financial management, enabling participants to lead
                                    effectively, drive organisational performance, and manage growth in
                                    competitive markets.
                                </p>
                                <p>
                                    <strong>Globalization of Indigenous Business Content (GIBC)</strong>:
                                    The GIBC program is a unique initiative aimed at positioning indigenous
                                    businesses for global relevance. It supports entrepreneurs in refining
                                    local products, services, and business models to meet international
                                    standards while preserving cultural identity and value. The program
                                    equips participants with the tools needed to scale beyond local markets
                                    and compete globally.
                                </p>
                                <p>
                                    <strong>Executive Education</strong> : Our Executive Education programs
                                    are tailored for senior leaders and executives seeking advanced insight
                                    into leadership, governance, strategy, and innovation. These programs
                                    provide a high-level learning environment that combines global best
                                    practices with regional context, supporting executives in navigating
                                    complexity, managing risk, and driving long-term value creation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={handshake} alt='handshake' className='handshake'/>
                    <div className='financeContainer'>
                        <div className='insidefinancePositioning'>
                            <div className='alabcontent'>
                                <h3>A-LAB Cohort 3: Leadership & Organizational Development Program</h3>
                                <p>
                                    The A-LAB program is designed as a comprehensive journey for leaders 
                                    and teams who want to elevate their effectiveness, collaboration, 
                                    and long-term impact. It blends practical tools with strategic 
                                    frameworks, ensuring participants not only learn but also apply 
                                    concepts that drive measurable organizational success.
                                </p>
                                <h3>Key learning outcomes</h3>
                                <p>
                                    By completting all 7 modules, participants will:<br/>
                                    1. Transition from their current leadership leveland effectiveness to its pinnacle<br/>
                                    2. Build and manage high performing teams by learning its key dynamic stages<br/>
                                    3. Be equipped with skills necessary fordeveloping products and services that meets the evolving market standards<br/>
                                    4. Learn to align company strategic structure and culture for organizational success<br/>
                                    5. Learn to enhance client engagement and retention to drive profitability<br/>
                                </p>
                            </div>
                            <div className="modules">
                                <h3>Modules</h3>
                                <div className="insidemodules">
                                    <p>
                                        1. Leadership growthe path and transitions<br/>
                                        2. People growth path and transitions<br/>
                                        3. Team growth path and transition<br/>
                                        4. Client growth path and transition<br/>
                                        5. Product growth path and transition<br/>
                                        6. Dynamics of strategic structure<br/>
                                        7. Dynamics of strategic culture<br/>
                                    </p>
                                    <img src={alabimage} alt="alab" className="alabimage"/>
                                </div>
                            </div>
                            <div className='packagesContainer'>
                                <h2>Packages</h2>
                                <div className="allPackages">
                                <div className='packagesinfo'>
                                    <div className='packagename'>Online Package</div>
                                    <hr className='ruler'/>
                                    <div className='packagewriteup'>
                                        <div className='PackagePrice'>N25,000</div>
                                        <p>
                                            Virtual participation from anywhere<br/><br/>

                                            Downloadable resources: slides and recorded sessions<br/><br/>

                                            Access to an exclusive online community for networking and peer learning<br/><br/>

                                            Certificate of participation (e-certificate)<br/><br/>

                                            This package provides flexibility and affordability, perfect for professionals who 
                                            prefer remote learning but still want structured resources and certification<br/><br/>
                                        </p>

                                        <div className='packageinfobottom'>
                                            <Link className="btnlink">Apply now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='packagesinfo'>
                                    <div className='packagename'>Corporate Package</div>
                                    <hr className='ruler'/>
                                    <div className='packagewriteup'>
                                        <div className='PackagePrice' id="multipleprice">Exclusive to corporate organizations 
                                            enrolling multiple executives:</div>
                                        <p>
                                            <strong>₦150,000</strong> (3 slots)<br/><br/>

                                            <strong>₦200,000</strong> (5 slots)<br/><br/>

                                            <strong>Includes all Executive Package benefits</strong><br/><br/>

                                            Designed for organizations seeking collective leadership development and team alignment<br/><br/>

                                            This package offers value for organizations by combining cost efficiency with collective growth, 
                                            ensuring executives learn together and apply strategies cohesively<br/><br/>
                                        </p>

                                        <div className='packageinfobottom'>
                                            <Link className="btnlink">Apply now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='packagesinfo'>
                                    <div className='packagename'>Executive Package</div>
                                    <hr className='ruler'/>
                                    <div className='packagewriteup'>
                                        <div className='PackagePrice'>N75,000</div>
                                        <p>
                                            Physical class attendance <br/><br/>

                                            Interactive workshops: case studies, group discussions, and practical exercises<br/><br/>

                                            Networking opportunities: face-to-face connections with industry experts and executives<br/><br/>

                                            Business audit & strategy review: tailored insights into organizational strengths and gaps<br/><br/>

                                            Business toolkit: slides, recorded materials, and templates for practical application<br/><br/>

                                            Printed & digital certificate of completion<br/><br/>

                                            Tea break and lunch included<br/><br/>

                                            Ideal for immersive learning and direct mentorship.<br/><br/>
                                        </p>

                                        <div className='packageinfobottom'>
                                            <Link className="btnlink">Apply now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='businndownsec'>
                        <div className='secondbusinndownsec' >
                            <div className='insidebus' id='fort2'>
                                <img src={ab2} alt='show images' />
                                <div className='underimage'>
                                    <h3>Target Audience</h3>
                                    <p>
                                        THE EDGE Business School serves SMEs, aspiring entrepreneurs,
                                        and corporate executives seeking to strengthen leadership capability,
                                        build competitive enterprises, and expand their impact. Our programs
                                        re designed for individuals and organisations committed to growth,
                                        excellence, and sustainable success.
                                    </p>
                                </div>
                            </div>
                            <div className='insidebus' id='fort3'>
                                <div className='underimage'>
                                    <h3>Benefits</h3>
                                    <p>
                                        <strong>Expert Faculty</strong>:
                                        Participants learn from experienced faculty and industry practitioners
                                        who bring deep expertise, practical insight, and real-world perspective
                                        to every program.
                                    </p>
                                    <p>
                                        <strong>Innovative Curriculum</strong>: Our curriculum is continuously
                                        updated to reflect evolving business realities, combining leadership,
                                        entrepreneurship, strategy, technology, and global market insights.
                                    </p>
                                    <p>
                                        <strong>Practical Learning</strong>:
                                        We emphasise experiential learning through case studies, simulations,
                                        projects, and real-world applications that translate knowledge into action.
                                    </p>
                                    <p>
                                        <strong>Certification</strong>:
                                        Participants receive recognised certification that validates their skills,
                                        knowledge, and professional development, enhancing credibility and career
                                        advancement.
                                    </p>
                                    <p>
                                        <strong>Global Competitiveness</strong>: 
                                        Our programs are designed to prepare participants to operate confidently
                                        in local and international markets, strengthening competitiveness,
                                        adaptability, and global relevance.
                                    </p>
                                </div>
                                
                                <img src={ab3} alt='showimage'  id='secondbusinessimg' />
                            </div>
                                <img src={ab3} alt='showimage'  id='showimagein' />
                        </div>
                    </div>
                    <div className='facultyContainer'>
                        <div className='txtcont'>
                        <div className='factext'>Faculty Members</div>
                        </div>
                        <div className='facultyMembers'>
                            <div><img src={member1} alt="member" className='fac1'/></div>
                            <div><img src={member2} alt="member" className='fac1'/></div>
                            <div><img src={member3} alt="member" className='fac1'/></div>
                            <div><img src={member4} alt="member" className='fac1'/></div>
                        </div>
                    </div>
                    <div className='numbusiness'>
                        <div className='theprofbusiness'>
                            <h3>Practical class</h3>
                            <div className='progsides' id='galleryimages1'>
                                <div className='imagegal1'>
                                    <img src={gal1} alt='gal1' className='galleryimage'/> 
                                    <img src={gal2} alt='gal1' className='galleryimage'/> 
                                </div>
                                <div className='imagegal1'>
                                    <img src={gal3} alt='gal1' className='galleryimage'/> 
                                    <img src={gal4} alt='gal1' className='galleryimage'/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessSchool
