import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <h4>Read This!</h4>
          <p>
            At the moment, CovCritic is currently a proof of concept project.
          </p>
          <p>
            We do not have the resources to make reliable assumptions about
            COVID pundits. Our goal is to inspire scientists, data
            professionals, economists, web developers, fact-checkers, and
            journalists to join efforts and provide an online resource to
            separate the reliable, good-faith COVID experts from those who --
            for one reason or another -- have delivered misinformation or
            continues to deliver misinformation.
          </p>
          <p>
            In the future, CovCritic will be a reliable, fast resource in
            separating those who can be trusted to deliver conclusions based on
            scientific evidence, from those who endanger lives by putting their
            own immediate political goals first. We will continue to sharpen our
            tools and become more accurate with time. Our commitment is to the
            emerging findings and the belief that the public has a right to know
            the truth -- no matter what.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
