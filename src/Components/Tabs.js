import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ContentGrid from "./ContentGrid";
import ContentList from "./ContentList";
import ContentCarousel from "./ContentCarousel";
import { TbCarouselHorizontal } from "react-icons/tb";
import { BsGridFill } from "react-icons/bs";
import { PiListBold } from "react-icons/pi";
import useSound from "use-sound";
import clickFX from "../Assets/click.wav";
import "../projects.css";

const tabsData = [
  {
    title: <PiListBold />,
    value: "row",
  },
  {
    title: <TbCarouselHorizontal />,
    value: "carousel",
  },
  {
    title: <BsGridFill className="grid" />,
    value: "grid",
  },
];

const Tabs = () => {
  const [tabBoundingBox, setTabBoundingBox] = useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [highlightedTab, setHighlightedTab] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState("carousel");
  const [playFX] = useSound(clickFX);

  const highlightRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setTabBoundingBox(null);
      setWrapperBoundingBox(null);
      setHighlightedTab(null);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const handleTabClick = (tab) => {
    setSelectedComponent(tab.value);
    setHighlightedTab(null);
    playFX();
  };

  const highlightStyles = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "150ms";
    highlightStyles.opacity = 1;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  } else {
    // Page is resizing, set opacity to 0
    highlightStyles.opacity = 0;
  }

  return (
    <>
      <TabsNav ref={wrapperRef}>
        <TabsHighlight ref={highlightRef} style={highlightStyles} />
        {tabsData.map((tab) => (
          <Tab
            className="componentTab"
            key={tab.value}
            onMouseOver={(ev) => repositionHighlight(ev, tab)}
            onClick={() => handleTabClick(tab)}
          >
            {tab.title}
          </Tab>
        ))}
      </TabsNav>

      {selectedComponent === "row" && <ContentList />}
      {selectedComponent === "carousel" && <ContentCarousel />}
      {selectedComponent === "grid" && <ContentGrid />}
    </>
  );
};

const TabsNav = styled.div`
  position: sticky;
  top: 1em; /* Adjust for desktop view */
  display: flex;
  justify-content: center;
  z-index: 10; /* Ensure it stays above other elements */
  border-radius: 5px; /* Optional */
  transition: all var(--animation-header);

  /* Breakpoint for mobile view */
  @media (max-width: 600px) {
    /* top: unset; */
    padding: 0em 0; /* Adjust padding for better alignment */
  }
`;

const Tab = styled.a`
  padding: 10px 6px;
  font-size: 1.5rem;
  color: hsl(0 0% 43.5%);
  display: inline-block;
  position: relative;
  cursor: pointer;
  &:active {
  }
`;

const TabsHighlight = styled.div`
  background: hsl(0 0% 90.9%);

  position: absolute;
  top: 9px;
  left: 0;
  border-radius: 5px;
  height: 25px;
  transition: 200ms ease-in-out;
  transition-property: width, transform;
`;

export default Tabs;
