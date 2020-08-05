import React from "react";
import { getPalette, getBGPalette } from "../helpers";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import WarningIcon from "@material-ui/icons/Warning";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import HelpIcon from "@material-ui/icons/Help";

const ListBox = styled.article`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: relative;
  border-radius: 4px;
  color: ${getPalette("secondary")};
  width: 70%;
  margin-left: 5vw;
  margin-top: 3vh;
  padding: 1.5rem;
  border: 1px solid rgba(33, 134, 196, 0.3);
  transition: 0.2s all;
  :hover {
    background-color: ${getBGPalette("highlight")};
    box-shadow: 5px 5px 3px -3px rgba(89, 89, 89, 0.3);
  }
  :focus {
    outline: none;
    background-color: #f2f6fa;
    box-shadow: 5px 5px 3px -3px rgba(89, 89, 89, 0.3);
  }
  .icon {
    position: absolute;
    height: 2rem;
    width: 2rem;
    transform: translate(-60%, -60%);
    color: ${props => getPalette(props.verdict)};
  }
  .icon-wrapper {
    background-color: rgba(89, 89, 89, 0.3);
  }
  .pundit-image {
    object-fit: cover;
    object-position: 100% 0;
    width: 125px;
    height: 125px;
    border-radius: 4px;
  }
  .fallback-icon {
    color: #b2bcc4;
    background-color: #dee4e9;
  }
  .listing-textbox {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 2vw;
  }
  .listing-title {
    display: flex;
  }
  /* dfsdfsdf */
  .name {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    /* font-variant: small-caps; */
    letter-spacing: -2px;
    letter-spacing: -2px;
    /* margin-left: 0.5rem; */
    text-decoration: none;
  }
  .info-text {
    font-size: 0.9rem;
    display: flex;
    /* margin-left: 0.8rem; */
  }
  .role-text {
    font-weight: 500;
    margin-right: 0.5rem;
  }
  .org-text {
    font-weight: 500;
    opacity: 0.7;
  }
`;

const ListItem = ({ pundit }) => {
  const getIcon = verdict => {
    const str = verdict;
    if (str === "Reliable") return <VerifiedUserIcon className="icon" />;
    if (str === "Unreliable") return <WarningIcon className="icon" />;
    else return <HelpIcon className="icon" />;
  };
  return (
    <ListBox verdict={pundit.verdict}>
      <span className="i-wrapper">{getIcon(pundit.verdict)}</span>
      {pundit.imgLink ? (
        <img src={pundit.imgLink} alt={pundit.name} className="pundit-image" />
      ) : (
        <PersonIcon className="pundit-image fallback-icon" />
      )}
      <div className="listing-textbox">
        <div className="listing-title">
          <p className="name">{pundit.name}</p>
        </div>
        <div className="info-text">
          <p className="role-text">
            {pundit.positionOrRole || "Role Placeholder "}:
          </p>

          <p className="org-text">
            {pundit.organization || "Org Placeholder "}
          </p>
        </div>
      </div>
    </ListBox>
  );
};

export default ListItem;
