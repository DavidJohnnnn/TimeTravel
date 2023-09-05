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

  if (ans.length % 3 === 1) {
    ans.push(<CarouselCard empty={true} />, <CarouselCard empty={true} />);
  }

  if (ans.length % 3 === 2) {
    ans.push(<CarouselCard empty={true} />);
  }

  console.log(ans);
  
  let final = [];

  for (let i=0; i < ans.length; i+= 3) {    
    final.push(
      <Carousel.Item>
        <CarouselRow>
            {ans.slice(i, i+3)}
        </CarouselRow>
      </Carousel.Item>
    );
  }



  console.log(final);

  return (
    <Carousel>
      {final}
    </Carousel>
  );

  // return (
  //   <Carousel>
  //     <Carousel.Item>
  //       <CarouselRow>

  //           {ans}
  //       </CarouselRow>

  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <CarouselRow>
  //               <CarouselCard 
  //                   CardImg={"https://picsum.photos/id/11/200/300"}
  //                   CardTitle={"Lorem Ipsum 4"}
  //                   CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
  //                   buttonName={"Go Somewhere"}
  //                   />
  //               <CarouselCard 
  //                   CardImg={"https://picsum.photos/id/11/200/300"}
  //                   CardTitle={"Lorem Ipsum 5"}
  //                   CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
  //                   buttonName={"Go Somewhere"}
  //                   />
  //               <CarouselCard 
  //                   CardImg={"https://picsum.photos/id/11/200/300"}
  //                   CardTitle={"Lorem Ipsum 6"}
  //                   CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
  //                   buttonName={"Go Somewhere"}
  //                   />
  //           </CarouselRow>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <CarouselRow>
  //               <CarouselCard 
  //                   CardImg={"https://picsum.photos/id/11/200/300"}
  //                   CardTitle={"Lorem Ipsum 7"}
  //                   CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
  //                   buttonName={"Go Somewhere"}
  //                   />
  //               <CarouselCard 
  //                   CardImg={"https://picsum.photos/id/11/200/300"}
  //                   CardTitle={"Lorem Ipsum 8"}
  //                   CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
  //                   buttonName={"Go Somewhere"}
  //                   />
  //               <CarouselCard 
  //                   CardImg={"https://picsum.photos/id/11/200/300"}
  //                   CardTitle={"Lorem Ipsum 9"}
  //                   CardText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
  //                   buttonName={"Go Somewhere"}
  //                   />
  //           </CarouselRow>
  //     </Carousel.Item>
  //   </Carousel>
  // );
}

export default CarouselCards;