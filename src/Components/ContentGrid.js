import React from "react";
import pentaxImage from "../Assets/pentaxcamera.jpeg";
import youtubeImage from "../Assets/youtubelink.jpeg";
import gameImage from "../Assets/gamelink.png";
import pitchKick from "../Assets/pitchkick.jpeg";
import "../contentgrid.css";

const ContentGrid = () => {
  return (
    <table className="table">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Description</th>
        <th>Last Updated</th>
      </tr>
      <tr id="topRow">
        <td>
          <img src={pentaxImage} alt="pentaxImage" className="tableImage" />
        </td>
        <td>Photos</td>
        <td className="tableDescription">Image gallery to showcase personal photography, built around <a href="https://www.lightgalleryjs.com/">lightgallery.js</a> plugin</td>
        
      </tr>
      <tr>
        <td><img src={pitchKick} alt="pitchkick" className="tableImage" /></td>
        <td>Pitch Kick</td>
        <td className="tableDescription">A sandbox Analog style kick drum synth built to test out the  <a href="https://tonejs.github.io/">tone.js</a> framework</td>
      </tr>
      <tr>
        <td><img src={gameImage} alt="gameImage" className="tableImage" /></td>
        <td>Memory Game</td>
        <td className="tableDescription">Interactive level-based puzzle game to test and develop memory recall.</td>
      </tr>
      <tr>
        <td><img src={youtubeImage} alt="youtubeImage" className="tableImage" /></td>
        <td>Youtube</td>
        <td className="tableDescription">Youtube channel with videos relating to music / audio / sound-engineering</td>
      </tr>
    </table>
  );
};

export default ContentGrid;
