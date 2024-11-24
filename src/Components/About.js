import React from "react";
import Profile from "../Assets/profile.jpeg";
import "../index.css";
import "../Styling/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h3>Software Engineer for Lloyds Banking Group</h3>
        <p className="paragraph">Based in Bristol, UK</p>
        <hr className="aboutPageBreak" />
        <p className="paragraph">
          <strong>Likes doing: </strong> web development, music, photography,
          design, running, cycling, cooking
        </p>
        <p className="paragraph">
          Download{" "}
          <a
            className="cvLink"
            href="https://tommcl.co.uk/home/Thomas_McLaughlin_CV.pdf"
          >
            CV
          </a>
        </p>
        <p className="paragraph">
          Links:{" "}
          <a className="cvLink" href="https://github.com/mclaughlin111">
            Github
          </a>{" "}
          |{" "}
          <a
            className="cvLink"
            href="https://www.linkedin.com/in/thomas-mclaughlin-312299179/"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a className="cvLink" href="https://www.instagram.com">
            Instagram
          </a>{" "}
          |{" "}
          <a className="cvLink" href="https://www.youtube.com">
            Youtube
          </a>
        </p>
      </div>
      <div className="about-image-container">
        <img src={Profile} alt="Profile" className="profileImage" />
      </div>
    </div>
  );
};

export default About;
