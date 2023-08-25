import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';


function AccordList() {
  return (
    <>
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                    Link 2
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                    Link 3
                </ListGroup.Item>
            </ListGroup>
        </Accordion.Body>
    </>
  );
}

export default AccordList;
