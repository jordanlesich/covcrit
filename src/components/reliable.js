import React from "react";
import styled from "styled-components";
import WarningIcon from "@material-ui/icons/Warning";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import HelpIcon from "@material-ui/icons/Help";
import { getPalette } from "../helpers";

const Indicator = styled.div`
  display: flex;

  .reliable-verdict {
    font-size: 2.5rem;
    margin-left: 0.5rem;
    color: ${props => props.color};
  }
  .icon {
    height: 2.5rem;
    width: 2.5rem;
    color: ${props => props.color};
  }
`;

const Reliable = ({ isReliable }) => {
  const getIcon = () => {
    const str = isReliable.toLowerCase();
    if (str === "reliable") return <VerifiedUserIcon className="icon" />;
    if (str === "unreliable") return <WarningIcon className="icon" />;
    else return <HelpIcon className="icon" />;
  };
  return (
    <Indicator color={getPalette(isReliable)} className="reliable-container">
      {getIcon()}
      <h3 className="reliable-verdict">{isReliable}</h3>
    </Indicator>
  );
};

export default Reliable;
