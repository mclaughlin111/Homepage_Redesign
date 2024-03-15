import React, { useState, useEffect } from "react";
import pentaxImage from "../Assets/pentaxcamera.jpeg";
import youtubeImage from "../Assets/youtubelink.jpeg";
import gameImage from "../Assets/gamelink.png";
import pitchKick from "../Assets/pitchkick.jpeg";
import "../contentlist.css";

const items = [
  {
    name: "Photos",
    description: "Image gallery to showcase personal photography, built around the <a href='https://www.lightgalleryjs.com/' target='_blank' rel='noopener noreferrer'>lightgallery.js</a> plugin",
    link: "http://www.photos.tommcl.co.uk/",
    queryLink: "https://www.lightgalleryjs.com/",
    image: pentaxImage,
  },
  {
    name: "Pitch Kick",
    description: "A sandbox Analog style kick drum synth built to test out the <a href='https://tonejs.github.io/' target='_blank' rel='noopener noreferrer'>tone.js</a> framework",
    link: "https://tommcl.co.uk/pitchkick",
    queryLink: "https://www.lightgalleryjs.com/",
    image: pitchKick,
  },
  {
    name: "Memory Game",
    description: "Interactive level-based puzzle game to test and develop memory recall.",
    link: "https://tommcl.co.uk/game/",
    image: gameImage,
  },
  {
    name: "Youtube",
    description: "Youtube channel with videos relating to music / audio / sound-engineering",
    link: "https://www.youtube.com/channel/UCSr397y_jFgZg76tbndxv8A",
    image: youtubeImage,
  },
];

const ContentList = () => {
  const [lastUpdatedDates, setLastUpdatedDates] = useState({});

  useEffect(() => {
    const fetchLastUpdatedDates = async () => {
      const updatedDates = {};
      const errors = [];

      for (const item of items) {
        try {
          if (item.queryLink) {
            const response = await fetch(item.queryLink);
            const lastUpdated = response.headers.get("last-modified");
            updatedDates[item.name] = lastUpdated;
          } else {
            // Set lastUpdatedDates to "-" if queryLink is undefined/null
            updatedDates[item.name] = "-";
          }
        } catch (error) {
          errors.push({ itemName: item.name, error });
          updatedDates[item.name] = "-";
        }
      }

      // Handle errors outside the loop
      if (errors.length > 0) {
        console.error("Errors fetching last updated dates:", errors);
      }

      setLastUpdatedDates(updatedDates);
    };

    fetchLastUpdatedDates();
  }, [items]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Description</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.name}>
            <td>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={`${item.name}`} className="tableImage" />
              </a>
            </td>
            <td className={item.name}>{item.name}</td>
            <td className="tableDescription topRow" dangerouslySetInnerHTML={{ __html: item.description }} />
            <td>{lastUpdatedDates[item.name]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContentList;
