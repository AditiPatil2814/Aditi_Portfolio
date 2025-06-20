import React from 'react'
import './Hero.css'
import profile_img from '../../assets/assets/Aditi_profile.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=" " />
        <h1><span>I'm Aditi Patil,</span> Full stack developer</h1>
        <p>I am student at DYPCOE pursuing Computer Engineering</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>


        </div>
    
    
    </div>
  )
}

export default Hero
