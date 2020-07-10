import React from "react";
import Layout from "../components/layout";

const PunditPage = ({ pageContext }) => {
  const { pundit } = pageContext;
  return (
    <Layout>
      <div>
        <h1>{pundit.name}</h1>
        <p>{pundit.website}</p>
        <p>{pundit.twitter}</p>
        <p>{pundit.dateWarnedAboutCovid}</p>
      </div>
    </Layout>
  );
};

export default PunditPage;
