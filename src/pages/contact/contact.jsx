import React from 'react'
import "../contact/contact.css"
import EmailIcon from '@mui/icons-material/Email';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Contact() {
    return (
        <div className='contact'>
            <h4>Contact Me</h4>
            <div className="details">
                <div className="row">
                    <EmailIcon />
                    <p>abdulofficialbtw@gmail.com</p>
                </div>
                <div className="row">
                    <PhoneCallbackIcon />
                    <p>6374558285</p>
                </div>
                <div className="row">
                    <GitHubIcon />
                    <a href='https://github.com/Mrabdulbtw'>https://github.com/Mrabdulbtw</a>
                </div>
            </div>

        </div>
    )
}
