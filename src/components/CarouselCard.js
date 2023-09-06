import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const CarouselCard = (props) => {
    /* if empty card is used in CarouselCards.js, we need to return it properly */
    if (props.empty === true) {
        return (
            <Col className="p-4">
                
            </Col>       
        );
    }

    /* 
    Adding card that will be 1/3 of carousel row (i.e. 4/12) 
    Also using substring to truncate Card.Text
    */

    return (
        <Col className="p-4">
            <Card>
                <Card.Img variant="top" src={props.CardImg} style={{ height: props.height }}/>
                <Card.Body>
                    <Card.Title>{props.CardTitle}</Card.Title>
                    <Card.Text style={{textAlign : "left"}}>{props.CardText.substring(0, 120) + "..."}</Card.Text>
                    <Button variant="primary">{props.buttonName}</Button>
                </Card.Body>
            </Card>
        </Col>
                
    );
}

export default CarouselCard;