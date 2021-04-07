import React, { createContext, useReducer } from "react";
import WishlistActionTypes from "./wishist.types";
import {
  addItemToCart,
  removeItemFromCart
} from "../cart/cart.utils";

const INITIAL_STATE = {
  wishlistHidden: true,
  wishlistItems: [],
};


if(localStorage.getItem("wishlistItems")){
  const items = localStorage.getItem("wishlistItems");
  const parsedItems = JSON.parse(items);
  INITIAL_STATE.wishlistItems = parsedItems;
} else {
  INITIAL_STATE.wishlistItems = []
} 

const WishlistContext = createContext({
  wishlistHidden: true,
  toggleWishlistHidden: () => {},
  wishlistItems: [],
  addWishlistItem: (wishlistItems, itemToAdd) => {},
  removeWishlistItem: (wishlistItems, itemToRemove) => {}
});


function wishlistReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case WishlistActionTypes.TOGGLE_WISHLIST_HIDDEN:
      return {
        ...state,
        wishlistHidden: !state.wishlistHidden
      }
    case WishlistActionTypes.ADD_WISHLIST_ITEM:
      return {
        ...state,
        wishlistItems: addItemToCart(state.wishlistItems, action.payload)
      }
    case WishlistActionTypes.REMOVE_WISHLIST_ITEM:
      return {
        ...state,
        wishlistItems: removeItemFromCart(state.wishlistItems, action.payload)
      }
    default:
      return state;
  }
}


function WishlistProvider(props) {
  const [state, dispatch] = useReducer(wishlistReducer, INITIAL_STATE);
  const { wishlistItems } = state;

  function toggleWishlistHidden() {
    dispatch({
      type: WishlistActionTypes.TOGGLE_WISHLIST_HIDDEN
    })
  }

  function addWishlistItem(item) {
    dispatch({
      type: WishlistActionTypes.ADD_WISHLIST_ITEM,
      payload: item
    })
  }

  function removeWishlistItem(item) {
    dispatch({
      type: WishlistActionTypes.REMOVE_WISHLIST_ITEM,
      payload: item
    })
  }

  return (
    <WishlistContext.Provider value={{
      wishlistHidden: state.wishlistHidden,
      toggleWishlistHidden,
      wishlistItems,
      addWishlistItem,
      removeWishlistItem
    }} {...props} 
    />
  )
}

export  { WishlistContext, WishlistProvider }