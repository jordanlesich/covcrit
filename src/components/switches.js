import React, { useState, useContext } from "react";
import { SearchContext } from "../context/searchContext";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Select from "../components/select";
import Input from "../components/input";
import TextBox from "../components/textBox";

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
  /* select {
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
  } */
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
        <span className="details-label" onClick={toggleOpen}>
          Advanced Search{" "}
        </span>
        <ExpandMoreIcon
          id="details-icon"
          className={`details-icon ${open && "selected"}`}
          onClick={toggleOpen}
        />
      </div>
      <div className={`select-box ${open && "box-open"}`}>
        <Select
          id={"filter-type"}
          label={"Search For:"}
          options={[
            { value: "pundit", name: "Pundits" },
            { value: "organization", name: "Organizations" },
          ]}
          fn={switchFilterType}
        />
        <Select
          id={"search-by-reliable"}
          label={"Reliability"}
          options={[
            { value: "both", name: "Both" },
            { value: "reliable", name: "Reliable" },
            { value: "unreliable", name: "Unreliable" },
          ]}
          fn={handleSearchReliable}
        />
        <Select
          id={"search-type"}
          label={"Search By: "}
          options={[
            { value: "name", name: "Name" },
            { value: "organization", name: "Organization" },
            { value: "field", name: "Field" },
          ]}
          fn={handleSearchType}
        />
        <Input
          label="Test"
          id="text"
          fn={() => console.log("test")}
          placeholder="Holy Shit!"
          type="email"
        />
        <TextBox
          label="Test"
          id="text"
          fn={() => console.log("test")}
          placeholder="Holy Shit!"
        />
      </div>
    </SwitchBox>
  );
};

export default Switches;
