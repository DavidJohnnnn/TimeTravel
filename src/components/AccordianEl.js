import Accordion from 'react-bootstrap/Accordion';
import AccordList from './AccordList';


function AccordianEl() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <AccordList />
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <AccordList />
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <AccordList />
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <AccordList />
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <AccordList />
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <AccordList />
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordianEl;
