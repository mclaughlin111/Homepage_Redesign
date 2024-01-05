import { useState, useEffect } from "react";
import Toggle from "react-toggle";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import React from "react";

 const LightDarkToggle = () => {
  const [dark, setIsDark] = useState(true);

  useEffect(() => {
    if (dark === false) {
      //Add Light Mode For
      // Body
      document.querySelector('body').classList.add('bodylight');
      // Switches
      const switches = document.querySelectorAll('.switch');
      switches.forEach((singleSwitch) => {
        singleSwitch.classList.add('switchlight');
      });
      
      //underline
      document.querySelector('.pageHeader').classList.add('pageHeaderLight')
      //toggle 
      document.querySelector('.react-toggle-track-x').style.display = "none";
      document.querySelector('.react-toggle-track-check').style.display = "inline-block";

      //header underline div
      document.querySelector('.headerBorder').classList.add('headerBorderLight')


    } else {
      //remove dark mode for
      // Body
      document.querySelector('body').classList.remove('bodylight');
       // Switches
       const switches = document.querySelectorAll('.switch');
       switches.forEach((singleSwitch) => {
         singleSwitch.classList.remove('switchlight');
       });
       //underline
       document.querySelector('.pageHeader').classList.remove('pageHeaderLight')
         //toggle 
      document.querySelector('.react-toggle-track-x').style.display = "inline-block";
      document.querySelector('.react-toggle-track-check').style.display = "none";

       //header underline div
       document.querySelector('.headerBorder').classList.remove('headerBorderLight')

    }
  }, [dark]); 

  const toggleDark = <MdDarkMode className="switch" id='darkToggle'/>
  const toggleLight = <MdLightMode className="switch" id='lightToggle'/>

  return (
    <Toggle id="toggleComponent"
      checked={dark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: (toggleDark), unchecked: (toggleLight) }}
      aria-label="Dark mode toggle"
    />
  );
};

export default LightDarkToggle;