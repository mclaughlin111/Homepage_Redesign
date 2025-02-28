import React from "react";
import Toggle from "react-toggle";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme";
import useSound from "use-sound";
import switchFX from "../Assets/switch.wav";

const LightDarkToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [playFX] = useSound(switchFX);

  const handleToggle = () => {
    playFX(); // Play sound
    toggleTheme(); // Toggle the theme
  };

  const toggleDark = (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 300, damping: 2 }}
    >
      <MdDarkMode className="switch" id="darkToggle" />
    </motion.div>
  );

  const toggleLight = (
    <motion.div initial={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
      <MdLightMode className="switch" id="lightToggle" />
    </motion.div>
  );

  return (
    <Toggle
      id="toggleComponent"
      checked={isDarkMode}
      onClick={handleToggle}
      icons={{ checked: toggleDark, unchecked: toggleLight }}
      aria-label="Dark mode toggle"
    />
  );
};

export default LightDarkToggle;
