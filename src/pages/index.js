import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Warning from "../components/warning";
import ListItem from "../components/listItem";
import { trimObjFields, getPalette } from "../helpers";
import styled from "styled-components";

const Listing = styled.ul`
  .listing-link {
    text-decoration: none;
  }
`;

const IndexPage = ({ data }) => {
  // const [isWarning, setIsWarning] = useState(true);

  const pundits = data.allGoogleSpreadsheetCovid19ReportCardSheet1.edges;

  return (
    <Layout>
      <Warning />
      <Listing>
        {pundits.map(({ node }, index) => {
          return (
            <Link
              to={`/${node.fields.slug}`}
              key={index}
              className="listing-link"
            >
              <ListItem pundit={trimObjFields(node)} />
            </Link>
          );
        })}
      </Listing>
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
          imgLink
          verdict
          organization
          officialBio
          positionOrRole
        }
      }
    }
  }
`;

export default IndexPage;
