import React from "react";
import styled from "styled-components";

import Listing from "../components/listing";
import Title from "../components/title";
import Layout from "../components/layout";
// import Warning from "../components/warning";
import Search from "../components/search";
import Switches from "../components/switches";

const IndexContainer = styled.div`
  /* margin: 0 auto; */
  padding-top: 6vh;
  /* .cta {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-variant: small-caps;
    font-size: calc(2rem + 0.5vh + 1.5vw);
    font-weight: 500;
    margin-bottom: 4vh;
    letter-spacing: -4px;
    padding-bottom: 3vh;
    padding-top: 3vh;
    border-bottom: 1px solid rgba(33, 134, 196, 0.5);
    margin-left: 4vw;
    margin-right: 4vw;
  } */
  .listing-link {
    text-decoration: none;
  }
  .search-type {
    text-transform: capitalize;
  }
  .search-form {
    width: 40vw;
    margin-left: 6.5vw;
  }
  .search-wrapper {
    margin-left: 56px;
    margin-bottom: 2vh;
  }
`;

const IndexPage = ({ data }) => {
  // const [warning, setWarning] = useState(true);

  // const toggleWarning = () => setWarning(!warning);

  return (
    <Layout>
      <IndexContainer>
        {/* {warning && <Warning toggleWarning={toggleWarning} />} */}
        <Title />
        <form className="search-form">
          <div className="search-wrapper">
            <Search size="lg" />
          </div>
          <Switches />
        </form>
        <Listing />
      </IndexContainer>
    </Layout>

    // <div>
    //   <h1 className="cta">Search for a Pundit</h1>

    //   <form className="search-form" onSubmit={handleSubmit}>
    //     {/* <label> */}

    //     {/* <span className="nav-search-text">search</span> */}
    //     {/* </label> */}

    //   </form>
    // </div>
    // )}
  );
};

export default IndexPage;
