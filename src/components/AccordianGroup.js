import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccordianEl from './AccordianEl';

function AccordianGroup() {
  return (
    <Container className="px-4">
        <h1>Lorem Ipsum</h1>
        <h4>Lorem IpsumvLorem IpsumLorem Ipsum</h4>
      <Row className="g-2">
        <Col>
            <AccordianEl />
        </Col>
        <Col>
            <AccordianEl />
        </Col>
        <Col>
            <AccordianEl />
        </Col>
      </Row>
    </Container>
  );
}

export default AccordianGroup;