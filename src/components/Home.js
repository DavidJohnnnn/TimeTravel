import Container from 'react-bootstrap/Container';
import Jumbotron from './Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
import CarouselCards from './CarouselCards';


function Home() {
  return (
    <Container className="Page" fluid>
      <Jumbotron
        JumImg="https://picsum.photos/id/1/200/300"
        CardTle="Special title treatment"
        CardTxt="With supporting text below as a natural lead-in to additional content."
        BtnTxt="Go somewhere"
      />
      <br />
      <CarouselCards />
    </Container>
  );
}

export default Home;
