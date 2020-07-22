import React from "react";
import styled from "styled-components";
import { getPalette, getBGPalette } from "../helpers";

const ReasonSection = styled.section`
  padding: 2vw 0;
  margin: 0 4vw;
  border-top: 1px solid ${props => getBGPalette(props.verdict)};
  border-bottom: 1px solid ${props => getBGPalette(props.verdict)};
  .reason-title {
    font-size: 2.5rem;
  }
  .title-color {
    color: ${props => getPalette(props.verdict)};
  }
  .reason {
    font-size: 1.1rem;
  }
  .list {
    margin: 0 4vw;
  }
`;

const Reasoning = ({ name, verdict, reasoning }) => {
  return (
    <ReasonSection verdict={verdict}>
      <h3 className="reason-title">
        Why is {name} <span className="title-color">{verdict}</span>?
      </h3>
      <ul className="list">
        {reasoning !== null
          ? reasoning.match(/[^*]+/g).map((str, index) => {
              return (
                <li key={index} className="reason">
                  {str}
                </li>
              );
            })
          : "There currently isn't enough information in the database"}
      </ul>
    </ReasonSection>
  );
};

export default Reasoning;
