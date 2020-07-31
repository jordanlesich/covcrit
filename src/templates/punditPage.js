import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import LinkBar from "../components/linkBar.js";
import Reasoning from "../components/reasoning.js";
import WarningIcon from "@material-ui/icons/Warning";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import HelpIcon from "@material-ui/icons/Help";
import { trimObjFields, getPalette, getBGPalette } from "../helpers.js";

const ProfilePage = styled.div`
  padding-top: 6vh;
  /* background-color: ${props => props.color}; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .pundit-name {
    color: ${getPalette("secondary")};
  margin-bottom: 3rem;
  margin-left: 4vw;
  font-size: calc(2rem + 0.5vh + 1.5vw);
  letter-spacing: -2px;
  font-weight: 300;
  font-variant: small-caps;
    padding-bottom: 4vh;
    /* padding-top: 3vh; */
    border-bottom: 1px solid ${props => getBGPalette(props.verdict)};
    margin-left: 4vw;
    margin-right: 4vw;
  }
  .top-card {
    display: flex;
    justify-content: space-between;
    padding-left: 4vw;
    padding-right: 4vw;
    margin-bottom: 4vh;
  }
  .stats {
    width: 500px;
  }
  .pundit-image {
    object-fit: cover;
    object-position: 100% 0;
    width: 450px;
    height: 450px;
    border-radius: 4px;
  }
  .img-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 450px;
    background: lightgrey;
    border-radius: 4px;
  }
  .info-text {
    margin-left: 1vw;
    font-size: 1.1rem;
  }
  .bold {
    font-weight: 700;
  }
  .pullquote {
    padding: 0 10rem 2rem 10rem;
    font-style: italic;
  }
  .reliable-verdict {
    font-size: 2.5rem;
    margin-left: 0.5rem;
    color: ${props => getPalette(props.verdict)};
  }
  .reliable-icon {
    position: absolute;
    transform: translate(-60%, -60%);
    height: 5rem;
    width: 5rem;
    color: ${props => getPalette(props.verdict)};
  }
`;

const PunditPage = ({ pageContext }) => {
  const pundit = trimObjFields(pageContext.pundit);

  const name = pundit.name;
  const verdict = pundit.verdict || "Undecided";
  const organization = pundit.organization || "Needs to be added";
  const positionOrRole = pundit.positionOrRole || "Needs to be added";
  const officialBio = pundit.officialBio || "Needs to be added";

  const getIcon = verdict => {
    const str = verdict.toLowerCase();
    if (str === "reliable")
      return <VerifiedUserIcon className="reliable-icon" />;
    if (str === "unreliable") return <WarningIcon className="reliable-icon" />;
    else return <HelpIcon className="reliable-icon" />;
  };
  return (
    <Layout>
      <ProfilePage verdict={verdict}>
        <h1 className="pundit-name">{name}</h1>
        {/* <p className="pundit-nationality">{nationality}</p> */}
        <div className="top-card">
          {getIcon(verdict)}
          {pundit.imgLink ? (
            <img
              src={pundit.imgLink}
              alt={pundit.name}
              className="pundit-image"
            />
          ) : (
            <div className="img-placeholder">No Image Link</div>
          )}
          <div className="stats">
            <h3 className="reliable-verdict">{verdict}</h3>
            <p className="info-text org">
              <span className="bold">Organization</span>: {organization}
            </p>
            <p className="info-text role">
              <span className="bold">Position or Role</span>: {positionOrRole}
            </p>
            <p className="info-text role">
              <span className="bold">Official Bio</span>: {officialBio}
            </p>
          </div>
        </div>
        <LinkBar pundit={pundit} verdict={verdict} />
        <blockquote className="info-text pullquote">
          {pundit.pullquote && pundit.pullquote}
        </blockquote>
        <Reasoning verdict={verdict} reasoning={pundit.reasoning} name={name} />
      </ProfilePage>
    </Layout>
  );
};

export default PunditPage;
