import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/assets/footer_logo.svg'
import user_icon from '../../assets/assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src= {footer_logo} alt=''/>
                <p>I'm a frontend developer from, Pune. I am fresher but I have hands on experience about projects   </p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Aditi Patil. All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Term od Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>

        
      </div>
    </div>
  )
}

export default Footer
