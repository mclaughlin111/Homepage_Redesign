import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react"; // Updated to @emotion/react
import Select from "react-dropdown-select";
import "../headerselect.css";

export const HeaderSelect = () => {
  const options = [
    { value: "Online", label: "Online", url: "/" },
    { value: "Blog", label: "Blog", url: "https://tommcl.co.uk/blog" },
    {
      value: "Activity",
      label: "Activity",
      url: "https://tommcl.co.uk/strava",
    },
  ];

  // State to manage selected values and dropdown open state
  const [selected, setSelected] = useState([options[0]]);
  const [open, setOpen] = useState(null);

  const handleChange = (values) => {
    setSelected(values);
    if (values.length > 0) {
      // Navigate to the URL when an option is selected
      window.location.href = values[0].url;
    }
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <>
      <StyledSelect
        options={options}
        values={selected}
        onChange={handleChange}
        isOpen={open}
        onDropdownCloseRequest={({ close }) => {
          setOpen(true);
          sleep(300).then(() => {
            close();
            setOpen(false);
          });
        }}
      />
    </>
  );
};

// Animation keyframes for hiding and showing the dropdown
const hide = keyframes`
  from {
    transition: height 310ms ease;
  }

  to {
    transition: height 310ms ease;
    height: 0;
    opacity: 0;
  }
`;

const show = keyframes`
  from {
    transition: height 310ms ease;
    height: 0;
    opacity: 0;
  }

  to {
    transition: height 310ms ease;
  }
`;

// Styled component for the animated dropdown
const StyledSelect = styled(Select)`
  transition: all 0.3s ease-out;
  z-index: 999;

  .react-dropdown-select-dropdown {
    height: em;
    ${({ isOpen }) =>
      isOpen
        ? css`
            animation: ${hide} 310ms ease-in-out;
          `
        : css`
            animation: ${show} 310ms ease-in-out;
          `};
  }

  .react-dropdown-select-option {
    transition: all 0.3s ease-out;
  }
`;
