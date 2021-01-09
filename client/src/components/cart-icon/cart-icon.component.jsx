import React, {useContext} from 'react';

import {CartContext} from "../../context/cart/cart.reducer";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = () => {
  const { cartItemsCount, toggleCartHidden} = useContext(CartContext);
  return (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItemsCount}</span>
  </div>
)};

export default CartIcon;
