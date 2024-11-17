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
  position: relative;
  display: flex;
  justify-content: center;
`;

const Tab = styled.a`
  padding: 16px 10px;
  font-size: 1rem;
  color: hsl(0 0% 43.5%);
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: color 3500ms ease-in-out;
  &:active {
  }
`;

const TabsHighlight = styled.div`
  background: hsl(0 0% 90.9%);
  position: absolute;
  top: 11px;
  left: 0;
  border-radius: 4px;
  height: 29px;
  transition: 175ms ease-in-out;

  transition-property: width, transform, opacity;
`;

export default Tabs;
