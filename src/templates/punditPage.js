import React from "react";
import Layout from "../components/layout";

const PunditPage = ({ pageContext }) => {
  const { pundit } = pageContext;

  // const socials = [];
  const name = pundit.name;
  const verdict = pundit.verdict || "Undecided";
  const nationality = pundit.nationality || "Needs to be added";
  const organization = pundit.organization || "Needs to be added";
  const positionOrRole = pundit.positionOrRole || "Needs to be added";
  const officialBio = pundit.officialBio || "Needs to be added";

  // // const pullquote = pundit.pullquote || "Needs to be added";

  console.log(pundit.name);
  return (
    <Layout>
      <div>
        <h1>{pundit.name}</h1>
        {pundit.imgLink ? (
          <img src={pundit.imgLink} />
        ) : (
          <div>"No Image Link"</div>
        )}
        <p>{pundit.verdict}</p>
        <p>{pundit.organization}</p>
        <p>{pundit.positionOrRole}</p>
        <p>{pundit.officialBio}</p>
        <div className="pundit-socials"></div>
        <ul>
          {pundit.reasoning !== null
            ? pundit.reasoning.match(/[^\*]+/g).map((str, index) => {
                return <li key={index}>{str}</li>;
              })
            : "Reasoning needs to be added"}
        </ul>
      </div>
    </Layout>
  );
};

export default PunditPage;
