import Container from 'react-bootstrap/Container';
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

function Jumbotron ({JumImg, JumbotronContent, ...props}) {
  const [jumboImg, setJumboImg] = useState(Math.floor(Math.random() * 150)); // simple useState to reload the function and the image
  
  return (
    <JumbotronWrapper JumImg={JumImg} rand={jumboImg}>
      <JumbotronContent
        onSelect={setJumboImg}  // Send setState function to button in JumbotronCard so element is reloaded whenever button on Jumbotron is pressed.
        {...props}
      />
    </JumbotronWrapper>
  );
}

export default Jumbotron;
