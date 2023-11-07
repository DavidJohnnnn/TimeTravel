import Container from 'react-bootstrap/Container';
import Jumbotron from './Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
import CarouselCards from './CarouselCards';
import AccordianGroup from './AccordianGroup';
import ACCORDJSON from '../Accordian.json';


function Home() {
  // console.log(ACCORDJSON);
  //let accordjson = require('../Accordian.json');
  //{Math.floor(Math.random() * (200 - 1) + 0)}
  // let randomPic = "https://picsum.photos/id/" +Math.floor(Math.random() * (200 - 1) + 0) +"/200/300";
  return (
    <Container className="Page" fluid>
      <Jumbotron
        JumImg="https://picsum.photos/2000/1440"
        CardTle="Special title treatment"
        CardTxt="With supporting text below as a natural lead-in to additional content."
        BtnTxt="Go somewhere"
      />
      <br />
      <br />

      <CarouselCards />

      <br />
      <br />

      <AccordianGroup accordjson={ACCORDJSON} />
    </Container>
  );
}

export default Home;
