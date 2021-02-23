import React from 'react';
import {
  CarouselItemContainer,
  CarouselItemDescription,
  DescriptionSubtitle,
  DescriptionTitle,
  CarouselItemLink
} from "./carousel-item.styles";



const CarouselItem = ({item}) => {
  
  const breakTitle = (title) => {
    if(!title) return;
  
    let firstWord = "";
    let otherWords = "";
  
    const splitedTitle = title.split(" ");
  
    for(let i = 0; i < splitedTitle.length; i++) {
      if(i === 0) {
        firstWord = splitedTitle[i];
      } else {
        otherWords += splitedTitle[i] + " ";
      }
    }
    return {first: firstWord, other: otherWords};
  };

  return (
  <CarouselItemContainer imageUrl={item.imageUrl}>
    <CarouselItemDescription>
      <DescriptionSubtitle>{item.subtitle}</DescriptionSubtitle>
      <DescriptionTitle>{breakTitle(item.title).first}</DescriptionTitle>
      <DescriptionTitle>{breakTitle(item.title).other}</DescriptionTitle>
      <CarouselItemLink>view collection</CarouselItemLink>
    </CarouselItemDescription>
  </CarouselItemContainer>
)};

export default CarouselItem;