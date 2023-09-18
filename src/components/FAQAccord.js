import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FAQAccordRow from './FAQAccordRow';


function FAQAccord(props) {

    // importing set of cards from local folder as JSON 
    let oldaccordjson = props.accordjson;
    let accordjson = [...oldaccordjson]; // need this line because otherwise interferes with accordian population when clicking other navlinks and returning to home.

    // spliting array into three equal arrays
    let resultjson = [];
    for (let i = 2; i > 0; i--) {
        resultjson.push(accordjson.splice(0, Math.ceil(accordjson.length / i)));
    }

    return (
        <Container className="px-4">
            <h1>Lorem Ipsum</h1>
            <h4>Lorem IpsumvLorem IpsumLorem Ipsum</h4>
            <Row className="g-2">
                <Col>
                    <FAQAccordRow accordList={resultjson[0]}/>
                </Col>
                <Col>
                    <FAQAccordRow accordList={resultjson[1]}/>
                </Col>
            </Row>
        </Container>
    );
}

export default FAQAccord;