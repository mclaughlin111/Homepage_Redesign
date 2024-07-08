import React from "react";
import Profile from "../Assets/profile.jpeg";
import "../index.css";
import "../about.css";

const About = () => {
  return (
    <div className="about">
      <div>
        <p>Thomas McLaughlin: Software Engineer</p>
        <p className="subline">Currently with Lloyds Banking Group</p>

        <hr className="aboutPageBreak" />

        <div className="aboutList">
          <p>
            Download{" "}
            <a
              className="cvLink"
              href="https://tommcl.co.uk/home/Thomas_McLaughlin_CV.pdf"
            >
              CV
            </a>{" "}
          </p>
          <p>
            · Link to{" "}
            <a className="cvLink" href="https://github.com/mclaughlin111">
              Github
            </a>{" "}
            <a className="cvLink" href="https://www.linkedin.com/in/thomas-mclaughlin-312299179/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      <img src={Profile} alt="Profile" className="profileImage" />
    </div>
  );
};

export default About;
