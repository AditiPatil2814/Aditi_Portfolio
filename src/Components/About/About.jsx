import React from 'react'
import'./About.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import profile_img from '../../assets/assets/Aditi_profile.jpeg'

const About = () => {
  return (
    <div  id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt =""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt='' />
        </div>
        <div className="right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis minima temporibus explicabo veritatis nam in suscipit numquam, impedit, sit tempora consequuntur est, illum rem ea quaerat quasi ratione magni culpa.</p>
                
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>MERN Stack</p><hr style={{width:"50%"}}></hr></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{width:"70%"}}></hr></div>
                <div className="about-skill"><p>C++</p><hr style={{width:"60%"}}></hr></div>
                <div className="about-skill"><p>MERN Stack</p><hr style={{width:"50%"}}></hr></div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  )
}

export default About
