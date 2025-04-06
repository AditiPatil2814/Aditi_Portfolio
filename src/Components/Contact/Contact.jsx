import React from 'react'
import'./Contact.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import mail_icon from '../../assets/assets/mail_icon.svg'
import location_icon from '../../assets/assets/location_icon.svg'
import call_icon from '../../assets/assets/call_icon.svg'



const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ea806c6c-10a0-40ad-b1b1-42d97302a5fe");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };



  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk</h1>
                <p>I'm currently avilable to taje on new project, so feel free to call me</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=''/>
                        <p>patiladiti693@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt=''/>
                        <p>9356647162</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt=''/>
                        <p>Pune, Maharashtra</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' />
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email' />
                <label htmlFor=''>Write your message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'/>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
