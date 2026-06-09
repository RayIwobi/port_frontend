import { Link, useNavigate } from 'react-router-dom'
import '../home.css'
import authenticate from './assets/authenticate.jpg'
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
                                    <h1>Authentication & Login System – Secure User Access Management</h1>

                                    <div className='thelinknavigation'>
                                        <img src={handpointing} alt='livewebsite' />
                                        <Link to='https://authenticate-taupe.vercel.app'>Live website</Link>
                                    </div>

                                    <img src={authenticate} alt='ideaimages' className='ideaimages' />
                                    <div className='projectsContent'>
                                        The Authentication & Login System is a robust user access management solution
                                        built to securely handle user registration, login, session management, and
                                        protected access across a full-stack application. The system focuses on security,
                                        reliability, and user experience, ensuring that only authorized users can access
                                        protected resources.<br /><br />

                                        Users can create accounts, log in securely, and maintain authenticated sessions
                                        across the application. Authentication is designed to protect sensitive user data
                                        while providing a smooth and intuitive login experience.<br /><br />

                                        The system enforces protected routes and role-based access control, ensuring that
                                        restricted features are accessible only to authenticated users. User sessions are
                                        managed efficiently to prevent unauthorized access and token misuse.<br />
                                    </div>

                                    <div className='projectsContent'>
                                        Security best practices are implemented throughout the system, including password
                                        hashing, secure token storage, and server-side validation, making the authentication
                                        flow production-ready.<br /><br />

                                        Overall, this project demonstrates a strong understanding of authentication architecture,
                                        secure session handling, and full-stack access control.<br /><br />

                                        Key Features<br /><br />

                                        ☆ User registration and secure login<br />

                                        ☆ Password hashing and credential validation<br />

                                        ☆ JWT-based authentication<br />

                                        ☆ HTTP-only cookie session storage<br />

                                        ☆ Protected routes and authorization middleware<br />

                                        ☆ Secure logout and session invalidation<br />

                                        ☆ Persistent authentication across page refreshes<br />

                                        Tools & Technologies Used<br /><br />

                                        ☆ Frontend: React.js for login forms and protected UI<br />

                                        ☆ Backend: Node.js and Express.js for authentication logic<br />

                                        ☆ Authentication: JSON Web Tokens (JWT)<br />

                                        ☆ Password Security: bcrypt for hashing and salting passwords<br />

                                        ☆ Cookies: HTTP-only cookies for secure token storage<br />

                                        ☆ Middleware: Custom Express middleware for route protection<br />

                                        ☆ Database: MongoDB for storing user credentials<br />

                                        ☆ API Communication: Axios with withCredentials for cookie-based auth<br />

                                        ☆ Environment Management: dotenv for managing secrets<br />
                                    </div>
                                    <div className='facticons'>
                                        <Link to='https://github.com/RayIwobi/Authentication-App_fullstack-project' >
                                            <div className='conicons'></div>
                                        </Link>
                                        <Link to='https://authenticate-taupe.vercel.app/'>
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
