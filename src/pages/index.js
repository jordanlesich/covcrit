import React from "react";
import styled from "styled-components";

import Listing from "../components/listing";
import Title from "../components/title";
import Layout from "../components/layout";
import Search from "../components/search";
import Switches from "../components/switches";

const IndexContainer = styled.div`
  padding-top: 6vh;

  .listing-link {
    text-decoration: none;
  }
  .search-type {
    text-transform: capitalize;
  }
  .search-div {
    width: 600px;
    margin-left: 6.5vw;
  }
  .search-wrapper {
    margin-left: 50px;
    margin-bottom: 2vh;
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexContainer>
        <Title />
        <div className="search-div">
          <div className="search-wrapper">
            <Search size="lg" />
          </div>
          <Switches />
        </div>
        <Listing />
      </IndexContainer>
    </Layout>
  );
};

export default IndexPage;
