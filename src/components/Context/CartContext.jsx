import React, { createContext, useEffect, useReducer, useContext } from "react";
import reducer from "../reducer/cartReducer";
// import list from "../list";
// import CartTable from "../CartTable";

// export const itemList = createContext();
export const cartItem = createContext();

const getcartItems = () => {
  let newCartItem = localStorage.getItem("cartItems");
  if (newCartItem === []) {
    return [];
  } else {
    return JSON.parse(newCartItem);
  }
};

const initialState = {
  cart: getcartItems(),
  totalPrice: "",
  totalCartItem: "",
  shipping_fee: 100,
  
};


// 
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  // function to add to cart
  const addToCart = (id, img, name, price, qty,quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, img, name, price, qty,quantity } });
  };
 

  // function  to remove item from cart
  const removeFromCart= (id)=>{
    dispatch({type:"REMOVE_FROM_CART", payload:id})
  }


  // function for quantity increase and decrease
  const increaseQuantity =(id)=>{
    dispatch({type:"INCREASE_QUANTITY",payload:id});
  }
  const decreaseQuantity =(id)=>{
    dispatch({type:"DECREASE_QUANTITY",payload:id});
  }



 
  useEffect(() => {
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  }, [state.cart]);

  
  return (
    <cartItem.Provider value={{ ...state, addToCart,removeFromCart,decreaseQuantity,increaseQuantity }}>
      {children}
    </cartItem.Provider>
  );
};

const useCartContext= () =>{
  return useContext(cartItem);
}
export {useCartContext, CartContext};

