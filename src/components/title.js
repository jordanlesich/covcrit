import React, { useContext } from "react";
import styled from "styled-components";

import { SearchContext } from "../context/searchContext";
import { getPalette } from "../helpers";

const HomePageTitle = styled.h1`
  color: ${getPalette("secondary")};
  margin-bottom: 4vh;
  margin-left: 4vw;
  font-size: calc(2rem + 0.5vh + 1.5vw);
  letter-spacing: -2px;
  font-weight: 700;
  .search-type {
    color: rgba(33, 134, 196, 1);
  }
  .search-reliable {
    color: ${props => props.color};
  }
`;

const filterTypeStrings = {
  pundit: " Pundits",
  organization: " Organizations",
};

const searchTypeStrings = {
  name: " Name",
  organization: " Organization",
  field: " Field of Work",
};

const Title = () => {
  const { filterType, searchType, isReliable } = useContext(SearchContext);

  return (
    <HomePageTitle color={getPalette(isReliable)} key={"title"}>
      Find
      <span className="search-reliable">
        {isReliable === "reliable" && " Reliable"}
        {isReliable === "unreliable" && " Unreliable"}
      </span>
      <span className="search-type">{filterTypeStrings[filterType]} </span>
      By
      <span>{searchTypeStrings[searchType]} </span>
    </HomePageTitle>
  );
};

export default Title;
