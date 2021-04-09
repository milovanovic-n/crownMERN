import React, { useContext } from 'react';
import { withRouter } from "react-router-dom";
import { CartContext } from "../../context/cart/cart.reducer";

import {
  CheckoutItemContainer,
  ItemImgcontainer,
  ItemBlock,
  QuantityArrow,
  QuantityValue,
  RemoveItemBtn
} from "./checkout-item.styles";


const CheckoutItem = ({ cartItem, history }) => {
  const { addItem, removeItem, clearItem } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  
  return (
    <CheckoutItemContainer>
      <ItemImgcontainer onClick={() => history.push(`/product/${cartItem.id}`)}>
        <img src={imageUrl} alt={`item - ${name}`} />
      </ItemImgcontainer>
      <ItemBlock nameBlock onClick={() => history.push(`/product/${cartItem.id}`)}>{name}</ItemBlock>
      <ItemBlock quantityBlock>
        <QuantityArrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </QuantityArrow>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrow onClick={() => addItem(cartItem)}>
          &#10095;
        </QuantityArrow>
      </ItemBlock>
      <ItemBlock>{price}</ItemBlock>
      <RemoveItemBtn onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveItemBtn>
    </CheckoutItemContainer>
  );
};

export default withRouter(CheckoutItem);
 