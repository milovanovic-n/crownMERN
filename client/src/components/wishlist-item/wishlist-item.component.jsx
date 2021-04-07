import React, { useContext } from 'react';
import { WishlistContext } from "../../context/wishlist/wishlist.reducer";
import { CartContext } from "../../context/cart/cart.reducer";


import {
  WishlistItemContainer,
  ItemImgContainer,
  ItemBlock,
  BlockContent,
  WishlistCart
} from "./wishlist-item.styles";

const WishlistItem = ({ item }) => {
  const { removeWishlistItem } = useContext(WishlistContext);
  const { addItem } = useContext(CartContext);
  const { name, imageUrl } = item;

  return (
    <WishlistItemContainer>
      <ItemImgContainer>
        <img src={imageUrl} alt='item' />
      </ItemImgContainer>
      <ItemBlock>
        <BlockContent>{name}</BlockContent>
      </ItemBlock>
      <ItemBlock>
        <BlockContent onClick={() => addItem(item)}>
          <WishlistCart />
          <span>Add to cart</span>
        </BlockContent>
      </ItemBlock>
      <ItemBlock>
        <BlockContent onClick={() => removeWishlistItem(item)}>&#10005;</BlockContent>
      </ItemBlock>
    </WishlistItemContainer>
  )
};

export default WishlistItem;