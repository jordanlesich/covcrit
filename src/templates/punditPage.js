import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Reliable from "../components/reliable";
import LinkBar from "../components/linkBar.js";
import Reasoning from "../components/reasoning.js";

import { trimObjFields, getBGPalette } from "../helpers.js";

const ProfilePage = styled.div`
  /* padding-top: 3vh; */
  border-left: 1px solid rgba(33, 134, 196, 1);
  background-color: ${props => props.color};

  .pundit-name {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-variant: small-caps;
    font-size: calc(2rem + 0.5vh + 1.5vw);
    font-weight: 500;
    margin-bottom: 4vh;
    letter-spacing: -4px;
    padding-bottom: 3vh;
    padding-top: 3vh;
    border-bottom: 1px solid rgba(33, 134, 196, 0.5);
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
    width: 500px;
    height: 500px;
    border-radius: 4px;
  }
  .img-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background: lightgrey;
    border-radius: 4px;
  }
  .info-text {
    margin-left: 3vw;
    font-size: 1.1rem;
  }
  .bold {
    font-weight: 700;
  }
  .pullquote {
    padding: 0 10rem 2rem 10rem;
    font-style: italic;
  }
`;

const PunditPage = ({ pageContext }) => {
  const pundit = trimObjFields(pageContext.pundit);

  const name = pundit.name;
  const verdict = pundit.verdict || "Undecided";
  // const nationality = pundit.nationality || "Needs to be added";
  const organization = pundit.organization || "Needs to be added";
  const positionOrRole = pundit.positionOrRole || "Needs to be added";
  const officialBio = pundit.officialBio || "Needs to be added";

  return (
    <Layout>
      <ProfilePage color={getBGPalette(verdict)}>
        <h1 className="pundit-name">{name}</h1>
        {/* <p className="pundit-nationality">{nationality}</p> */}
        <div className="top-card">
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
            <Reliable isReliable={verdict} />
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
