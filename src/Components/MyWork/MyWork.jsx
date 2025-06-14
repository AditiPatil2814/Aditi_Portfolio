/*import React from "react";
import './MyWork.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import mywork_data from "../../assets/assets/mywork_data";
import arrow_icon from '../../assets/assets/arrow_icon.svg'

const MyWork = () =>{
    return(
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work,index)=>{
                    return < img key={index} src={work.w_img} alt=""/>
                })

                }

            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt=""/>
            </div>

        </div>
    )
}

export default MyWork*/

import React, { useState } from "react";
import './MyWork.css';
import theme_pattern from '../../assets/assets/theme_pattern.svg';
import mywork_data from "../../assets/assets/mywork_data";
import arrow_icon from '../../assets/assets/arrow_icon.svg';

const MyWork = () => {
    const [visibleCount, setVisibleCount] = useState(6); // Show 6 projects initially

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 3); // Load 3 more projects when clicked
    };

    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>

            <div className="mywork-container">
                {mywork_data.slice(0, visibleCount).map((work, index) => (
                    <div className="work-card" key={index}>
                        <a href={work.live_link} target="_blank" rel="noopener noreferrer">
                            <img className="work-image" src={work.w_img} alt={`Project ${index + 1}`} />
                        </a>
                        <div className="work-links">
                            <a href={work.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={work.live_link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < mywork_data.length && (
                <div className="mywork-showmore" onClick={handleShowMore}>
                    <p>Show More</p>
                    <img src={arrow_icon} alt="arrow" />
                </div>
            )}
        </div>
    );
};

export default MyWork;

