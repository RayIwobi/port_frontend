import React from 'react'
import './home.css'
import richi from './assets/richi.jpg'
import world from './assets/world.png'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import email from './assets/email.png'
import HomePage from './HomePage'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className='mainContainer'> 
                <div className='portfolioname'>My Portfolio</div>
                <div className='sideContent'>
                        <img src={richi} alt='portfolioImage' className='portfolioImage' />
                    <div className='homecontent'>
                        <div id='name'>Raymond Iwobi</div>
                        <div id='brief'>I design and build frontend and full-stack applications that
                            solve real problems and deliver great user experiences.
                        </div>
                        <div id='icons'>
                            <Link to='https://portfolio-zeta-one-if72k9ugz5.vercel.app/'><img src={world} alt='portfolio' /></Link>
                            <Link to='https://github.com/rayiwobi'><img src={github} alt='github' /></Link>
                            <Link to='https://www.linkedin.com/in/raymond-iwobi-843785157/'><img src={linkedin} alt='linkedin' /></Link>
                            <Link to='mailto:rayicon@gmail.com'><img src={email} alt='email' /></Link>
                        </div>
                    </div>

                </div>
                <div className='maincontent'>
                    <div className='maincontent-inner'>
                    <HomePage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
