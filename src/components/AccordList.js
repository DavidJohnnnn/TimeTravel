import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'


// Using function from Bootstrap React
function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
        <Badge bg="light" pill>
            <Button variant="outline-dark" onClick={decoratedOnClick}>
                {children}
            </Button>
        </Badge>
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
            <Card>
                <Row>
                    <Col className="text-center">
                        <Button variant="outline-primary" size="lg" disabled>
                            {props.name}
                        </Button>
                    </Col>
                    <Col>
                        <CustomToggle eventKey={props.num}>
                            +
                        </CustomToggle>
                    </Col>
                </Row>
            </Card>
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
