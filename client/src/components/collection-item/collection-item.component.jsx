import React, {useContext} from 'react';
import { withRouter } from "react-router-dom";
import { CartContext } from "../../context/cart/cart.reducer";
import { WishlistContext } from "../../context/wishlist/wishlist.reducer";

import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionItemFooter,
  CollectionItemOptions,
  ItemNameContainer
} from "./collection-item.styles";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag-white.svg";
import AnimatedHeart from "../animated-heart/animated-heart.component";


const CollectionItem = ({ item, featured }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);
  const { addWishlistItem } = useContext(WishlistContext);

  return (
    <CollectionItemContainer featured={featured}>
      <CollectionItemImage featured={featured} imageUrl={imageUrl} />
      <CollectionItemFooter featured={featured}>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </CollectionItemFooter>
      <CollectionItemOptions featured={featured} className="item__options">
        <div onClick={() => addItem(item)} className="add__to__cart" title="ADD TO CART">
          <ShoppingBag className="add__to__cart__icon"/> add to cart
        </div>
        <div onClick={() => addWishlistItem(item)} className="add__to__whishlist" title="ADD TO WHISHLIST">
          <AnimatedHeart />
        </div>
        <div className="quick__view" title="QUICK VIEW">
          <i className="fas fa-search"></i>
        </div>
      </CollectionItemOptions>
      {
        featured ? <ItemNameContainer>{name}</ItemNameContainer> : null
      }
    </CollectionItemContainer>
  );
};


export default withRouter(CollectionItem);