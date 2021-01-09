import React, {createContext, useReducer} from "react";
import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

if(localStorage.getItem("cartItems")){
  const items = localStorage.getItem("cartItems");
  const parsedItems = JSON.parse(items);
  INITIAL_STATE.cartItems = parsedItems;
} else {
  INITIAL_STATE.cartItems = []
}

const CartContext = createContext({
  hidden: true,
  toggleCartHidden: () => {},
  cartItems: [],
  addItem: (cartItems, itemToAdd) => {},
  removeItem: (cartItems, itemToRemove) => {}
});

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

function CartProvider(props) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { cartItems } = state;
  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  function toggleCartHidden() {
    dispatch({
      type: CartActionTypes.TOGGLE_CART_HIDDEN
    })
  }

  function addItem(item) {
    dispatch({
      type: CartActionTypes.ADD_ITEM,
      payload: item
    });
  }

  function removeItem(item) {
    dispatch({
      type: CartActionTypes.REMOVE_ITEM,
      payload: item
    })
  }

  function clearItem(item) {
    dispatch({
      type: CartActionTypes.CLEAR_ITEM_FROM_CART,
      payload: item
    })
  }


  return (
    <CartContext.Provider value={{ 
      hidden: state.hidden, 
      toggleCartHidden,
      addItem, 
      removeItem,
      clearItem,
      cartItems,
      cartItemsCount,
      cartTotal
    }} {...props} />
  )
};

export {CartContext, CartProvider}