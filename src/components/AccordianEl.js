import Accordion from 'react-bootstrap/Accordion';
import AccordList from './AccordList';


function AccordianEl(props) {

  let AList = []
  for (let i=0; i<props.accordList.length; i++){
    // Event key is needed because otherwise accordian will work incorrectly
    AList.push(
      <Accordion.Item eventKey={i}>
        <AccordList 
          name={props.accordList[i].name}
          list={props.accordList[i].list}
          num={i}
        />
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

export default AccordianEl;
