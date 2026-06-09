import { Link, useNavigate } from 'react-router-dom'
import '../home.css'
import yar1 from './assets/yar1.jpg'
import yar2 from './assets/yar2.jpg'
import world from '../assets/world.png'
import richi from '../assets/richi.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import email from "../assets/email.png"
import handpointing from './assets/handpointing.png'
import arrowleft from '../assets/arrowleft.png'

function Yarnix() {
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
                                    <h1>Yarnix – Social Media Networking Platform</h1>

                                    <div className='thelinknavigation'>
                                        <img src={handpointing} alt='livewebsite' />
                                        <Link to=''>Live website</Link>
                                    </div>

                                    <img src={yar1} alt='ideaimages' className='ideaimages' />
                                    <div className='projectsContent'>
                                        Yarnix is a full-stack social media application built to connect users through
                                        posts, interactions, and real-time engagement. Inspired by modern social
                                        networking platforms, Yarnix focuses on creating a familiar yet streamlined
                                        experience where users can share content, interact with others, and build
                                        digital communities.<br /><br />

                                        The platform allows users to create accounts, personalize profiles, and publish
                                        posts, making it easy to share thoughts, updates, and content with others. Users
                                        can engage with posts through likes and comments, encouraging interaction and
                                        conversation across the platform.<br /><br />

                                        Yarnix supports real-time social interactions, ensuring users see updates and
                                        responses instantly. This enhances engagement and creates a dynamic, live social
                                        experience rather than a static feed.<br /><br />
                                    </div>
                                    <img src={yar2} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        A personalized feed system displays posts from users across the platform, enabling
                                        content discovery and continuous engagement. Users can explore, react, and participate
                                        in conversations naturally, similar to mainstream social media platforms.<br /><br />

                                        Security and privacy are central to Yarnix. Authentication ensures that user actions
                                        such as posting, commenting, and liking are restricted to logged-in users, while
                                        ownership-based permissions prevent unauthorized actions on content.<br />
                                    </div>



                                    <div className='projectsContent'>
                                        Overall, Yarnix demonstrates a scalable social media architecture, combining real-time
                                        interaction, user-generated content, and secure authentication into a cohesive, modern
                                        platform.<br /><br />

                                        Key Features<br /><br />

                                        ☆ User authentication and profile creation<br />

                                        ☆ Create, edit, and delete posts<br />

                                        ☆ Like and comment on posts<br />

                                        ☆ Real-time updates for interactions<br />

                                        ☆ Personalized content feed<br />

                                        ☆ Secure access to user-only actions<br />

                                        ☆ Responsive, modern UI<br /><br />

                                        Tools & Technologies Used<br /><br />

                                        ☆ Frontend: React.js for building an interactive social interface<br />

                                        ☆ Backend: Node.js and Express.js for handling APIs and business logic<br />

                                        ☆ Database: MongoDB for storing users, posts, comments, and likes<br />

                                        ☆ Real-Time Communication: WebSockets (Socket.IO) for instant updates and interactions<br />

                                        ☆ Authentication: JWT-based authentication for secure user sessions<br />

                                        ☆ State Management: React Hooks and Context API<br />

                                        ☆ API Communication: RESTful APIs with Axios<br />

                                        ☆ Routing: React Router for navigation and protected routes<br />

                                        ☆ Security: Authorization checks for post and comment ownership<br />

                                        ☆ Deployment: Cloud-based hosting for scalability<br />
                                    </div>
                                    <div className='facticons'>
                                        <Link to='' ><div className='conicons'></div> </Link>
                                        <Link to=''><button className='coniconsbutton'>live website</button></Link>
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

export default Yarnix
