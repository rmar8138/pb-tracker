import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import shortid from "shortid";

const LiftsSummary = props => {
  return (
    <div>
      {props.lifts.map(lift => {
        const pbArray = props.pbs.filter(pb => pb.liftID === lift.liftID);
        return (
          <div key={shortid.generate()}>
            <h2>
              {lift.label}
              <Link to={`/editlift/${lift.liftID}`}>Edit</Link>
            </h2>
            {pbArray.length ? (
              pbArray.map(pb => {
                return (
                  <div key={shortid.generate()}>
                    <h3>{moment(pb.x).format("MMMM Do YYYY")}</h3>
                    <p>
                      Weight: {pb.y}
                      {props.scale}
                    </p>
                    {pb.note && <p>{pb.note}</p>}
                    <Link to={`/editpb/${pb.pbID}`}>Edit</Link>
                  </div>
                );
              })
            ) : (
              <p>No pbs logged.</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LiftsSummary;
