import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';
import styled from 'styled-components';
import moment from 'moment';
import shortid from 'shortid';

const LiftsTable = styled.table`
  border: 1px solid #333;
`;

const LiftHeading = styled.th`
  width: 50rem;
  background-color: #353b48;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin-right: 1rem;
  }
`;

const IndividualLift = styled.tr`
  /* border-bottom: 1px solid #333; */
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

const LiftsSummary = props =>
  props.pbs.length ? (
    <div>
      <h2>{props.lift.label}</h2>
      <Link to={`/editlift/${props.lift.liftID}`}>Edit</Link>
      <Accordion accordion={false}>
        {props.pbs.map(pb => (
          <AccordionItem>
            <AccordionItemTitle>
              <h3>{moment(pb.x).format('MMMM Do YYYY')}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>
                Weight: {pb.y}
                {props.scale}
              </p>
              <p>Note: {pb.note}</p>
              <Link to={`/editpb/${pb.pbID}`}>Edit</Link>
            </AccordionItemBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ) : (
    <p>No pbs logged.</p>
  );

// const LiftsSummary = props => (
//   <LiftsTable>
//     <LiftHeading colspan="3">
//       <h2>{props.lift.label}</h2>
//       <Link to={`/editlift/${props.lift.liftID}`}>Edit</Link>
//     </LiftHeading>

//     {props.pbs.length ? (
//       props.pbs.map(pb => (
//         <IndividualLift key={shortid.generate()}>
//           <td>
//             <h3>{moment(pb.x).format('MMMM Do YYYY')}</h3>
//           </td>
//           <td>
//             <p>
//               Weight: {pb.y}
//               {props.scale}
//             </p>
//           </td>
//           {pb.note && <p>{pb.note}</p>}
//           <td>
//             <Link to={`/editpb/${pb.pbID}`}>Edit</Link>
//           </td>
//         </IndividualLift>
//       ))
//     ) : (
//       <p>No pbs logged.</p>
//     )}
//   </LiftsTable>
// );

export default LiftsSummary;
