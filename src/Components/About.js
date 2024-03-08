import React from "react";
import Profile from "../Assets/profile.jpeg";
// import Dog from "../Assets/dog.jpeg";
import "../index.css";
import "../about.css";

const About = () => {
  return (
    <>
    <div className="about">
      <div>
        <p>Personal Website of Thomas McLaughlin</p>
    
        <hr className="aboutPageBreak"/>
        
        <div className="aboutList"> 
            <p>
          Download {" "}
          <a
            className="cvLink"
            href="https://tommcl.co.uk/home/Thomas_McLaughlin_CV.pdf"
          >
            CV
          </a>
        </p>
        <p>
          Link to{" "}
          <a className="cvLink" href="https://github.com/mclaughlin111">
            Github
          </a>
        </p>
        {/* <p className="dogLink">
          Picture of My dog
        </p> */}
        </div>

       
      </div>
      
      <img src={Profile} alt="Profile" className="profileImage"></img>
      {/* <img src={Dog} alt="Dog" title="mydog" className="profileImage" id="wilbur"></img> */}
    </div>
    </>
  );
};

export default About;
