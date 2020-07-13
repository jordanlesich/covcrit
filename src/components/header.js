import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";

const Nav = styled.nav`
  /* height: 6.5rem; */
  display: flex;
  box-shadow: -1px 3px 16px -3px rgba(0, 0, 0, 0.58);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .nav-logo {
    display: inline-block;

    padding: 1.5rem;
    margin: 1rem 0;
    border-right: 1px solid rgba(33, 134, 196, 0.4);
    text-decoration: none;
    color: rgb(33, 134, 196);
    .cov {
      font-size: 3rem;
      font-weight: 500;
      letter-spacing: -6px;
    }
    .critic {
      font-size: 1.5rem;
      font-weight: 300;
      letter-spacing: 1px;
    }
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: rgb(33, 134, 196);
    font-weight: 500;
    /* padding: 1.5rem; */
    margin: 1rem 0 1rem 3rem;
    text-decoration: none;
    font-size: 1.3rem;
    letter-spacing: -1px;
    :hover {
      transition: all 0.2s;
      text-decoration: underline;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <Nav>
    <Link to="/" className="nav-logo">
      <span className="cov">COV</span>
      <span className="critic">Critic</span>
    </Link>
    <Link to="/" className="nav-link">
      About
    </Link>
    <Link to="/" className="nav-link">
      Listing
    </Link>
    <form>
      {/* <label> */}
      <SearchIcon />
      <span>search</span>
      {/* </label> */}
      <input placeholder="Pundit Name" />
    </form>
  </Nav>
);

export default Header;
