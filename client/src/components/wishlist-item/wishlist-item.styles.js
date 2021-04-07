import styled from "styled-components";
import { ReactComponent as  ShoppingCart } from "../../assets/shopping-bag.svg";

export const WishlistItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ItemImgContainer = styled.div`
  width: 25%;
  margin-right: 5%;

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

export const ItemBlock = styled.div`
  width: 30%;
  font-family: 'Playfair Display', serif;

  &:last-child {
    width: 8%;
    margin-left: 2%;
  } 
`;

export const BlockContent = styled.span`
  width: 75%;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  font-size: 14px;
  font-weight: 300;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  span {
    margin-left: 5px;
    text-transform: uppercase;
    font-size: 11px;
  }
`;

export const WishlistCart = styled(ShoppingCart)`
  width: 20px;
  height: 20px;
  margin-left: 3%;
`;