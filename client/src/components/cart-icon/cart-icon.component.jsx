import React, { useContext } from 'react';

import { CartContext } from "../../context/cart/cart.reducer";
import { WishlistContext } from "../../context/wishlist/wishlist.reducer";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = () => {
  const { cartItemsCount, toggleCartHidden} = useContext(CartContext);
  const { wishlistHidden, toggleWishlistHidden } = useContext(WishlistContext);
  return (
  <div className="cart-icon" onClick={() => {
    toggleCartHidden();
    if(!wishlistHidden) {
      toggleWishlistHidden();
    }
  }}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItemsCount}</span>
  </div>
)};

export default CartIcon;
