import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin-bottom: 2rem;
`;

const Chart = props => (
  <ChartContainer>
    <Line
      data={{
        datasets: props.lifts.map(lift => ({
          ...lift,
          data: props.pbs.filter(pb => lift.liftID === pb.liftID),
          lineTension: 0,
          backgroundColor: 'transparent'
        }))
      }}
      options={{
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'month'
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: label => label + props.scale
              }
            }
          ]
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) =>
              `${data.datasets[tooltipItem.datasetIndex].label}: ${
                tooltipItem.yLabel
              }${props.scale}`
          },
          xPadding: 10,
          yPadding: 10
        }
      }}
    />
  </ChartContainer>
);

export default Chart;
