import React, {useContext} from 'react';
import { CartContext } from "../../context/cart/cart.reducer";

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalPriceContainer,
  WarningTextContainer
} from "./checkout.styles";

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


const CheckoutPage = () => {
  const {cartItems, cartTotal} = useContext(CartContext);
  return (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock lastChild>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalPriceContainer>TOTAL: ${cartTotal}</TotalPriceContainer>
    <WarningTextContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningTextContainer>
    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainer>
)};


export default CheckoutPage;
