import React, { useContext } from 'react';
import { withRouter } from "react-router-dom";
import { WishlistContext } from "../../context/wishlist/wishlist.reducer";
import { CartContext } from "../../context/cart/cart.reducer";


import {
  WishlistItemContainer,
  ItemImgContainer,
  ItemBlock,
  BlockContent,
  WishlistCart
} from "./wishlist-item.styles";

const WishlistItem = ({ item, history }) => {
  const { removeWishlistItem } = useContext(WishlistContext);
  const { addItem } = useContext(CartContext);
  const { name, imageUrl } = item;

  return (
    <WishlistItemContainer>
      <ItemImgContainer onClick={() => history.push(`/product/${item.id}`)}>
        <img src={imageUrl} alt='item' />
      </ItemImgContainer>
      <ItemBlock onClick={() => history.push(`/product/${item.id}`)}>
        <BlockContent>{name}</BlockContent>
      </ItemBlock>
      <ItemBlock>
        <BlockContent onClick={() => addItem(item)}>
          <WishlistCart />
          <span>Add to cart</span>
        </BlockContent>
      </ItemBlock>
      <ItemBlock>
        <BlockContent title="REMOVE FROM WISHLIST" onClick={() => removeWishlistItem(item)}>&#10005;</BlockContent>
      </ItemBlock>
    </WishlistItemContainer>
  )
};

export default withRouter(WishlistItem);