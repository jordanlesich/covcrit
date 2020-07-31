import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledTextBox = styled.textarea`
  margin-bottom: 1vh;
  box-sizing: border-box;
  display: inline-block;
  font-size: 1.2rem;
  padding-left: 9px;
  padding-bottom: 2px;
  border: 1px solid rgba(33, 134, 196, 0.6);
  border-radius: 4px;
  transition: 0.2s all;
  ::placeholder {
    margin-left: 6px;
  }
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

const TextBox = ({ placeholder, label, id, fn, type, cols, rows, name }) => {
  id ||
    console.warn(
      "Styled Input requires an id string to match the label with the input "
    );
  label || console.warn("Styled Input requires a label string for a11y");

  return (
    <StyledLabel htmlFor={id}>
      {label ? label : "No Label Passed In"}
      <StyledTextBox
        id={id}
        name={name || id || "name your Input"}
        onChange={fn}
        onBlur={fn}
        placeholder={placeholder || "Placeholder text"}
        type={"email"}
        cols={cols || 30}
        rows={rows || 10}
      />
    </StyledLabel>
  );
};

export default TextBox;
