import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Button from "../components/button";
import { getPalette, getBGPalette } from "../helpers";
import Search from "../components/search";

const Nav = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 10;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(33, 134, 196, 0.6);

  /* box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2); */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgb(33, 134, 196);

  .nav-logo {
    display: inline-block;
    padding: 0.75rem 2rem 0.75rem 0;
    border-right: 1px solid rgba(33, 134, 196, 0.2);
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
    color: ${getPalette("secondary")};
    font-weight: 400;
    margin: 0 0 0 1rem;
    padding: 1rem;
    border-radius: 4px;
    text-decoration: none;
    font-size: 1.3rem;
    letter-spacing: -1px;
    transition: all 0.2s;
  }
  .nav-link:hover {
    background-color: ${getBGPalette("highlightprimary")};
  }
  .nav-spacer {
    flex-basis: 100%;
  }
  .nav-search-form {
    position: relative;
    margin-right: 1vw;
  }
  .nav-button {
    margin: 0 1rem;
  }
`;

const Header = ({ toggleContact }) => {
  return (
    <Nav>
      <Link to="/" className="nav-logo">
        <span className="cov">COV</span>
        <span className="critic">Critic</span>
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/" className="nav-link">
        Listing
      </Link>

      <span className="nav-spacer"></span>
      <form className="nav-search-form">
        {/* <label> */}
        <Search size="md" />
      </form>
      <span className="nav-button">
        <Button type="secondary" text="Contact" fn={toggleContact} />
      </span>
    </Nav>
  );
};

export default Header;
