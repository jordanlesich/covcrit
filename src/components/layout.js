import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SearchProvider } from "../context/searchContext";
import useSessionStorageState from "../hooks/useSessionStorageState";

import Header from "./header";
import ContactDrawer from "./contactDrawer";
import Warning from "../components/warning";

import "./layout.css";

const Layout = props => {
  const [warning, setWarning] = useSessionStorageState("hasBeenWarned", true);
  const [contact, setContact] = useState(false);

  const toggleWarning = () => setWarning(!warning);
  const toggleContact = () => setContact(!contact);

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
    <SearchProvider>
      {warning && <Warning toggleWarning={toggleWarning} />}
      {contact && <ContactDrawer toggleDrawer={toggleContact} />}
      <Header
        siteTitle={data.site.siteMetadata.title}
        toggleContact={toggleContact}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          borderLeft: "1px solid rgba(33, 134, 196, .4)",
          backgroundColor: "#ffffff",
        }}
      >
        <main>{props.children}</main>
      </div>
      {/* <Footer /> */}
    </SearchProvider>
  );
};

export default Layout;
