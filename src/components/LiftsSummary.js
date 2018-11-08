import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import shortid from "shortid";
import { Header } from "../styles/utilities";

const LiftsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LiftsCard = styled.div`
  width: 30%;
  height: 50rem;
  overflow: scroll;
  padding: 1rem;
`;

const LiftsSummary = props => (
  <div>
    <h2>
      {props.lift.label}
      <Link to={`/editlift/${props.lift.liftID}`}>Edit</Link>
    </h2>
    <div>
      {props.pbs.length ? (
        props.pbs.map(pb => (
          <div key={shortid.generate()}>
            <h3>{moment(pb.x).format("MMMM Do YYYY")}</h3>
            <p>
              Weight: {pb.y}
              {props.scale}
            </p>
            {pb.note && <p>{pb.note}</p>}
            <Link to={`/editpb/${pb.pbID}`}>Edit</Link>
          </div>
        ))
      ) : (
        <p>No pbs logged.</p>
      )}
    </div>
  </div>
);

export default LiftsSummary;
