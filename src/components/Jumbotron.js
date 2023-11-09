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
      style={{
        backgroundImage: "url(" + props.JumImg + ")",
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
        <Button variant="primary" onClick={() => {console.log("pressed"); props.onSelect(Math.random());}}>
          {props.BtnTxt}
        </Button>
      </Card.Body>
    </Card>
  );
}

function Jumbotron (props) {
  const [jumboImg, setJumboImg] = useState("0"); // simple useState to reload the function and the image
  console.log(jumboImg);
  console.log("url(" + props.JumImg + ")");
  return (
    <JumbotronWrapper JumImg={props.JumImg}>
      <JumbotronCard
        CardTle={props.CardTle}
        CardTxt={props.CardTxt}
        BtnTxt={props.BtnTxt}
        onSelect={setJumboImg}
      />
    </JumbotronWrapper>
  );
}

export default Jumbotron;
