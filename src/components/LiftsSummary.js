import React from "react";
import moment from "moment";
import shortid from "shortid";

const LiftsSummary = props => {
  return (
    <div>
      {props.lifts.map(lift => {
        const pbArray = props.pbs.filter(pb => pb.liftID === lift.liftID);
        return (
          <div key={shortid.generate()}>
            <h2>{lift.label}</h2>
            {pbArray.length ? (
              pbArray.map(pb => {
                return (
                  <div key={shortid.generate()}>
                    <h3>{moment(pb.x).format("MMMM Do YYYY")}</h3>
                    <p>Weight: {pb.y}</p>
                    {pb.note && <p>{pb.note}</p>}
                  </div>
                );
              })
            ) : (
              <p>No pbs logged</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LiftsSummary;
