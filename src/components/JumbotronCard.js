import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/* Jumbotron card */
let JumbotronCard = ({ CardTle, CardTxt, onSelect, BtnTxt }) => {
  return (
    <Card className="jumboCard">
      <Card.Body>
        <Card.Title>{CardTle}</Card.Title>
        <Card.Text>{CardTxt}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            // setting on button click to setState from Jumbotron component
            onSelect(Math.floor(Math.random() * 150));
          }}
        >
          {BtnTxt}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JumbotronCard;
