import { Link, useNavigate } from 'react-router-dom'
import '../home.css'
import eco1 from './assets/eco1.png'
import eco2 from './assets/eco2.jpg'
import eco3 from './assets/eco3.jpg'
import world from '../assets/world.png'
import richi from '../assets/richi.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import email from "../assets/email.png"
import handpointing from './assets/handpointing.png'
import arrowleft from '../assets/arrowleft.png'

function Ecommerce() {
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
                                    <h1>NediFoods – Full-Stack E-commerce Web Application </h1>

                                    <div className='thelinknavigation'>
                                        <img src={handpointing} alt='livewebsite' />
                                        <Link to='https://ecommerce-food-psi.vercel.app/'>Live website</Link>
                                    </div>

                                    <img src={eco1} alt='ideaimages' className='ideaimages' />
                                    <div className='projectsContent'>
                                        NediFoods is a full-stack e-commerce platform built to deliver a
                                        smooth, secure, and scalable online shopping experience for food
                                        products. The application was designed to handle the complete customer
                                        journey — from product discovery and category-based browsing to secure
                                        checkout, order processing, and post-payment workflows.<br /><br />

                                        The platform features a modern, responsive user interface that allows
                                        customers to browse products by category, view detailed product information,
                                        manage their shopping cart, and place orders effortlessly across devices.<br /><br />

                                        NediFoods integrates a secure online payment system, enabling customers to
                                        complete purchases using a streamlined checkout flow. Payments are processed
                                        through a third-party payment gateway, with the backend verifying transactions
                                        and handling post-payment logic to ensure accuracy and reliability.<br /><br />
                                    </div>
                                    <img src={eco3} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        On the backend, NediFoods includes robust product and order management, allowing
                                        administrators to create, update, and manage products efficiently. Orders are securely
                                        stored in the database after successful payments, making them accessible for tracking,
                                        record-keeping, and future analytics.<br /><br />

                                        Authentication is handled using JWT-based sessions stored in HTTP-only cookies, ensuring
                                        secure user login and protected access to user-specific features such as order history
                                        and account information.<br /><br />

                                        The system also supports automated email notifications, sending order confirmations and
                                        alerts after successful purchases. This improves transparency and enhances trust between
                                        the business and customers.<br /><br />
                                    </div>

                                    <img src={eco2} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        Overall, NediFoods demonstrates a real-world e-commerce solution built with scalability,
                                        security, and user experience in mind, showcasing a complete end-to-end commerce workflow
                                        from frontend to backend.<br /><br />

                                        Key Features<br /><br />

                                        ☆ Product browsing with category-based navigation<br />

                                        ☆ Shopping cart with quantity and price calculations<br />

                                        ☆ Secure checkout and payment processing<br />

                                        ☆ Order creation and storage after successful payment<br />

                                        ☆ User authentication with protected routes<br />

                                        ☆ Automated email notifications for orders<br />

                                        ☆ Admin product management system<br />

                                        ☆ Responsive design for mobile and desktop<br /><br />

                                        Tools & Technologies Used<br /><br />

                                        ☆ Frontend: React.js for a dynamic and responsive UI<br />

                                        ☆ Backend: Node.js and Express.js for API handling and business logic<br />

                                        ☆ Database: MongoDB for storing users, products, carts, and orders<br />

                                        ☆ Payments: Stripe Checkout integration for secure online payments<br />

                                        ☆ Authentication: JWT stored in HTTP-only cookies<br />

                                        ☆ Email Services: Nodemailer with Mailtrap for email testing and delivery<br />

                                        ☆ State Management: React Hooks and Context API / Reducer pattern<br />

                                        ☆ API Communication: RESTful APIs with Axios<br />

                                        ☆ Security: Protected routes, server-side validation, and secure cookies<br />

                                        ☆ Deployment: Cloud hosting for frontend and backend services<br />
                                    </div>
                                    <div className='facticons'>
                                        <Link to='https://github.com/RayIwobi/ecommerce-clientside' ><div className='conicons'></div> </Link>
                                        <Link to='https://ecommerce-food-psi.vercel.app/'><button className='coniconsbutton'>live website</button></Link>
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

export default Ecommerce
