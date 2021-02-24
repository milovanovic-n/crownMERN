import React from 'react';
import FEATURED_PRODUCTS_DATA from "./featured-products.data";
import {
  FeaturedProductsContainer,
  FeaturedProductsHeader,
  SliderContainer
} from "./featured-products.styles";
import FeaturedItem from "./featured-item/featured-item.component";

const backgroundImage = `https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 420, itemsToShow: 2, itemsToScroll: 2 },
  { width: 650, itemsToShow: 3 },
  { width: 992, itemsToShow: 4 }
];


const FeaturedProducts = () => (
  <FeaturedProductsContainer imageUrl={backgroundImage}>
    <FeaturedProductsHeader>featured products</FeaturedProductsHeader>
        <SliderContainer 
          breakPoints={breakPoints} 
          className="slider__carousel"
        >
          {
            FEATURED_PRODUCTS_DATA.map((item) => (
              <FeaturedItem key={item.id} item={item}/>
            ))
          }
        </SliderContainer>
  </FeaturedProductsContainer>
);

export default FeaturedProducts;