import React from "react";
import Profile from "../Assets/profile.jpeg"
import "../index.css"
const About = () => {
    return (<div className="about">
        <div>
    <p>Personal Website of Thomas McLaughlin</p>
    <p>Aspiring Full Stack Developer</p>
    <hr/>
    <p>Download My <a className="cvLink" href="../Assets/TomMcLaughlin_CV.pdf">CV</a></p>
    </div>
   <img src={Profile} alt="Profile" className="profileImage"></img>
    
    </div>  );
}
 
export default About;