import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import BuildIcon from "@material-ui/icons/Build";

import { fadeIn, fadeOut, slideUp, slideDown } from "../anims";
import Button from "../components/button";
import { getPalette, getBGPalette } from "../helpers";
import Backdrop from "../components/backdrop";

const WarnBox = styled.div`
  position: fixed;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 4px;
  background-color: #ffffff;
  width: 32rem;
  color: ${getPalette("secondary")};
  padding: 1.5rem;
  z-index: 20;
  animation: ${props => (props.fadeIn ? fadeIn : fadeOut)} 0.2s ease-in-out both,
    ${props => (props.fadeIn ? slideUp : slideDown)} 0.2s ease-in-out both;
  .title-wrapper {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${getBGPalette("secondary")};
    padding-right: 1.5rem;
  }
  .warn-title {
    text-align: center;
    font-weight: 300;
    font-size: 3rem;
    margin-bottom: 2rem;

    letter-spacing: -2px;
    letter-spacing: -2px;
    z-index: 25;
  }
  .body-text {
    font-size: 0.9rem;
    padding: 0.5rem 2rem;
    border-bottom: 1px solid ${getBGPalette("secondary")};
  }
  .warning-section-subtext {
    padding: 0.5rem 0;
    margin: 0;
  }
  .x-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }
  .build-icon {
    display: block;
    margin: 0 auto;
    height: 8rem;
    width: 8rem;
    color: ${getPalette("secondary")};
    text-align: center;
  }
  .button-section {
    display: flex;
    justify-content: center;
    margin: 2rem 1.5rem 0rem 1.5rem;
    padding-right: 1.5rem;
    button {
      margin: 0 0.8rem;
    }
  }
`;

const Warning = ({ toggleWarning }) => {
  const [isFading, setIsOpening] = useState(true);

  const handleClick = e => {
    setIsOpening(false);
    setTimeout(() => toggleWarning(), 200);
  };

  const handleKeyPress = e => {
    if (e.key === "Escape") {
      setIsOpening(false);
      setTimeout(() => toggleWarning(), 200);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <Backdrop fadeIn={isFading} handleClick={handleClick}>
      <WarnBox fadeIn={isFading}>
        <HighlightOffIcon className="x-icon" onClick={handleClick} />
        <div className="title-wrapper">
          <BuildIcon className="build-icon" />
          <h3 className="warn-title">Work in Progress</h3>
        </div>
        <div className="body-text">
          <p className="warning-section-subtext">
            CovCritic is currently a proof of concept.
          </p>
          <p className="warning-section-subtext">
            All the information presented on this domain is sample data for
            design purposes only. We do not currently have the resources to make
            reliable assumptions about COVID pundits.
          </p>
          <p className="warning-section-subtext">
            However, we are in the process of recruiting volunteers. If the idea
            of holding COVID pundits accountable sounds appealing, consider
            reading more about CovCritic on our about page.
          </p>
        </div>
        <div className="button-section">
          <Button text={"Read More"} type="secondary" />
          <Button text={"Continue"} type="primary" fn={handleClick} />
        </div>
      </WarnBox>
    </Backdrop>
  );
};
export default Warning;
