import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import "./Jumbotron.css";

/* Compartmentalizing text for readability */

/* Wrapper for Jumbotron to contain card */
let JumbotronWrapper = (props) => {
  return (
    <Container
      className="jumbotron"
      style={{  // props.rand is jumboImg from Jumbotron component below
        backgroundImage: "url(https://picsum.photos/id/"+ props.rand + "/2000/1440)",
        backgroundSize: "fill",
      }}
    >
      <Row>
        <Col xs={7}>{props.children}</Col>
        <Col></Col> {/* Space added for this column */}
      </Row>
    </Container>
  );
}

/* Jumbotron card */
let JumbotronCard = (props) => {
  return (
    <Card className="jumboCard">
      <Card.Body>
        <Card.Title>{props.CardTle}</Card.Title>
        <Card.Text>{props.CardTxt}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {  // setting on button click to setState from Jumbotron component
            props.onSelect(Math.floor(Math.random() * 150));
          }}
        >
          {props.BtnTxt}
        </Button>
      </Card.Body>
    </Card>
  );
}

function Jumbotron (props) {
  const [jumboImg, setJumboImg] = useState(Math.floor(Math.random() * 150)); // simple useState to reload the function and the image
  
  return (
    <JumbotronWrapper JumImg={props.JumImg} rand={jumboImg}>
      <JumbotronCard
        CardTle={props.CardTle}
        CardTxt={props.CardTxt}
        BtnTxt={props.BtnTxt}
        onSelect={setJumboImg}  // Send setState function to button in JumbotronCard so element is reloaded whenever button on Jumbotron is pressed.
      />
    </JumbotronWrapper>
  );
}

export default Jumbotron;
