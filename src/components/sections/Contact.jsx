
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './sections.css'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_iuwzaut', 'template_u95efar', form.current, {
                publicKey: '-jZ2Fuctdb1E1mzvW',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setName("")
                    setEmail("")
                    setContent("")
                    toast.success('Your message has been sent');

                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("There was a problem")
                },
            );
       

    };
    return (
        <div className='contactContainer'>
            <ToastContainer />
            <div>
                <div className='portfolio-title'>
                    <div>LET'S WORK</div>
                    <div id='devcolor'>TOGETHER</div>
                    <div className='longline'></div>
                    <div className='forminput'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='inputsec'>
                                <div className='innercontact'>

                                    <label>Name</label>
                                    <input required
                                        type='name'
                                        name="user_name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='Your name'
                                    />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input required
                                        type='email'
                                        name="user_email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Your email'
                                        id='email'
                                    />
                                </div>
                            </div>
                            <label>Message</label>
                            <textarea required
                                type='text'
                                name='message'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder='Message'
                                className='contentarea'
                            />
                            <input type='submit' value="Send" className='contactSubmit' />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact