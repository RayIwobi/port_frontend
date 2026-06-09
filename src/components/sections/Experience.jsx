import React from 'react'
import './sections.css'
import innerball from '../assets/rec.png'

function Experience() {
    return (
        <div className='experienceContainer'>
            <div>
                <div className='portfolio-title'>
                    <div>MY</div>
                    <div id='devcolor'>EXPERIENCE</div>
                    <div className='longline'></div>
                </div>

                <div className='experienceContent'>

                    <div className='experiencedesign'>
                        <div>
                            <img src={innerball} alt='snowball' className='roundball' />
                            <div className='linex'></div>
                        </div>
                        <div>
                            <div>
                                <div>NediFoods Limited (United Kingdom / Remote) — Full-Stack Developer</div>
                                <p>
                                    <li>Developed and maintained e-commerce applications using the MERN stack.</li>
                                    <li>Integrated Stripe Checkout + webhooks to automate order processing and emails;</li>
                                    <li>lowered payment failures by 50% and support tickets by 45%.</li>
                                    <li>Shipped CI/CD with GitHub Actions to Vercel/Render, achieving 35% faster release cadence;</li>
                                    <li> Mentored 2–3 juniors on best practices.</li>
                                    <li>Implemented JWT authentication with HTTP-only cookies.</li>
                                    <li> Optimized API performance, reducing response time by 35%.</li>
                                </p>
                                <div>Jan 2024 – Present</div>
                            </div>
                        </div>
                    </div>

                    <div className='experiencedesign'>
                        <div>
                            <img src={innerball} alt='snowball' className='roundball' />
                        </div>
                        <div>
                            <div>
                                <div>Independent Software Consultant (Self-Employed)</div>
                                <p>
                                    <li>Contributed to full-stack projects across real estate and travel sectors.</li>
                                    <li>Developed responsive frontend components with React and styled-components.</li>
                                    <li>Created and consumed RESTful APIs to power search filters, booking engines, and contact forms.</li>
                                    <li>Worked closely with designers and QA to ensure accessibility, responsiveness, and pixel-perfect implementation.</li>
                                    <li>Wrote unit tests for backend endpoints and frontend UI components.</li>
                                    <li>Participated in code reviews, agile sprint planning, and stand-ups to align with project goals and ensure timely delivery.</li>
                                    <li>Deployed applications to Netlify, Vercel, and Render, managing environment variables, build pipelines, and custom domain configurations.</li>
                                    <li>Integrated third-party services such as Google Maps API, Cloudinary (for media management), and location-based search filters to enhance user experience.</li>
                                </p>
                                <div>May 2023 – Dec 2023</div> 
                            </div>
                        </div>
                    </div>

                    <div className='experiencedesign'>
                        <div>
                            <img src={innerball} alt='snowball' className='roundball' />
                        </div>
                        <div>
                            <div>
                                <div>Techlod Nig (Nigeria) — Junior Web Developer</div>
                                <p>
                                    <li>Built REST APIs for e-commerce, social media, and internal tools.</li>
                                    <li>Developed search filters, booking engines, and contact forms.</li>
                                    <li>Wrote unit tests for APIs and React components.</li>
                                    <li>Collaborated with designers and QA for accessibility and responsiveness.</li>
                                    <li>Acted Deployed apps to Netlify, Vercel, and Render with CI/CD pipelines.</li>
                                    <li>Integrated Google Maps API, Cloudinary, and location-based search features.</li>
                                    <li>Achievement: Delivered a client SPA with 100% Lighthouse performance score.</li>

                                </p>
                                <div>Aug 2020 – Apr 2023</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience
