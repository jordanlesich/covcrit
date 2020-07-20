import React from "react";
import styled from "styled-components";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { getBGPalette, getPalette } from "../helpers";

const Bar = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${props => props.bgColor};
  margin-bottom: 4vh;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    padding: 0.2rem;
    margin: 1rem;
    color: ${props => props.color};
    border: 3px solid ${props => props.color};
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.1s;
  }
  .wikipedia {
    text-align: center;
    vertical-align: center;
    font-size: 1.5rem;
  }
  .wiki-link {
    text-decoration: none;
  }
  .icon:hover {
    opacity: 1;
  }
`;

const LinkBar = props => {
  return (
    <Bar
      bgColor={getBGPalette(props.verdict)}
      color={getPalette(props.verdict)}
    >
      {props.pundit.twitter && (
        <a href={props.pundit.twitter}>
          <TwitterIcon className="icon" />
        </a>
      )}
      {props.pundit.website && (
        <a href={props.pundit.website}>
          <HomeIcon className="icon" />
        </a>
      )}
      {props.pundit.facebook && (
        <a href={props.pundit.facebook}>
          <FacebookIcon className="icon" />
        </a>
      )}
      {props.pundit.youtube && (
        <a href={props.pundit.youtube}>
          <YouTubeIcon className="icon" />
        </a>
      )}
      {props.pundit.wikipedia && (
        <a href={props.pundit.website} className="wiki-link">
          <span className="icon wikipedia">W</span>
        </a>
      )}
    </Bar>
  );
};

export default LinkBar;
