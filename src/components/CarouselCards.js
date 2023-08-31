import Carousel from 'react-bootstrap/Carousel';
import CarouselRow from './CarouselRow';
import CarouselCard from './CarouselCard';

const CarouselCards = () => {
  let exampleJSON = require('../example.json');
  console.log(exampleJSON);

    let ans = exampleJSON.map((variant) => (
      <CarouselCard
        CardImg={variant.cardimage}
        CardTitle={variant.cardtitle}
        CardText={variant.cardtext}
        buttonName={variant.buttonname}
      />
    ));
    console.log(ans);

  let CCards = [<CarouselCard 
    CardImg={"https://picsum.photos/id/11/200/300"}
    CardTitle={"Lorem Ipsum 1"}
    CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
    buttonName={"Go Somewhere"}
    />,
<CarouselCard 
    CardImg={"https://picsum.photos/id/11/200/300"}
    CardTitle={"Lorem Ipsum 2"}
    CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
    buttonName={"Go Somewhere"}
    />];

  return (
    <Carousel>
      <Carousel.Item>
        <CarouselRow>

            {ans}
        </CarouselRow>

      </Carousel.Item>
      <Carousel.Item>
        <CarouselRow>
                <CarouselCard 
                    CardImg={"https://picsum.photos/id/11/200/300"}
                    CardTitle={"Lorem Ipsum 4"}
                    CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
                    buttonName={"Go Somewhere"}
                    />
                <CarouselCard 
                    CardImg={"https://picsum.photos/id/11/200/300"}
                    CardTitle={"Lorem Ipsum 5"}
                    CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
                    buttonName={"Go Somewhere"}
                    />
                <CarouselCard 
                    CardImg={"https://picsum.photos/id/11/200/300"}
                    CardTitle={"Lorem Ipsum 6"}
                    CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
                    buttonName={"Go Somewhere"}
                    />
            </CarouselRow>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselRow>
                <CarouselCard 
                    CardImg={"https://picsum.photos/id/11/200/300"}
                    CardTitle={"Lorem Ipsum 7"}
                    CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
                    buttonName={"Go Somewhere"}
                    />
                <CarouselCard 
                    CardImg={"https://picsum.photos/id/11/200/300"}
                    CardTitle={"Lorem Ipsum 8"}
                    CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
                    buttonName={"Go Somewhere"}
                    />
                <CarouselCard 
                    CardImg={"https://picsum.photos/id/11/200/300"}
                    CardTitle={"Lorem Ipsum 9"}
                    CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
                    buttonName={"Go Somewhere"}
                    />
            </CarouselRow>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCards;