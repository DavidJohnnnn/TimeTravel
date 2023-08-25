import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Jumbotron.css";

function Jumbotron (props) {
    return (
        <Container className="jumbotron" style={ {backgroundImage: "url(" + props.JumImg + ")"}}>
            <Row>
                <Col xs={7}>
                    <Card className="jumboCard">
                        <Card.Body>
                            <Card.Title>{props.CardTle}</Card.Title>
                            <Card.Text>
                            {props.CardTxt}
                            </Card.Text>
                            <Button variant="primary">{props.BtnTxt}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Jumbotron;
