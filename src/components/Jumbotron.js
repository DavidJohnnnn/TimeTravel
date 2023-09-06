import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Jumbotron.css";

/* Compartmentalizing text for readability */

/* Wrapper for Jumbotron to contain card */
let JumbotronWrapper = (props) => {
    return (
        <Container className="jumbotron" style={ {backgroundImage: "url(" + props.JumImg + ")"}}>
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
                <Card.Text>
                {props.CardTxt}
                </Card.Text>
                <Button variant="primary">{props.BtnTxt}</Button>
            </Card.Body>
        </Card>
    );
}

function Jumbotron (props) {
     
    return (
        <JumbotronWrapper JumImg={props.JumImg}>
            <JumbotronCard 
                CardTle={props.CardTle}
                CardTxt={props.CardTxt}
                BtnTxt={props.BtnTxt}
                />
        </JumbotronWrapper>
        
    );
}

export default Jumbotron;
