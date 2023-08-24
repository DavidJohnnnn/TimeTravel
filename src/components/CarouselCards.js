import Carousel from 'react-bootstrap/Carousel';
import CarouselRow from './CarouselRow';
import CarouselCard from './CarouselCard';

const CarouselCards = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselRow>
            <CarouselCard 
                CardImg={"https://picsum.photos/id/11/200/300"}
                CardTitle={"Lorem Ipsum 1"}
                CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
                buttonName={"Go Somewhere"}
                />
            <CarouselCard 
                CardImg={"https://picsum.photos/id/11/200/300"}
                CardTitle={"Lorem Ipsum 2"}
                CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
                buttonName={"Go Somewhere"}
                />
            <CarouselCard 
                CardImg={"https://picsum.photos/id/11/200/300"}
                CardTitle={"Lorem Ipsum 3"}
                CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
                buttonName={"Go Somewhere"}
                />
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