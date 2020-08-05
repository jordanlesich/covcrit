import React, { useState } from "react";
import styled from "styled-components";

import TabButton from "../components/tabButton";

import { fadeIn, fadeOut } from "../anims";
import { getBGPalette, getShadow } from "../helpers";

const TabBox = styled.div`
  padding: 1rem;

  .in {
    opacity: 1;
  }
  .anim-in {
    animation: ${fadeIn} 0.2s ease-in both;
  }
  .anim-out {
    animation: ${fadeOut} 0.2s ease-out both;
  }
  .out {
    opacity: 0;
  }
  .tab-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
  }
  .tab-frame {
    margin: 3rem auto 0 auto;
    width: 30rem;
    border: 1px solid ${getBGPalette("secondary")};
    border-radius: 6px;
  }
  .tab-buttons {
    transform: translate(-1px, -1.8rem);
    width: 30rem;
    position: absolute;
    z-index: 30;
  }
`;
const TabMenu = ({ options, title }) => {
  // const [formType, setSelectedOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [fadeAnim, setFadeAnim] = useState("out");

  const switchOption = val => {
    setSelectedOption(options.find(option => option.value === val));
  };

  const handleTabChange = e => {
    console.log("fired");
    //do nothing if in the process of animation
    if (fadeAnim === "anim-in" || fadeAnim === "anim-out") return;
    //open first tab
    if (selectedOption === null && fadeAnim === "out") {
      setFadeAnim("anim-in");
      switchOption(e.target.value);
      setTimeout(() => {
        setFadeAnim("in");
      }, 200);
      return;
    }
    //if user clicked tab that is already open, close it.
    if (selectedOption.value === e.target.value && fadeAnim === "in") {
      setFadeAnim("anim-out");
      setTimeout(() => {
        setFadeAnim("out");
        setSelectedOption(null);
      }, 200);
      return;
    }
    //if user clicked a different tab than the one that is already open,
    //then crossfade animation between the two elements
    if (selectedOption.value !== e.target.value && fadeAnim === "in") {
      setFadeAnim("anim-out");
      const form = e.target.value;
      setTimeout(() => {
        setFadeAnim("out");
        switchOption(null);
      }, 200);
      setTimeout(() => {
        setFadeAnim("anim-in");
        switchOption(form);
      }, 300);
      setTimeout(() => {
        setFadeAnim("in");
      }, 500);
    }
  };

  return (
    <TabBox>
      <h2 className="tab-title">{title}</h2>
      <div className="tab-frame">
        <div className="tab-buttons">
          {options &&
            options.map(({ tabText, value }, index) => (
              <TabButton
                key={index}
                text={tabText}
                value={value}
                fn={handleTabChange}
                height="2rem"
                width={`${100 / options.length}%`}
                cardColor={"#ffffff"}
                border={`1px solid ${getBGPalette("secondary")}`}
                isSelected={
                  selectedOption != null && value === selectedOption.value
                }
              />
            ))}
        </div>

        <div className={`tab-stage ${fadeAnim}`}>
          {selectedOption != null && selectedOption.render}
        </div>
      </div>
    </TabBox>
  );
};

export default TabMenu;
