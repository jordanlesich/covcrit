import React, { useState, useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/searchContext";
import SearchIcon from "@material-ui/icons/Search";

const SearchBox = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: relative;
  /* margin-bottom: 2vh; */
  display: inline-block;
  .search-icon {
    top: 0;
    left: 0;
    position: absolute;
    transform: translateX(-98%);
    color: #ffffff;
    box-sizing: border-box;
    padding: 2.5px 8px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: rgba(33, 134, 196, 1);
    height: ${props => (props.size === "lg" ? "50px" : "40px")};
    width: ${props => (props.size === "lg" ? "50px" : "40px")};
  }
  .search-input {
    font-size: ${props => (props.size === "lg" ? "1.6rem" : "1.2rem")};
    box-sizing: border-box;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 2px solid rgba(33, 134, 196, 1);
    height: ${props => (props.size === "lg" ? "50px" : "40px")};
    padding-bottom: 2px;
    padding-left: 0.5rem;
    width: ${props => (props.size === "lg" ? "200px" : "100px")};
    transition: 0.3s all;
  }
  .search-input:focus {
    width: ${props => (props.size === "lg" ? "270px" : "150px")};
    outline: none;
    background-color: rgba(33, 134, 196, 0.1);
    box-shadow: 5px 5px 3px -3px rgba(89, 89, 89, 0.3);
  }
`;

const Search = ({ size }) => {
  const { handleSearch } = useContext(SearchContext);
  const [localValue, setLocalValue] = useState("");

  const handleChange = e => {
    handleSearch(e.target.value);
    setLocalValue(e.target.value);
  };

  return (
    <SearchBox size={size}>
      <input
        className="search-input"
        placeholder={`search`}
        value={localValue}
        onChange={handleChange}
      />
      <SearchIcon className="search-icon" />
    </SearchBox>
  );
};

export default Search;
