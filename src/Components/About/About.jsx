import React from 'react';
import './About.css';
import { FaHtml5,FaCss3Alt,FaJs,FaNodeJs,FaReact,FaGithub,FaJava} from "react-icons/fa";
import { SiMongodb, SiExpress,  SiCplusplus, SiMysql } from "react-icons/si";
import theme_pattern from '../../assets/assets/theme_pattern.svg';
import profile_img from '../../assets/assets/Aditi_profile.jpeg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Computer Engineering student passionate about full-stack development, data systems, and building real-world solutions. I enjoy working with both front-end and back-end technologies and continuously strive to enhance my skills.
            </p>
          </div>
            <div className="about-icons">
      <div className="skill-icon">
        <FaHtml5 size={50} color="#E44D26" />
        <p>HTML</p>
      </div>
      <div className="skill-icon">
        <FaCss3Alt size={50} color="#1572B6" />
        <p>CSS</p>
      </div>
      <div className="skill-icon">
        <FaJs size={50} color="#F7DF1E" />
        <p>JavaScript</p>
      </div>
      <div className="skill-icon">
        <FaReact size={50} color="#61DBFB" />
        <p>React</p>
      </div>
      <div className="skill-icon">
        <SiExpress size={50} color="#000000" />
        <p>Express</p>
      </div>
      <div className="skill-icon">
        <FaNodeJs size={50} color="#3C873A" />
        <p>Node.js</p>
      </div>
      <div className="skill-icon">
        <SiMongodb size={50} color="#47A248" />
        <p>MongoDB</p>
      </div>
      <div className="skill-icon">
        <FaJava size={50} color="#007396" />
        <p>Java</p>
      </div>
      <div className="skill-icon">
        <SiCplusplus size={50} color="#00599C" />
        <p>C++</p>
      </div>
      <div className="skill-icon">
        <SiMysql size={50} color="#00758F" />
        <p>MySQL</p>
      </div>
      <div className="skill-icon">
        <FaGithub size={50} color="#181717" />
        <p>GitHub</p>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
};

export default About;
