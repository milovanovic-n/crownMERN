import React, { useContext } from 'react';
import { WishlistContext } from "../../context/wishlist/wishlist.reducer";

import {
  WishlistPageContainer,
  WishlistPageHeader,
  HeaderBlock
} from "./wishlist.styles";
import WishlistItem from "../../components/wishlist-item/wishlist-item.component";

const WishlistPage = () => {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <WishlistPageContainer>
      <WishlistPageHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Add To Cart</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </WishlistPageHeader>
      {
        wishlistItems.map(item => (
          <WishlistItem key={item.id} item={item}>{item.name}</WishlistItem>
        ))
      }
    </WishlistPageContainer>
  )
};

export default WishlistPage;