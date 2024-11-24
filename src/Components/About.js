import React from "react";
import Profile from "../Assets/profile.jpeg";
import "../index.css";
import "../Styling/about.css";

const About = () => {
  return (
    <div className="about">
      <div>
        <h3>Software Engineer for Lloyds Banking Group</h3>

        <p>Based in Bristol, UK</p>

        <hr className="aboutPageBreak" />

        <div className="aboutList">
          <p>
            <strong>Likes doing: </strong> web development, music, photography,
            design, running, cycling, cooking
          </p>
        </div>

        <p>
          Download{" "}
          <a
            className="cvLink"
            href="https://tommcl.co.uk/home/Thomas_McLaughlin_CV.pdf"
          >
            CV
          </a>
        </p>

        <p>
          Links:{" "}
          <a className="cvLink" href="https://github.com/mclaughlin111">
            Github{""}
          </a>{" "}
          |{" "}
          <a
            className="cvLink"
            href="https://www.linkedin.com/in/thomas-mclaughlin-312299179/"
          >
            {" "}
            LinkedIn
          </a>{" "}
          |{" "}
          <a className="cvLink" href="https://www.instagram.com">
            {" "}
            Instagram
          </a>{" "}
          |{" "}
          <a className="cvLink" href="https://www.youtube.com">
            {" "}
            Youtube{" "}
          </a>
        </p>
      </div>

      <img src={Profile} alt="Profile" className="profileImage" />
    </div>
  );
};

export default About;
