import React, { useContext } from 'react';
import { CartContext } from "../../../context/cart/cart.reducer";
import { 
  FeaturedItemContainer,
  ItemImageContainer,
  ItemOptionsContainer,
  ItemNameContainer,
  ItemPriceContainer
} from "./featured-item.styles";
import { ReactComponent as ShoppingBag } from "./shopping-bag.svg";


const FeaturedItem = ({item}) => {
  const { name, price, imageUrl } = item;
  const {addItem} = useContext(CartContext);

  return (
    <FeaturedItemContainer>
      <ItemImageContainer imageUrl={imageUrl} />
      <ItemOptionsContainer className="item__options">
        <div onClick={() => addItem(item)} className="add__to__cart" title="ADD TO CART">
          <ShoppingBag className="add__to__cart__icon"/> add to cart
        </div>
        <div className="add__to__whishlist" title="ADD TO WHISHLIST">
          <i className="fas fa-heart"></i>
        </div>
        <div className="quick__view" title="QUICK VIEW">
          <i className="fas fa-search"></i>
        </div>
      </ItemOptionsContainer>
      <ItemNameContainer>{name}</ItemNameContainer>
      <ItemPriceContainer>${price}</ItemPriceContainer>
    </FeaturedItemContainer>
  )
};

export default FeaturedItem;