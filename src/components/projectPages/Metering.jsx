import { Link, useNavigate } from 'react-router-dom'
import '../home.css'
import meter1 from './assets/meter1.jpg'
import meter2 from './assets/meter2.jpg'
import meter3 from './assets/meter3.jpg'
import world from '../assets/world.png'
import richi from '../assets/richi.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import email from "../assets/email.png"
import handpointing from './assets/handpointing.png'
import arrowleft from '../assets/arrowleft.png'

function IdeaVault() {
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
                            <img src={arrowleft} alt='arrow' onClick={handleclick} className='arrowleft'/>
                        </div>
                    </div>

                </div>
                <div className='maincontent'>
                    <button onClick={handleclick} id='backbtn'></button>
                    <div className='maincontent-inner'>
                        <div className='experienceContainer'>
                            <div>

                                <div className='projectpages'>
                                    <h1>Metering Website – Energy & Utility Meter Management Platform</h1>

                                    <div className='thelinknavigation'>
                                        <img src={handpointing} alt='livewebsite' />
                                        <Link to='https://metering-website-azure.vercel.app/'>
                                            Live website
                                        </Link>
                                    </div>

                                    <img src={meter3} alt='ideaimages' className='ideaimages' />
                                    <div className='projectsContent'>
                                        The Metering Website is a web-based platform designed to manage, display,
                                        and monitor metering and instrumentation data in a clear and structured way.
                                        The application focuses on presenting complex technical information in an accessible
                                        format, making it useful for engineers, technicians, and stakeholders who need accurate
                                        meter-related insights.<br /><br />

                                        The platform allows users to view and manage meter information, including specifications,
                                        readings, and related instrumentation details. Data is organized in a structured manner,
                                        enabling easy access, clarity, and consistency across the system.<br /><br />

                                        The website emphasizes clarity, accuracy, and usability, transforming technical metering
                                        data into a user-friendly experience. By combining structured data storage with a clean
                                        interface, the system ensures that critical information is both understandable and
                                        actionable.<br /><br />
                                    </div>
                                    <img src={meter2} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        Designed with scalability in mind, the Metering Website can be extended to support
                                        additional meters, data sources, and monitoring features, making it suitable for
                                        eal-world industrial and utility use cases.<br /><br />

                                        Overall, this project demonstrates the ability to build data-driven technical platforms,
                                        handle structured datasets, and present engineering-focused information effectively on
                                        the web.<br /><br />
                                    </div>

                                    <img src={meter1} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        Key Features<br /><br />

                                        ☆ Display and manage metering and instrumentation data<br />

                                        ☆ Structured presentation of meter specifications and details<br />

                                        ☆ Organized data views for clarity and ease of use<br />

                                        ☆ Responsive design for desktop and mobile access<br />

                                        ☆ Scalable architecture for future expansion<br />

                                        ☆ Clean, technical, and user-focused UI<br /><br />

                                        Tools & Technologies Used<br /><br />

                                        ☆ Frontend: React.js for building a structured and responsive interface<br />

                                        ☆ Backend: Node.js and Express.js for handling data logic and APIs<br />

                                        ☆ Database: MongoDB for storing metering and instrumentation data<br />

                                        ☆ API Communication: RESTful APIs for data retrieval and management<br />

                                        ☆ State Management: React Hooks for managing UI state<br />

                                        ☆  UI/UX: Clean, technical layout optimized for data presentation<br />

                                        ☆ Deployment: Cloud hosting for reliability and scalability<br />
                                    </div>
                                    <div className='facticons'>
                                        <Link to='https://github.com/RayIwobi/Wave-Access__fullstack-project'>
                                            <div className='conicons'></div>
                                        </Link>

                                        <Link to='https://metering-website-azure.vercel.app/'>
                                            <button className='coniconsbutton'>live website</button>
                                        </Link>
                                    </div><br/>
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

export default IdeaVault
