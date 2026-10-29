import { Link, useNavigate } from 'react-router-dom'
import '../home.css'
import movie1 from './assets/movie1.jpg'
import movieplace from './assets/movieplace.jpg'
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
                                    <h1>Movie Info API – Dynamic Movie Data Retrieval Service </h1>

                                    <div className='thelinknavigation'>
                                        <img src={handpointing} alt='livewebsite' />
                                        <Link to='https://movieapp-y4hw.onrender.com/'>
                                            Live website
                                        </Link>
                                    </div>

                                    <img src={movieplace} alt='ideaimages' className='ideaimages' />
                                    <div className='projectsContent'>
                                        The Movie Info API is a backend-driven application designed to fetch, process,
                                        and serve detailed movie information from an external data source. The project
                                        focuses on building a reliable API that delivers structured, up-to-date movie
                                        data for use in frontend applications, dashboards, or third-party integrations.<br /><br />

                                        The API allows users to search for movies by title and retrieve essential details
                                        such as release year, genre, ratings, plot summaries, and cast information. By
                                        transforming external API responses into clean, consistent formats, the system
                                        ensures data is easy to consume and display.<br /><br />

                                        This project demonstrates strong experience with API consumption, data normalization,
                                        and error handling, as well as building scalable backend endpoints that act as a
                                        middleware layer between external services and client applications.<br /><br />
                                    </div>
                                    <img src={movie1} alt='ideaimages' className='ideaimages' />

                                    <div className='projectsContent'>
                                        Overall, the Movie Info API highlights backend development skills, third-party API
                                        integration, and clean data handling practices.<br /><br />

                                        Key Features<br /><br />

                                        ☆ Search movies by title<br />

                                        ☆ Fetch detailed movie information (genre, ratings, plot, cast, release year)<br />

                                        ☆ Clean and normalized API responses<br />

                                        ☆ Graceful handling of missing or incomplete data<br />

                                        ☆ Reusable endpoints for frontend or external consumption<br />

                                        ☆ Fast and lightweight response structure<br />

                                        Tools & Technologies Used<br /><br />

                                        ☆ Runtime: Node.js<br />

                                        ☆ Backend Framework: Express.js for building RESTful endpoints<br />

                                        ☆ External API: Public movie database API (e.g. OMDb / TMDB)<br />

                                        ☆ HTTP Requests: Axios / Fetch for API communication<br />

                                        ☆ Data Processing: JavaScript for transforming and validating responses<br />

                                        ☆ Environment Management: dotenv for managing API keys securely<br />

                                        ☆ Response Format: JSON for structured data delivery<br />

                                        ☆ Error Handling: Centralized error handling and validation<br />

                                    </div>
                                    <div className='facticons'>
                                        <Link to='https://github.com/RayIwobi/MovieApp' >
                                            <div className='conicons'></div>
                                        </Link>

                                        <Link to='https://movieapp-y4hw.onrender.com/'>
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
