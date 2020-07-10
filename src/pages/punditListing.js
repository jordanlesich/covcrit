import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

const PunditListing = ({ data }) => {
  const pundits = data.allGoogleSpreadsheetCovid19ReportCardSheet1.edges;
  console.log(pundits);
  return (
    <Layout>
      <ul>
        {pundits.map(({ node }, index) => {
          return (
            <Link to={`/${node.fields.slug}`} key={index}>
              <li>{node.name}</li>
            </Link>
          );
        })}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allGoogleSpreadsheetCovid19ReportCardSheet1(
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          name
        }
      }
    }
  }
`;

export default PunditListing;
