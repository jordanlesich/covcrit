import React from "react";
import styled from "styled-components";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const WarnBox = styled.div`
  position: relative;
  width: 60vw;
  margin: 3vh 0;
  padding: 2vw;
  background-color: rgba(176, 38, 0, 0.2);
  border-radius: 10px;
  .warn-title {
  }
  .body-text {
    padding: 0 2vw;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .x-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }
`;

const Warning = ({ toggleWarning }) => {
  return (
    <WarnBox>
      <HighlightOffIcon className="x-icon" onClick={toggleWarning} />
      <h3 className="warn-title">Warning!</h3>
      <div className="body-text">
        <p>CovCritic is a proof of concept project.</p>
        <p>
          At the moment, we do not have the resources to make reliable
          assumptions about COVID pundits. Our goal is to inspire scientists,
          data professionals, economists, web developers, fact-checkers, and
          journalists to join efforts and provide an online resource to separate
          the reliable, good-faith COVID experts from those who -- for one
          reason or another -- have delivered misinformation or continues to
          deliver misinformation.
        </p>
        <p>
          In the future, CovCritic will be a reliable, fast resource in
          separating those who can be trusted to deliver conclusions based on
          scientific evidence, from those who endanger lives by putting their
          own immediate political goals first. We will continue to sharpen our
          tools and become more accurate with time. Our commitment is to the
          emerging findings and the belief that the public has a right to know
          the truth. what.
        </p>
      </div>
    </WarnBox>
  );
};
export default Warning;
