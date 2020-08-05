import React from "react";
import styled from "styled-components";
import { getPalette, getBGPalette } from "../helpers";
import Button from "../components/button";

const CardBox = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 4px;
  background-color: #ffffff;
  color: ${getPalette("secondary")};
  padding: 1.5rem;

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
    letter-spacing: -2px;
    letter-spacing: -2px;
    z-index: 25;
    margin-bottom: 0;
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
  .icon {
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

const warnCard = ({ title, textBlocks, icon, primFn, secFn }) => {
  return (
    <CardBox>
      <h3 className="warn-title">{title || "Needs Title"}</h3>
      <span>{icon && icon}</span>

      <div className="body-text">
        {textBlocks && textBlocks.map((text, i) => <p key={i}>{text}</p>)}
      </div>
      <div className="button-section">
        <Button text="Continue" type="secondaru" fn={primFn} />
        <Button text="Read More" type="primary" fn={secFn} />
      </div>
    </CardBox>
  );
};

export default warnCard;
