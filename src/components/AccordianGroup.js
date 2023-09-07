import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccordianEl from './AccordianEl';

function AccordianGroup() {
    /* importing set of cards from local folder as JSON */
    let accordjson = require('../Accordian.json');

    // spliting array into three equal arrays
    let resultjson = [];
    for (let i = 3; i > 0; i--) {
        resultjson.push(accordjson.splice(0, Math.ceil(accordjson.length / i)));
    }

    console.log(resultjson);



    return (
        <Container className="px-4">
            <h1>Lorem Ipsum</h1>
            <h4>Lorem IpsumvLorem IpsumLorem Ipsum</h4>
            <Row className="g-2">
            <Col>
                <AccordianEl 
                    accordList={resultjson[0]}
                />
            </Col>
            <Col>
                <AccordianEl 
                    accordList={resultjson[1]}
                />
            </Col>
            <Col>
                <AccordianEl 
                    accordList={resultjson[2]}
                />
            </Col>
            </Row>
        </Container>
    );
}

export default AccordianGroup;