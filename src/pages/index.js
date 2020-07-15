import React from "react";
import Layout from "../components/layout";
import Warning from "../components/warning";
import { Link, graphql } from "gatsby";
// import styled from 'styled-components'

const IndexPage = ({ data }) => {
  // const [isWarning, setIsWarning] = useState(true);

  const pundits = data.allGoogleSpreadsheetCovid19ReportCardSheet1.edges;
  console.log(pundits);
  return (
    <Layout>
      <Warning />
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

export default IndexPage;
