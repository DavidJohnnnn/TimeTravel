import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';



function AccordList(props) {

    let ListGroupItems = []
    // Creating group of links from local json
    props.list.forEach(function (item) {
        ListGroupItems.push(
            <ListGroup.Item action href={item.link}>
                {item.name}
            </ListGroup.Item>
        )
    });
    
    // Using name and list from json
    return (
        <>
            <Accordion.Header>{props.name}</Accordion.Header>
            <Accordion.Body>
                <Card style={{textAlign : "left"}}>
                    <ListGroup defaultActiveKey={props.list[0].link}>
                        {ListGroupItems}
                    </ListGroup>
                </Card>
            </Accordion.Body>
        </>
    );
}

export default AccordList;
