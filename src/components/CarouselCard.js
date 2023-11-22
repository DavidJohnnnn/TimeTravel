import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const CarouselCard = ({
  empty,
  CardImg,
  height,
  CardTitle,
  CardText,
  buttonName,
  buttontype,
}) => {
  /* if empty card is used in CarouselCards.js, we need to return it properly */
  if (empty === true) {
    return <Col className="p-4"></Col>;
  }

  /* 
    Adding card that will be 1/3 of carousel row (i.e. 4/12) 
    Also using substring to truncate Card.Text
    */

  return (
    <Col className="p-4">
      <Card>
        <Card.Img variant="top" src={CardImg} style={{ height: height }} />
        <Card.Body>
          <Card.Title>{CardTitle}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            {CardText.substring(0, 120) + "..."}
          </Card.Text>
          <Button variant={buttontype === null ? "primary" : buttontype}>
            {buttonName}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CarouselCard;