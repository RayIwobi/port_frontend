import { Link, useNavigate } from 'react-router-dom'
import '../home.css'
import catch1 from './assets/catch1.jpg'
import catch2 from './assets/catch2.jpg'
import catch3 from './assets/catch3.jpg'
import world from '../assets/world.png'
import richi from '../assets/richi.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import email from "../assets/email.png"
import handpointing from './assets/handpointing.png'
import arrowleft from '../assets/arrowleft.png'

function Catchline() {
    const navigate = useNavigate()

    const handleclick = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className='mainContainer'>
                <div className='portfolioname'>My Portfolio</div>
                <div className='sideContent'>
                    <img src={richi} alt='portfolioImage' className='portfolioImage' />
                    <div className='homecontent'>
                        <div id='name'>Raymond Iwobi</div>
                        <div id='brief'>I design and build full-stack applications that
                            solve real problems and deliver great user experiences.
                        </div>
                        <div className='antonclu'>
                            <div id='icons'>
                                <Link to='https://portfolio-zeta-one-if72k9ugz5.vercel.app/'><img src={world} alt='portfolio' /></Link>
                                <Link to='https://github.com/rayiwobi'><img src={github} alt='github' /></Link>
                                <Link to='https://www.linkedin.com/in/raymond-iwobi-843785157/'><img src={linkedin} alt='linkedin' /></Link>
                                <Link to='mailto:rayicon@gmail.com'><img src={email} alt='email' /></Link>
                            </div>
                            <img src={arrowleft} alt='arrow' onClick={handleclick} className='arrowleft' />
                        </div>
                    </div>

                </div>
                <div className='maincontent'>
                    <button onClick={handleclick} id='backbtn'></button>
                    <div className='maincontent-inner'>
                        <div className='experienceContainer'>
                            <div>

                                <div className='projectpages'>
                                    <h1>Catchline Group – Business Consulting & Development Platform</h1>

                                    <div className='thelinknavigation'>
                                        <img src={handpointing} alt='livewebsite' />
                                        <Link to='https://www.catchlinegroup.com'>Live website</Link>
                                    </div>

                                    <img src={catch1} alt='ideaimages' className='ideaimages' />
                                    <div className='projectsContent'>
                                        Catchline Group is a professional frontend corporate website built to represent
                                        a leading consulting and business development firm focused on transforming
                                        African businesses for global relevance. The platform is designed to communicate
                                        credibility, expertise, and impact while providing clear access to the organization’s
                                        services and value proposition.

                                        The website opens with a strong hero section that highlights Catchline Group’s mission —
                                        empowering individuals, organizations, and institutions through world-class consulting,
                                        training, and business development solutions. Clear calls to action guide visitors to book
                                        consultations or explore available services.

                                        A dedicated “Who We Are” section introduces Catchline Group as a firm committed to raising
                                        the standard of African businesses through standardization, global best practices, and human
                                        capital development. This section serves as a gateway to a more detailed About page, allowing
                                        visitors to understand the firm’s vision, values, and long-term goals.<br /><br />
                                    </div>
                                    <img src={catch2} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        The platform showcases core service areas through structured service cards, including business
                                        consulting, training and development, coaching and mentorship, quality standards and certification
                                        support, policy advocacy, and market entry advisory. Each service is presented clearly to help clients
                                        quickly identify solutions relevant to their needs.

                                        The overall design emphasizes professionalism, clarity, and trust, aligning with the expectations of
                                        corporate clients, institutions, and decision-makers. The site is optimized for responsiveness,
                                        ensuring accessibility across devices while maintaining a polished, executive-level look.<br /><br />
                                    </div>

                                    <img src={catch3} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        <p>
                                            Overall, the Catchline Group website demonstrates the ability to build corporate,
                                            content-driven platforms that balance strong branding, clear messaging, and
                                            user-focused navigation, tailored for consulting and professional service organizations.
                                        </p><br /><br />

                                        Key Features<br /><br />

                                        ☆ Professional corporate landing page with strong brand messaging<br />

                                        ☆ Clear hero section with primary and secondary calls to action<br />

                                        ☆ “Who We Are” overview with structured content flow<br />

                                        ☆ Service showcase with multiple consulting and advisory offerings<br />

                                        ☆ Clean, executive-level UI/UX design<br />

                                        ☆ Responsive layout for desktop and mobile users<br />

                                        ☆ Scalable structure for future content and service expansion<br />

                                        Tools & Technologies Used<br /><br />

                                        ☆ Frontend: React.js for building a modern, component-based interface<br />

                                        ☆ Styling: CSS / modern styling techniques for a clean corporate design<br />

                                        ☆ Routing: React Router for multi-page navigation (About, Services, etc.)<br />

                                       ☆ UI/UX Design: Professional, business-focused layout and typography<br />

                                        ☆ Performance: Optimized components for fast loading and smooth navigation<br />

                                        ☆ Deployment: Cloud hosting for reliability and accessibility<br />
                                    </div>
                                    <div className='facticons'>
                                        <Link to='https://github.com/RayIwobi/Catchline_Group' ><div className='conicons'></div> </Link>
                                        <Link to='https://www.catchlinegroup.com'><button className='coniconsbutton'>live website</button></Link>
                                    </div><br />
                                </div>
                                <div id='registry' >
                                    <h6>Built by Raymond Iwobi | Powered by React</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catchline
