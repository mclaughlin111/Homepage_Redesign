import React, { useState, useEffect } from "react";
import "../contentlist.css";
import ContentData from "../Assets/ContentData.json";
import { IoMdLink } from "react-icons/io";

const ContentList = () => {
  const [lastUpdatedDates, setLastUpdatedDates] = useState({});

  useEffect(() => {
    const fetchLastUpdatedDates = async () => {
      const updatedDates = {};
      const errors = [];

      for (const item of ContentData) {
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
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="tableHeadingLinkIcon"><IoMdLink/></th>
          <th>Name</th>
          <th>Description</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {ContentData.map((item) => (
          <tr key={item.name}>
            <td>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} className="tableImage" />
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
