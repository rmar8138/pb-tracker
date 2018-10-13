import React from "react";
import { Line } from "react-chartjs-2";

const Chart = props => (
  <div>
    <Line
      data={{
        datasets: props.lifts.map(lift => ({
          ...lift,
          data: props.pbs.filter(pb => lift.liftID === pb.liftID)
        }))
      }}
      options={{
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "month"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        tooltips: {
          callbacks: {}
        }
      }}
    />
  </div>
);

export default Chart;
