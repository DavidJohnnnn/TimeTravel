import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Footer.css';

function Footer() {
    return (
        <div className="bottomBox">
            <Container fluid className="bottomDiv">
                <Row>
                    <Col>
                        <h6>About</h6>
                        <ListGroup>
                            <ListGroup.Item variant="dark" action href="#link1">
                                Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Link 2
                            </ListGroup.Item>
                            <ListGroup.Item action href="">
                                Link 3
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h6>About</h6>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Link 2
                            </ListGroup.Item>
                            <ListGroup.Item action href="">
                                Link 3
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h6>About</h6>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Link 2
                            </ListGroup.Item>
                            <ListGroup.Item action href="">
                                Link 3
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>

                </Row>
                <Row>
                    <Col></Col>
                    <Col>© 2023 David John.</Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;