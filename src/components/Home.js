import Container from 'react-bootstrap/Container';
import Jumbotron from './Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
import CarouselCards from './CarouselCards';
import AccordianGroup from './AccordianGroup';
import Footer from './Footer';


function Home() {
  let accordjson = require('../Accordian.json');
  
  return (
    <Container className="Page" fluid>
      <Jumbotron
        JumImg="https://picsum.photos/id/1/200/300"
        CardTle="Special title treatment"
        CardTxt="With supporting text below as a natural lead-in to additional content."
        BtnTxt="Go somewhere"
      />
      <br />
      <br />
      
      <CarouselCards />

      <br />
      <br />


      <AccordianGroup accordjson={accordjson}/>

      <br />
      <br />

      <Footer />
    </Container>
  );
}

export default Home;
