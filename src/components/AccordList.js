import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';


function AccordList(props) {

    let ListGroupItems = []
    props.list.forEach(function (item) {
        ListGroupItems.push(
            <ListGroup.Item action href={item.link}>
                {item.name}
            </ListGroup.Item>
        )
    });
    
    return (
        <>
            <Accordion.Header>{props.name}</Accordion.Header>
            <Accordion.Body>
                <ListGroup defaultActiveKey={props.list[0].link}>
                    {ListGroupItems}
                </ListGroup>
            </Accordion.Body>
        </>
    );
}

export default AccordList;
