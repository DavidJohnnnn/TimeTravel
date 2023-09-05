import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const CarouselCard = (props) => {
    if (props.empty === true) {
        return (
            <Col className="p-4">
                
            </Col>       
        );
    }
    return (
        <Col className="p-4">
            <Card>
                <Card.Img variant="top" src={props.CardImg} style={{ height: 200 }}/>
                <Card.Body>
                    <Card.Title>{props.CardTitle}</Card.Title>
                    <Card.Text>{props.CardText}</Card.Text>
                    <Button variant="primary">{props.buttonName}</Button>
                </Card.Body>
            </Card>
        </Col>
                
    );
}

export default CarouselCard;