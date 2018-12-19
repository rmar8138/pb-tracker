import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';
import moment from 'moment';

const LiftsSummary = props =>
  props.pbs.length ? (
    <div>
      <h2 className="display-5 text-center mt-2">{props.lift.label}</h2>
      <Link to={`/editlift/${props.lift.liftID}`}>Edit Lift</Link>
      <Accordion accordion={false}>
        {props.pbs.map(pb => (
          <AccordionItem key={pb.pbID}>
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

export default LiftsSummary;
