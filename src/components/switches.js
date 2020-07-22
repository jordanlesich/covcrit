import React, { useState, useContext } from "react";
import { SearchContext } from "../context/searchContext";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SwitchBox = styled.div`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  flex-direction: column;
  align-items: flex-start;
  .select-box {
    display: flex;
    flex-direction: column;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height opacity 0.3s ease-out;
  }
  .box-open {
    max-height: 1000px;
    opacity: 1;
    transition: max-height 0.2s ease-in;
  }
  label {
    display: inline-block;
  }
  select {
    margin-bottom: 1vh;
    box-sizing: content-box;
    display: inline-block;
    font-size: 1.2rem;
    height: 30px;
    width: 250px;
    padding-bottom: 2px;
    padding-left: 6px;
    border: 2px solid rgba(33, 134, 196, 0.5);
    border-radius: 4px;
    transition: 0.2s all;
  }
  select:focus {
    outline: none;
    border: 2px solid rgba(33, 134, 196, 1);
  }
  .details-switch {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    cursor: pointer;
  }
  .details-label {
    font-size: 1.2rem;
    margin-right: 0.4rem;
  }
  .details-icon {
    height: 25px;
    width: 25px;
    transform: rotate(0deg);
    transition: 0.2s all;
  }
  .selected {
    transform: rotate(-180deg);
  }
`;

const Switches = () => {
  const {
    handleSearchType,
    handleSearchReliable,
    switchFilterType,
  } = useContext(SearchContext);

  const [open, setOpen] = useState(false);

  const toggleOpen = e => setOpen(!open);

  return (
    <SwitchBox>
      <div className="details-switch">
        <span className={"details-label"} onClick={toggleOpen}>
          Advanced Search{" "}
        </span>
        <ExpandMoreIcon
          id="details-icon"
          className={`details-icon ${open && "selected"}`}
          onClick={toggleOpen}
        />
      </div>
      <div className={`select-box ${open && "box-open"}`}>
        <label htmlFor="filter-type">Search For: </label>
        <select
          id="filter-type"
          className="filter-type"
          onChange={switchFilterType}
          onBlur={switchFilterType}
        >
          <option value="pundit">Only Pundits</option>
          <option value="organization">Only Organizations</option>
        </select>
        <label htmlFor="search-by-reliable">Reliability: </label>
        <select
          id="search-by-reliable"
          className="search-by-reliable"
          onChange={handleSearchReliable}
          onBlur={handleSearchReliable}
        >
          <option value="both"> Both </option>
          <option value="reliable"> Reliable</option>
          <option value="unreliable"> Unreliable </option>
        </select>
        <label htmlFor="search-type">Search By: </label>
        <select
          id="search-type"
          className="search-type"
          onChange={handleSearchType}
          onBlur={handleSearchType}
        >
          <option value="name"> Name </option>
          <option value="organization"> Organization </option>
          <option value="field"> Field </option>
        </select>
      </div>
    </SwitchBox>
  );
};

export default Switches;
