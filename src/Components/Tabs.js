import React from "react";
import styled from "styled-components";
import ContentGrid from "./ContentGrid";
import ContentList from "./ContentList";
import ContentCarousel from "./ContentCarousel";

const tabsData = [
  {
    title: "Row",
    value: "row"
  },
  {
    title: "Carousel",
    value: "carousel"
  },
  {
    title: "Grid",
    value: "grid"
  }
];



const Tabs = () => {
  const [tabBoundingBox, setTabBoundingBox] = React.useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState(null);
  const [highlightedTab, setHighlightedTab] = React.useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true);
  const [selectedComponent, setSelectedComponent] = React.useState("carousel");

  const highlightRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const handleTabClick = (tab) => {
    setSelectedComponent(tab.value);
    resetHighlight();
  };

  const highlightStyles = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "150ms";
    highlightStyles.opacity = 1;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <>
      <TabsNav ref={wrapperRef}>
        <TabsHighlight ref={highlightRef} style={highlightStyles} />
        {tabsData.map((tab) => (
          <Tab
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
  padding: 16px 12px;
  font-size: ${14 / 16}rem;
  color: hsl(0 0% 43.5%);
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: color 250ms;
  &:active {
   
  }
  
`;

const TabsHighlight = styled.div`
  background: hsl(0 0% 90.9%); /* Keep the background color constant */
  position: absolute;
  top: 9px;
  left: 0;
  border-radius: 4px;
  height: 32px;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;


`;

export default Tabs;
