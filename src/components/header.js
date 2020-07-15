import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";

const Nav = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 10;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: -1px 3px 16px -3px rgba(0, 0, 0, 0.58);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgb(33, 134, 196);

  .nav-logo {
    display: inline-block;
    padding: 0.75rem 2rem 0.75rem 0;
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
    color: rgb(33, 134, 196);
    font-weight: 500;
    margin: 0 0 0 3rem;
    text-decoration: none;
    font-size: 1.3rem;
    letter-spacing: -1px;
    transition: all 0.2s;
  }
  .nav-link:hover {
    text-decoration: underline;
  }
  .nav-spacer {
    flex-basis: 100%;
  }
  .nav-search-form {
    position: relative;
    margin-right: 1vw;
  }
  .nav-search-icon {
    position: absolute;
    transform: translate(-2.2rem, -0.05rem);
    height: 2rem;
    width: 2rem;
  }
  .nav-search-input {
    border: 2px solid rgb(33, 134, 196);
    border-radius: 5px;
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
    <span className="nav-spacer"></span>
    <form className="nav-search-form">
      {/* <label> */}
      <SearchIcon className="nav-search-icon" />
      {/* <span className="nav-search-text">search</span> */}
      {/* </label> */}
      <input className="nav-search-input" placeholder="Pundit Name" />
    </form>
  </Nav>
);

export default Header;
