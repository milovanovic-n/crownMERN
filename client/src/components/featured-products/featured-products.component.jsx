import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_FEATURED_ITEMS } from "../../graphql/graphql";

import {
  FeaturedProductsContainer,
  FeaturedProductsHeader,
  SliderContainer
} from "./featured-products.styles";
import CollectionItem from "../collection-item/collection-item.component";
import Spinner from "../spinner/spinner.component";
const backgroundImage = `https://images.pexels.com/photos/1787044/pexels-photo-1787044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 420, itemsToShow: 2, itemsToScroll: 2 },
  { width: 650, itemsToShow: 3 },
  { width: 992, itemsToShow: 4 }
];


const FeaturedProducts = () => {
  const { loading, data } = useQuery(GET_FEATURED_ITEMS);

  if(loading || !data) return <Spinner />

  return (
  <FeaturedProductsContainer imageUrl={backgroundImage}>
    <FeaturedProductsHeader>featured products</FeaturedProductsHeader>
        <SliderContainer 
          breakPoints={breakPoints} 
          className="slider__carousel"
        >
          {
            data.getFeaturedItems.map((item) => (
              <CollectionItem featured={true} key={item.id} item={item}/>
            ))
          }
        </SliderContainer>
  </FeaturedProductsContainer>
)};

export default FeaturedProducts;