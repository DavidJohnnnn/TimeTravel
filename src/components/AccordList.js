import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


// Using function from Bootstrap React
function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
      <Button variant="light" onClick={decoratedOnClick}>
        {children}
      </Button>
    );
}

function AccordList(props) {
    let ListGroupItems = []
    // Creating group of links from local json
    props.list.forEach(function (item) {
        ListGroupItems.push(
            <ListGroup.Item as="li" action href={item.link}>
                {item.name}
            </ListGroup.Item>
        )
    });
    
    // Using name and list from json
    return (
        <>
            <Row>
                <Col>
                    {props.name}
                </Col>
                <Col>
                    <CustomToggle eventKey={props.num}>
                        +
                    </CustomToggle>
                </Col>
            </Row>
            <Accordion.Collapse eventKey={props.num}>
                <Card style={{textAlign : "left"}}>
                    <ListGroup defaultActiveKey={props.list[0].link}>
                        {ListGroupItems}
                    </ListGroup>
                </Card>
            </Accordion.Collapse>
        </>
    );
}

export default AccordList;
