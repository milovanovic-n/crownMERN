import styled, { css } from "styled-components";

const hoverName = css`
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-family: 'Playfair Display',serif;
  font-size: 16px;
  font-weight: 300;
  align-items: center;

  @media (max-width: 800px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ItemImgcontainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 800px) {
    padding-right: 10px;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const ItemBlock = styled.div`
  width: 23%;
  padding: 0 4px;
  display: ${props => props.quantityBlock ? "flex" : "block"};
  ${props => props.nameBlock ? hoverName : ""};

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;

export const QuantityArrow = styled.div`
  cursor: pointer;
  padding: 2px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const RemoveItemBtn = styled.div`
  padding-left: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;