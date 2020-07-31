import React, { useContext } from "react";
import { Link } from "gatsby";
import { SearchContext } from "../context/searchContext";

import styled from "styled-components";
import ListItem from "../components/listItem";
import { trimObjFields } from "../helpers";

const ListingContainer = styled.div``;

const Listing = ({ nodes }) => {
  const { pundits, orgs, filterType } = useContext(SearchContext);
  const getList = nodes => {
    return nodes.map((node, index) => {
      return (
        <Link to={`/${node.fields.slug}`} key={index} className="listing-link">
          <ListItem pundit={trimObjFields(node)} />
        </Link>
      );
    });
  };

  return (
    <ListingContainer>
      <ul>{getList(filterType === "pundit" ? pundits : orgs)}</ul>
    </ListingContainer>
  );
};

export default Listing;
