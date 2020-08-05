import React from "react";
import styled from "styled-components";
import { getPalette, getBGPalette } from "../helpers";

const StyledButton = styled.button`
  padding: 0.25rem 1rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  outline: none;
  font-weight: 00;
  font-family: inherit;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.2s all;

  height: ${props => props.height};
  width: ${props => props.width};
  :hover {
    background-color: ${getBGPalette("#ffffff")};
  }
  background-color: ${props =>
    !props.selected ? getBGPalette("highlight") : "#ffffff"};
  color: ${getPalette("secondary")};
  border: none;
  border-right: ${props => props.border};
  /* border-bottom: ${props => (props.selected ? "none" : props.border)}; */
`;

const TabButton = ({ fn, text, value, height, width, isSelected, border }) => {
  console.log(isSelected);
  return (
    <StyledButton
      onClick={fn}
      value={value}
      height={height || "inherit"}
      width={width || "inherit"}
      selected={isSelected}
      border={border}
    >
      {text}
    </StyledButton>
  );
};

export default TabButton;
