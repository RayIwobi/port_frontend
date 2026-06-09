import { Link, useNavigate } from 'react-router-dom'
import '../home.css'
import idea2 from './assets/idea2.jpg'
import idea3 from './assets/idea3.jpg'
import idea1 from './assets/idea1.jpg'
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
                                    <h1>ideaVault – Creative Idea Management & Collaboration Platform </h1>
                                    <div style={{color:'yellow'}}>(development is ongoing - view site on desktop)</div>

                                    <div className='thelinknavigation'>
                                        <img src={handpointing} alt='livewebsite' />
                                        <Link to='https://idea-vault-seven.vercel.app/'>Live website</Link>
                                    </div>

                                    <img src={idea3} alt='ideaimages' className='ideaimages' />
                                    <div className='projectsContent'>
                                        IdeaVault is a full-featured creative platform designed to
                                        help individuals and teams capture, refine, and grow their
                                        ideas from initial sparks into structured, actionable concepts.
                                        It serves as a central hub for creativity, collaboration, and
                                        long-term idea storage.<br /><br />

                                        At its core, IdeaVault allows users to securely store ideas for
                                        future use, ensuring no inspiration is ever lost. Users can organize,
                                        revisit, and evolve their ideas over time, making it ideal for creators,
                                        entrepreneurs, writers, and innovators who need a reliable system for
                                        managing creative thoughts.<br /><br />

                                        The platform provides tools for fine-tuning and developing ideas, helping
                                        users transform rough concepts into clear, well-defined plans. Whether
                                        refining a startup concept, shaping written content, or improving creative
                                        projects, IdeaVault supports structured thinking and iteration.<br /><br />
                                    </div>
                                    <img src={idea2} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        IdeaVault also includes an Idea Generator that produces fresh ideas across
                                        different categories, helping users overcome creative blocks and explore new
                                        directions when inspiration runs low.<br /><br />

                                        A dedicated Creative Bowl allows users to freely write, brainstorm, and explore
                                        ideas in a distraction-free environment. This space is designed for raw creativity,
                                        journaling, and experimentation without constraints.<br /><br />

                                        Collaboration is a core feature of IdeaVault. Users can chat and interact with other
                                        members in real time, exchange feedback, and collaborate on ideas. Real-time
                                        communication creates a sense of community and enables instant discussion and idea
                                        sharing.<br /><br />
                                    </div>

                                    <img src={idea1} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        Additional features include:<br /><br />

                                        ☆ Secure idea storage with easy organization and retrieval<br />

                                        ☆ Real-time chat and collaboration between users<br />

                                        ☆ Community-driven discussions and creative feedback<br />

                                        ☆ Clean, intuitive UI focused on creative workflows<br /><br />

                                        Tools & Technologies Used<br /><br />

                                        ☆ Frontend: React.js for building a dynamic, component-based user interface<br />

                                        ☆ Backend: Node.js and Express.js for handling APIs, authentication, and business logic<br />

                                        ☆ Database: MongoDB for scalable storage of user ideas, chats, and creative content<br />

                                        ☆ Real-Time Communication: WebSockets (Socket.IO) for live chat, instant messaging, and real-time interactions between users<br />

                                        ☆ Authentication: JWT-based authentication for secure user sessions<br />

                                        ☆ State Management: React Hooks and Context API for managing application state<br />

                                        ☆ API Communication: RESTful APIs for frontend-backend interaction<br />

                                        ☆ Deployment & Hosting: Cloud deployment for scalability and reliability<br />

                                        ☆ Security: Protected routes and server-side validation to ensure data integrity<br /><br />

                                        IdeaVault is more than just an idea notebook—it’s a creative ecosystem that combines
                                        idea generation, refinement, storage, and real-time collaboration, empowering users to
                                        turn inspiration into meaningful outcomes.
                                    </div>
                                    <div className='facticons'>
                                        {/* <Link to='' ><div className='conicons'></div> </Link> */}
                                        <Link to='https://idea-vault-seven.vercel.app/'><button className='coniconsbutton'>live website</button></Link>
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
