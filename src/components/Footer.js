import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
    return (
        <div className="bottomBox">
            <Container fluid className="bottomDiv">
                <Row style={{textAlign: "center"}}>
                    <Col>
                        <h6>Company</h6>
                        <ul style={{listStyle: "none"}}>
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                        </ul>
                    </Col>
                    <Col>
                        <h6>Contact</h6>
                        <ul style={{listStyle: "none"}}>
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                            <li>item 6</li>
                        </ul>
                    </Col>
                    <Col>
                        <h6>More</h6>
                        <ul style={{listStyle: "none"}}>
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
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