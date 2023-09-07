import Accordion from 'react-bootstrap/Accordion';
import AccordList from './AccordList';


function AccordianEl(props) {

  let AList = []
  for (let i=0; i<props.accordList; i++){
    AList.push(
      <Accordion.Item eventKey={i}>
        <AccordList 
          name={props.accordList[i].name}
          list={props.accordList[i].list}
        />
      </Accordion.Item>
    );
  }

  return (
    <Accordion>
      {AList}
    </Accordion>
  );
}

export default AccordianEl;
