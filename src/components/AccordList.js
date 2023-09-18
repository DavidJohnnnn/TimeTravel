import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


// Using function from Bootstrap React
function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
        <Badge bg="light">
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
            <Stack direction="horizontal" gap={3}>
                <div className="p-2">  {props.name}</div>
                <div className="p-2 ms-auto">
                    <CustomToggle eventKey={props.num}>
                        +
                    </CustomToggle>
                </div>
            </Stack>
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
