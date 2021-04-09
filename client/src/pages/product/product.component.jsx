import React, { useContext } from 'react';
import { CartContext } from "../../context/cart/cart.reducer";

import {
  ProductPageContainer,
  ProductImgContainer,
  ProductInfoContainer,
  ProductCategoryTitle,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  AddToCartBtn,
  ShoppingBagContainer
} from "./product.styles";

const ProductPage = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const { name, imageUrl, price, collection } = product;

  return (
    <ProductPageContainer>
      <ProductImgContainer>
        <img src={imageUrl} alt={`Product ${name}`} />
      </ProductImgContainer>
      <ProductInfoContainer>
        <ProductCategoryTitle>{collection.title}</ProductCategoryTitle>
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>${price}</ProductPrice>
        <ProductDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </ProductDescription>
        <AddToCartBtn onClick={() => addItem(product)}>
          <ShoppingBagContainer />
          Add to cart
        </AddToCartBtn>
      </ProductInfoContainer>
    </ProductPageContainer>
  )
};

export default ProductPage;