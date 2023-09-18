import Accordion from 'react-bootstrap/Accordion';


function FAQAccordRow(props) {

  let AList = []
  for (let i=0; i<props.accordList.length; i++){
    // Event key is needed because otherwise accordian will work incorrectly
    AList.push(
      <Accordion.Item eventKey={i}>
        <Accordion.Header>
            {props.accordList.q}
        </Accordion.Header>
        <Accordion.Body>
            {props.accordList.a}
        </Accordion.Body>
      </Accordion.Item>
    );
  }

  // Always open means that the accordians open tabs open remain open
  return (
    <Accordion alwaysOpen>
      {AList}
    </Accordion>
  );
}

export default FAQAccordRow;
