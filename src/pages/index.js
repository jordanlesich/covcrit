import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <Link to="/punditListing">
      <h1>Soma'dat Shit!</h1>
    </Link>
    {/* <Link>See Listing</Link> */}
  </Layout>
);

export default IndexPage;
