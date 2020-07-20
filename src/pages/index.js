import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Warning from "../components/warning";
import ListItem from "../components/listItem";
import SearchIcon from "@material-ui/icons/Search";

import { trimObjFields } from "../helpers";

const Listing = styled.div`
  border-left: 1px solid rgba(33, 134, 196, 1);
  .search-container {
    margin-left: 6vw;
  }
  .cta {
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
  .listing-link {
    text-decoration: none;
  }
  .search-form {
    position: relative;
    display: inline-block;
    margin-right: 1vw;
    margin-left: 4vw;
  }
  .search-icon {
    color: rgb(33, 134, 196);
    position: absolute;
    right: 0;
    transform: translate(4.5rem, -0.7rem);
    height: 4rem;
    width: 4rem;
  }
  .search-input {
    border: 2px solid rgb(33, 134, 196);
    border-radius: 5px;
    font-size: 2.2rem;
  }
`;

const IndexPage = ({ data }) => {
  const punditNodes = data.allGoogleSpreadsheetCovid19ReportCardSheet1.edges.map(
    ({ node }) => node
  );

  const [warning, setWarning] = useState(true);
  const [filterBy, setFilterBy] = useState("name");
  const [search, setSearch] = useState("");
  const [pundits, setPundits] = useState(punditNodes);

  const filterPundits = str => {
    const newPundits = punditNodes.filter(pundit => {
      return pundit[filterBy].toLowerCase().includes(str);
    });
    setPundits(newPundits);
  };

  const handleSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
    filterPundits(e.target.value);
  };

  const toggleWarning = () => setWarning(!warning);

  return (
    <Layout>
      <Listing>
        {warning ? (
          <div className="search-container">
            <Warning toggleWarning={toggleWarning} />
          </div>
        ) : (
          <div>
            <h1 className="cta">Search for a Pundit</h1>

            <form className="search-form" onSubmit={handleSearch}>
              {/* <label> */}
              <SearchIcon className="search-icon" />
              {/* <span className="nav-search-text">search</span> */}
              {/* </label> */}
              <input
                className="search-input"
                placeholder="Pundit Name"
                value={search}
                onChange={handleSearch}
              />
            </form>
          </div>
        )}
        <ul>
          {pundits.map((node, index) => {
            return (
              <Link
                to={`/${node.fields.slug}`}
                key={index}
                className="listing-link"
              >
                <ListItem pundit={trimObjFields(node)} />
              </Link>
            );
          })}
        </ul>
      </Listing>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allGoogleSpreadsheetCovid19ReportCardSheet1(
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          name
          imgLink
          verdict
          organization
          officialBio
          positionOrRole
        }
      }
    }
  }
`;

export default IndexPage;
