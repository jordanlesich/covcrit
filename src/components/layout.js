import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SearchProvider } from "../context/searchContext";

import Header from "./header";
import "./layout.css";

const Layout = props => {
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
      <SearchProvider>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            borderLeft: "1px solid rgba(33, 134, 196, .4)",
          }}
        >
          <main>{props.children}</main>
        </div>
        {/* <Footer /> */}
      </SearchProvider>
    </>
  );
};

export default Layout;
