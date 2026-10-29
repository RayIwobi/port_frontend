import { Link, useNavigate } from 'react-router-dom'
import '../home.css'
import scraper from './assets/scraper.jpg'
import scraper1 from './assets/scraper1.jpg'
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
                                    <h1>Amazon Web Scraper – Automated Product Data Extraction Tool</h1>

                                    <div className='thelinknavigation'>
                                        <img src={handpointing} alt='livewebsite' />
                                        <Link to='https://amazon-scrapert.vercel.app/'>Live website</Link>
                                    </div>

                                    <img src={scraper} alt='ideaimages' className='ideaimages' />
                                    <div className='textIntro'>
                                        <div className='projectsContent'>
                                            The Amazon Web Scraper is a backend-focused automation tool built to extract
                                            structured product data from Amazon product pages. The project demonstrates
                                            practical experience in web scraping, data parsing, and automation while handling
                                            real-world challenges such as dynamic content and data consistency.<br /><br />

                                            The scraper is designed to collect key product information including product
                                            titles, prices, ratings, availability status, and images, transforming unstructured
                                            web content into clean, usable data. This makes it useful for price tracking,
                                            market research, competitor analysis, and data-driven decision-making.<br /><br />

                                            The application processes scraped data and outputs it in a structured format
                                            that can be stored, analyzed, or integrated into other systems. Emphasis was
                                            placed on reliability, efficiency, and accuracy during data extraction.<br /><br />
                                        </div>
                                        <img src={scraper1} alt='ideaimages' className='ideaimages' />

                                        <div className='projectsContent'>
                                            The project highlights an understanding of HTTP requests, DOM parsing, and
                                            anti-scraping considerations, while maintaining a clean and maintainable codebase.<br /><br />

                                            Overall, the Amazon Web Scraper showcases backend engineering skills, automation
                                            logic, and real-world data handling techniques.<br />
                                        </div>


                                        <div className='projectsContent'>
                                            Key Features<br /><br />

                                            ☆ Scrapes Amazon product pages for structured data<br />

                                            ☆ Extracts product name, price, ratings, availability, and images<br />

                                            ☆ Parses and cleans HTML content into usable data<br />

                                            ☆ Handles dynamic page structures and missing data gracefully<br />

                                            ☆ Outputs data in structured formats (JSON)<br />

                                            ☆ Designed for reuse and extension<br /><br />

                                            Tools & Technologies Used<br /><br />

                                            ☆ Runtime: Node.js for executing scraping logic<br />

                                            ☆ HTTP Requests: Axios / Fetch for requesting Amazon pages<br />

                                            ☆ HTML Parsing: Cheerio for DOM traversal and data extraction<br />

                                            ☆ Data Processing: JavaScript for cleaning and structuring scraped data<br />

                                            ☆ Output Format: JSON for easy storage and integration<br />

                                            ☆ Error Handling: Try/catch and fallback selectors for resilience<br />

                                            ☆ Environment Management: dotenv for managing configuration<br />

                                        </div>
                                    </div>
                                    <div className='facticons'>
                                        <Link to='https://github.com/rayiwobi/Amazon-Scraper-API_backend-project' ><div className='conicons'></div> </Link>
                                        <Link to='https://amazon-scrapert.vercel.app/'><button className='coniconsbutton'>live website</button></Link>
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
