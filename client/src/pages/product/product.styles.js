import styled from "styled-components";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag-white.svg";


export const ProductPageContainer = styled.div`
  width: 65%;
  max-width: 850px;
  display: flex;
  margin: 50px auto 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    margin: 25px auto 0;
    width: 65%;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    width: 80%;
    margin: 8px auto;
    padding: 8px 0;
  }
`;

export const ProductImgContainer = styled.div`
  width: 50%;
  padding: 12px;
  
  img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 700px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const ProductInfoContainer = styled.section`
  width: 50%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    padding-top: 0;
  }
`;

export const ProductCategoryTitle = styled.h3`
  font-size: 1em;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export const ProductTitle = styled.h2`
  font-family: "Playfair Display', serif";
  font-size: 2em;
  font-weight: 300;
  text-transform: capitalize;
  margin: 5px 0;

  @media (max-width: 960px) {
    font-size: 1.6em;
  }

  @media (max-width: 480px) {
    font-size: 1.4em;
  }
`;

export const ProductPrice = styled.span`
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 13px;
  text-align: center;
  color: #464646;
`;

export const AddToCartBtn = styled.button`
  margin-top: 30px;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 10px;
  color: white;
  background-color: #232323;
  border: none;
  outline: none;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #56706e;
    cursor: pointer;
  }

  &:active {
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    margin: 15px 0;
  }
`;

export const ShoppingBagContainer = styled(ShoppingBag)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;