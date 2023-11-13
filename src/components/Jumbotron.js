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
let JumbotronCard = ({CardTle, CardTxt, onSelect, BtnTxt}) => {
  return (
    <Card className="jumboCard">
      <Card.Body>
        <Card.Title>{CardTle}</Card.Title>
        <Card.Text>{CardTxt}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {  // setting on button click to setState from Jumbotron component
            onSelect(Math.floor(Math.random() * 150));
          }}
        >
          {BtnTxt}
        </Button>
      </Card.Body>
    </Card>
  );
}

function Jumbotron ({JumImg, CardTle, CardTxt, BtnTxt}) {
  const [jumboImg, setJumboImg] = useState(Math.floor(Math.random() * 150)); // simple useState to reload the function and the image
  
  return (
    <JumbotronWrapper JumImg={JumImg} rand={jumboImg}>
      <JumbotronCard
        CardTle={CardTle}
        CardTxt={CardTxt}
        BtnTxt={BtnTxt}
        onSelect={setJumboImg}  // Send setState function to button in JumbotronCard so element is reloaded whenever button on Jumbotron is pressed.
      />
    </JumbotronWrapper>
  );
}

export default Jumbotron;
