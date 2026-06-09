import React from 'react'
import react from '../assets/tooldimage/react.png'
import node from '../assets/tooldimage/node.png'
import postman from '../assets/tooldimage/postman.png'
import vscode from '../assets/tooldimage/vscode.png'
import freepik from '../assets/tooldimage/freepik.png'
import vercel from '../assets/tooldimage/vercel.png'
import chatgpt from '../assets/tooldimage/chatgpt.png'
import aws from '../assets/tooldimage/aws.png'
import { useState, useEffect } from "react";
// import { FaReact, FaBolt, FaStar } from "react-icons/fa";

function Tools() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 0),      // Show React icon (rotate)
            setTimeout(() => setStep(2), 2000),   // Show Bolt icon (flash)
            setTimeout(() => setStep(3), 4000),   // Show Star icon (other animation)
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className='toolscontainer'>
            <div>
                <div className='portfolio-title'>
                    <div>TOOLS </div>
                    <div id='devcolor'>THAT I USE</div>
                    <div className='longline'></div>
                </div>
                <div className='toolsicon'>
                    <div className='inicon'>
                        <div className='logobg'>
                            <img src={react} alt='toolsimages' className="react-logo" />
                        </div>
                        <div>
                            <div id='title'>React</div>
                            <div id='descr'>Programming language</div>
                        </div>
                    </div>
                    <div className='inicon'>
                        <div className='logobg'>
                        <img src={node} alt='toolsimages' />
                        </div>
                        <div>
                            <div id='title'>Node</div>
                            <div id='descr'>Programming language</div>
                        </div>
                    </div>
                    <div className='inicon'>
                        <div className='logobg'>
                        <img src={postman} alt='toolsimages' />
                        </div>
                        <div>
                            <div id='title'>Postman</div>
                            <div id='descr'>API Tester</div>
                        </div>
                    </div>
                    <div className='inicon'>
                        <div className='logobg'>
                        <img src={vscode} alt='toolsimages' />
                        </div>
                        <div>
                            <div id='title'>VSCode</div>
                            <div id='descr'>Integrated Development Environment</div>
                        </div>
                    </div>
                    <div className='inicon'>
                        <div className='logobg'>
                        <img src={freepik} alt='toolsimages' />
                        </div>
                        <div>
                            <div id='title'>FreePik</div>
                            <div id='descr'>Image Library</div>
                        </div>
                    </div>
                    <div className='inicon'>
                        <div className='logobg'>
                        <img src={chatgpt} alt='toolsimages' className="react-logo" />
                        </div>
                        <div>
                            <div id='title'>Chat GPT</div>
                            <div id='descr'>AI Assistant</div>
                        </div>
                    </div>
                    <div className='inicon'>
                        <div className='logobg'>
                        <img src={aws} alt='toolsimages' />
                        </div>
                        <div>
                            <div id='title'>AWS</div>
                            <div id='descr'>Cloud Services</div>
                        </div>
                    </div>
                    <div className='inicon'>
                        <div className='logobg'>
                        <img src={vercel} alt='toolsimages' />
                        </div>
                        <div>
                            <div id='title'>Vercel</div>
                            <div id='descr'>Programming language</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools
