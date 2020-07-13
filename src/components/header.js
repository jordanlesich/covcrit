import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";

const Nav = styled.nav`
  /* height: 6.5rem; */
  box-shadow: -1px 3px 16px -3px rgba(0, 0, 0, 0.58);

  .nav-logo {
    display: inline-block;
    font-size: 2rem;
    padding: 1.5rem;
    margin: 1rem 0;
    border-right: 1px solid rgba(0, 0, 0, 0.58);
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <Nav>
    <Link to="/" className="nav-logo">
      {siteTitle}
    </Link>
  </Nav>
);

export default Header;
