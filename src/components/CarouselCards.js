import Carousel from 'react-bootstrap/Carousel';
import CarouselRow from './CarouselRow';
import CarouselCard from './CarouselCard';
import CAROUSELITEMS from '../example.json';

const CarouselCards = () => {
  /* importing set of cards from local folder as JSON */
  //let exampleJSON = require('../example.json');
  // console.log(CAROUSELITEMS);
  
  /* creating a set of cards for that can be inserted into carousel */
  let ans = CAROUSELITEMS.map((variant) => (
    <CarouselCard
      key={variant.key}
      height={200}
      CardImg={variant.cardimage}
      CardTitle={variant.cardtitle}
      CardText={variant.cardtext}
      buttonName={variant.buttonname}
    />
  ));

  /* If one set of cards has two empty cards */
  if (ans.length % 3 === 1) {
    ans.push(<CarouselCard empty={true} />, <CarouselCard empty={true} />);
  }

  /* if one carousel row has one empty card */
  if (ans.length % 3 === 2) {
    ans.push(<CarouselCard empty={true} />);
  }

  /* properly adding the carousel  */
  let final = [];
  for (let i=0; i < ans.length; i+= 3) {    
    final.push(
      <Carousel.Item key={i}>
        <CarouselRow>
            {ans.slice(i, i+3)}
        </CarouselRow>
      </Carousel.Item>
    );
  }

  /* Carousel item, row etc is added to carousel */
  return (
    <Carousel>
      {final}
    </Carousel>
  );
}

export default CarouselCards;