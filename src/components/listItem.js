import React from "react";
import { getBGPalette, getPalette } from "../helpers";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import WarningIcon from "@material-ui/icons/Warning";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import HelpIcon from "@material-ui/icons/Help";

const ListBox = styled.article`
  display: flex;
  background-color: ${props => getBGPalette(props.verdict)};
  border-radius: 4px;
  width: 70%;
  margin-left: 4vw;
  margin-top: 3vh;
  padding: 1vw;

  .pundit-image {
    object-fit: cover;
    object-position: 100% 0;
    width: 175px;
    height: 175px;
    border-radius: 4px;
  }
  .fallback-icon {
    color: darkgrey;
  }
  .listing-textbox {
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
  }
  .listing-title {
    display: flex;
  }
  .icon {
    height: 2rem;
    width: 2rem;
    transform: translateY(1.5px);
    color: ${props => getPalette(props.verdict)};
  }
  /* dfsdfsdf */
  .name {
    font-size: 2rem;
    margin-left: 0.5rem;
    color: ${props => getPalette(props.verdict)};
    text-decoration: none;
  }
  .info-text {
    color: black;
    font-size: 1rem;
    margin-left: 3vw;
  }
`;

const ListItem = ({ pundit }) => {
  const getIcon = verdict => {
    //TODO correct for lowercase and refactor
    const str = verdict;
    if (str === "Reliable") return <VerifiedUserIcon className="icon" />;
    if (str === "Unreliable") return <WarningIcon className="icon" />;
    else return <HelpIcon className="icon" />;
  };
  return (
    <ListBox verdict={pundit.verdict}>
      {pundit.imgLink ? (
        <img src={pundit.imgLink} alt={pundit.name} className="pundit-image" />
      ) : (
        <PersonIcon className="pundit-image fallback-icon" />
      )}
      <div className="listing-textbox">
        <div className="listing-title">
          {getIcon(pundit.verdict)}
          <h3 className="name">{pundit.name}</h3>
        </div>
        <div className="info-text">
          <p>{pundit.organization}</p>
          <p>{pundit.positionOrRole}</p>
        </div>
      </div>
    </ListBox>
  );
};

export default ListItem;
