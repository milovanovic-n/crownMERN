import React from 'react';
import {CarouselContainer} from "./carousel.styles";
import CarouselItem from "./carousel-item/carousel-item.component";

const CAROUSEL_DATA = [
  {
    id: "1",
    imageUrl: `https://images.pexels.com/photos/3823741/pexels-photo-3823741.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`,
    title: `exclusive ${"\n"} fashion since 1975`,
    subtitle: "The new minimal"
  },
  {
    id: "2",
    imageUrl: `https://images.pexels.com/photos/2519233/pexels-photo-2519233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    title: "exclusive fashion since 1975",
    subtitle: "The new minimal"
  },
  {
    id: "3",
    imageUrl: `https://images.pexels.com/photos/5989185/pexels-photo-5989185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    title: "exclusive fashion since 1975",
    subtitle: "The new minimal"
  },
];

const Carousel = () => {
  return (
  <CarouselContainer itemsToShow={1} className="carousel">
    {
      CAROUSEL_DATA.map(item => (
        <CarouselItem key={item.id} item={item} />
      ))
    }
  </CarouselContainer>
)};

export default Carousel;