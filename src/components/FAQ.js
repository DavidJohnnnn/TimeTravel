import Container from 'react-bootstrap/Container';
import Jumbotron from './Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
import FAQAccord from './FAQAccord';


function FAQ() {
    let accordjson = require('../FAQ.json');
    return (
        <Container className="Page" fluid>
            <Jumbotron
                JumImg="https://picsum.photos/id/15/200/300"
                CardTle="Special title treatment"
                CardTxt="With supporting text below as a natural lead-in to additional content."
                BtnTxt="Go somewhere"
            />

            <br />
            <br />
            
            <FAQAccord accordjson={accordjson}/>

        </Container>
    );
}

export default FAQ;
