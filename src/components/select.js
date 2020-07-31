import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.select`
  margin-bottom: 1vh;
  box-sizing: border-box;
  display: inline-block;
  font-size: 1.2rem;
  height: 40px;
  width: 250px;
  padding-bottom: 2px;
  padding-left: 6px;
  border: 1px solid rgba(33, 134, 196, 0.6);
  border-radius: 4px;
  transition: 0.2s all;
  :focus {
    background-color: #f2f6fa;
    outline: none;
    border: 1px solid rgba(33, 134, 196, 1);
    box-shadow: 5px 5px 3px -3px rgba(89, 89, 89, 0.3);
  }
  label {
    display: inline-block;
  }
`;

const Select = ({ options, label, id, fn }) => {
  id ||
    console.error(
      "Styled Select requires an id string to match the label with the input "
    );
  label || console.error("Styled Select requires a label string for a11y");

  return (
    <StyledLabel htmlFor={id}>
      {label ? label : "No Label Passed In"}
      <StyledSelect id={id} onChange={fn} onBlur={fn}>
        {options ? (
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))
        ) : (
          <option>No options passed in</option>
        )}
      </StyledSelect>
    </StyledLabel>
  );
};

export default Select;
