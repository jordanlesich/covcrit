import React from "react";
import styled from "styled-components";
import { getPalette, getBGPalette } from "../helpers";

const StyledButton = styled.button`
  padding: 0.25rem 1rem;
  border-radius: 4px;
  outline: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s all;
  height: ${props => props.height};
  width: ${props => props.width};
  :hover {
    /* background-color: #f2f6fa; */
    box-shadow: 5px 5px 3px -3px rgba(89, 89, 89, 0.3);
  }
  /* :focus {
    box-shadow: 5px 5px 3px -3px rgba(89, 89, 89, 0.3);
  } */
  background-color: ${props =>
    props.type === "primary" ? getPalette("primary") : "#ffffff"};
  color: ${props =>
    props.type === "primary" ? "#ffffff" : getPalette("secondary")};
  border: 1px solid
    ${props =>
      props.type === "primary"
        ? getPalette("primary")
        : getBGPalette("secondary")};
`;

const Button = ({ type, fn, size, text, value, height, width }) => {
  console.log(text);
  return (
    <StyledButton
      type={type}
      onClick={fn}
      value={value}
      height={height || "inherit"}
      width={width || "inherit"}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
