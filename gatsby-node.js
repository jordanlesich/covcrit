const path = require(`path`);
const _ = require("lodash");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `GoogleSpreadsheetCovid19ReportCardSheet1`) {
    const slug = `pundits/${_.kebabCase(node.name)}`;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const punditPage = path.resolve(`./src/templates/punditPage.js`);

  return graphql(`
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
            verdict
            imgLink
            nationality
            organization
            positionOrRole
            officialBio
            pullquote
            website
            twitter
            wikipedia
            reasoning
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const pundits =
      result.data.allGoogleSpreadsheetCovid19ReportCardSheet1.edges;

    pundits.forEach(pundit => {
      createPage({
        path: pundit.node.fields.slug,
        component: punditPage,
        context: {
          //I decided to take a controversial route by simplifying my query
          //The advantages include a much simpler developer experience. Also
          //faster build times. However, becuase all the data is stored in
          //redux, we can have a memory overload. But the convenience of piping
          //all this to props is far too tempting.

          //If something goes wrong, the link to fix this is
          //https://www.gatsbyjs.org/docs/creating-and-modifying-pages/
          pundit: pundit.node,
        },
      });
    });
  });
};
