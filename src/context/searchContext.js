import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { trimObjFields } from "../helpers";

export const SearchContext = React.createContext();

export const SearchProvider = props => {
  const data = useStaticQuery(graphql`
    query PunditQuery {
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
            entityType
          }
        }
      }
    }
  `);

  const totalNodes = data.allGoogleSpreadsheetCovid19ReportCardSheet1.edges.map(
    ({ node }) => trimObjFields(node)
  );
  const punditNodes = totalNodes.filter(node => node.entityType === "Person");
  const orgNodes = totalNodes.filter(
    node => node.entityType === "Organization"
  );

  const [pundits, setPundits] = useState(punditNodes);
  const [orgs, setOrgs] = useState(orgNodes);
  const [filterType, setFilterType] = useState("pundit");
  const [searchType, setSearchType] = useState("name");
  const [search, setSearch] = useState("");
  const [isReliable, setIsReliable] = useState("both");

  const filterNodes = (str, type, reliable, sType) => {
    const nodes = type === "pundit" ? punditNodes : orgNodes;
    console.log(nodes);
    const setter = type === "pundit" ? setPundits : setOrgs;
    let newNodes = nodes.filter(node => {
      if (node[sType] != null) {
        return (
          node[sType].toLowerCase().includes(str.trim()) ||
          node[sType].includes(str.trim())
        );
      } else {
        return false;
      }
    });
    if (reliable !== "both") {
      newNodes = newNodes.filter(node => {
        return node.verdict.trim().toLowerCase() === reliable;
      });
    }
    setter(newNodes);
  };

  const handleSearch = str => {
    setSearch(str);
    filterNodes(str, filterType, isReliable, searchType);
  };
  const handleSearchType = e => {
    setSearchType(e.target.value);
    filterNodes(search, filterType, isReliable, e.target.value);
  };
  const handleSearchReliable = e => {
    setIsReliable(e.target.value);
    filterNodes(search, filterType, e.target.value, searchType);
  };

  const handleSubmit = e => {
    e.preventDefault();
    filterNodes(search, filterType, isReliable, searchType);
  };

  const switchFilterType = e => {
    setFilterType(e.target.value);
    filterNodes(search, e.target.value, isReliable, searchType);
  };

  return (
    <SearchContext.Provider
      value={{
        pundits,
        orgs,
        isReliable,
        setPundits,
        switchFilterType,
        searchType,
        filterType,
        handleSearch,
        handleSearchType,
        handleSubmit,
        handleSearchReliable,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
