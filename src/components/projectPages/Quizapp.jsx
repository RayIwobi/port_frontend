import { Link, useNavigate } from 'react-router-dom'
import '../home.css'
import world from '../assets/world.png'
import richi from '../assets/richi.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import email from "../assets/email.png"
import handpointing from './assets/handpointing.png'
import waec from '../projectPages/assets/waec.png'
import waec1 from '../projectPages/assets/waec1.png'
import waec3 from '../projectPages/assets/waec3.jpg'
import arrowleft from '../assets/arrowleft.png'

function Quizapp() {
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
                                    <h1>WAEC CBT Quiz Application – Computer-Based Test Preparation Platform</h1>

                                    <div className='thelinknavigation'>
                                        <img src={handpointing} alt='livewebsite' />
                                        <Link to='https://quizapp-eco.vercel.app/'>Live website</Link>
                                    </div>

                                    <img src={waec} alt='ideaimages' className='ideaimages' />
                                    <div className='projectsContent'>
                                        The WAEC CBT Quiz Application is an interactive computer-based testing platform
                                        designed to help students prepare effectively for the WAEC examination in a real
                                        exam-like environment. The application simulates the CBT experience, allowing students
                                        to practice questions, manage time, and assess their readiness before the actual exam.<br /><br />

                                        The platform provides subject-based quizzes aligned with the WAEC curriculum,
                                        enabling students to attempt questions under timed conditions. Each quiz mirrors
                                        the real CBT format, helping users become familiar with navigation, question flow,
                                        and pressure management.<br /><br />

                                        A built-in automatic scoring system evaluates answers instantly and provides results
                                        at the end of each session. Students can review their performance, identify weak areas,
                                        and improve through repeated practice.<br /><br />
                                    </div>
                                    <img src={waec3} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        The application features a clean, distraction-free interface optimized for focus
                                        and usability. It ensures smooth navigation between questions, supports answer
                                        selection and changes, and maintains progress throughout the test session.<br /><br />

                                        To enhance learning, the system allows users to retake quizzes, track improvement
                                        over time, and build confidence through consistent practice. This makes the platform a
                                        valuable tool for exam readiness and self-assessment.<br /><br />

                                        Overall, the WAEC CBT Quiz Application delivers a realistic, user-friendly exam
                                        preparation experience, combining functionality, accuracy, and performance to support
                                        student success.<br /><br />
                                    </div>

                                    <img src={waec1} alt='ideaimages' className='ideaimages' id='mobile' />

                                    <div className='projectsContent'>
                                        Key Features<br /><br />

                                        ☆ CBT-style exam interface similar to WAEC exams<br />

                                        ☆ Subject-based and topic-based quizzes<br />

                                        ☆ Timed tests with countdown timer<br />

                                        ☆ Automatic grading and result calculation<br />

                                        ☆ Question navigation and answer review<br />

                                        ☆ Retake quizzes for continuous improvement<br />

                                        ☆ Responsive design for multiple devices<br /><br />

                                        Tools & Technologies Used<br /><br />

                                        ☆ Frontend: React.js for building an interactive and responsive user interface<br />

                                        ☆ State Management: React Hooks for handling quiz flow, timer, and score logic<br />

                                        ☆ Backend / Data Handling: JavaScript-based logic for question management and evaluation<br />

                                        ☆ Database (if applicable): JSON / MongoDB for storing questions and results<br />

                                        ☆ Routing: React Router for smooth navigation between quiz screens<br />

                                        ☆ UI/UX: Focused, minimal design optimized for exam simulation<br />

                                        ☆ Deployment: Cloud hosting for easy access and reliability<br />
                                    </div>
                                    <div className='facticons'>
                                        <Link to='https://github.com/RayIwobi/quizapp_sample' ><div className='conicons'></div> </Link>
                                        <Link to='https://quizapp-eco.vercel.app/'><button className='coniconsbutton'>live website</button></Link>
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

export default Quizapp
