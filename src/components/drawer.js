import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { slideFromRight, slideOutRight } from "../anims";
import Backdrop from "./backdrop";

const StyledDrawer = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #ffffff;
  z-index: 15;
  border-radius: 0px 0px 4px 4px;
  animation: ${props => (props.slideIn ? slideOutRight : slideFromRight)} 0.3s
    ease-in-out both;
`;

const Drawer = ({ toggleDrawer, children }) => {
  const [opening, toggleOpening] = useState(true);

  const handleClick = e => {
    toggleOpening(!opening);
    setTimeout(() => toggleDrawer(), 200);
  };

  const handleKeyPress = e => {
    if (e.key === "Escape") {
      toggleOpening(false);
      setTimeout(() => toggleDrawer(), 200);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });
  return (
    <Backdrop fadeIn={opening} handleClick={handleClick}>
      <StyledDrawer slideIn={opening}>{children}</StyledDrawer>
    </Backdrop>
  );
};

export default Drawer;
