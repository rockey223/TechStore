const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, img, name, price, qty, quantity } = action.payload;
    // finding existing item
    let existingItem = state.cart.find((curItem) => curItem.id === id);
    // console.log(existingItem);

    if (existingItem) {
      let updatedProduct = state.cart.map((item) => {
        if (item.id === id) {
          let newQuantity = item.quantity + quantity;
          if (newQuantity >= item.qty) {
            newQuantity = item.qty;
          }
          return {
            ...item,
            quantity: newQuantity,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id,
        img,
        name,
        price,
        qty,
        quantity,
      };
      // console.log(cartProduct)

      return { ...state, cart: [...state.cart, cartProduct] };
    }
  }
  if (action.type === "REMOVE_FROM_CART") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    // console.log("update" + updatedCart);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "INCREASE_QUANTITY") {
    let updatedQuantity = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let incQuantity = curItem.quantity + 1;
        if (incQuantity >= curItem.qty) {
          incQuantity = curItem.qty;
        }
        return {
          ...curItem,
          quantity: incQuantity,
        };
      } else {
        return curItem;
      }
    });
    return {
      ...state,
      cart: updatedQuantity,
    };
  }

  if (action.type === "DECREASE_QUANTITY") {
    let updatedQuantity = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let decQuantity = curItem.quantity - 1;
        if (decQuantity <= 1) {
          decQuantity = 1;
        }
        return {
          ...curItem,
          quantity: decQuantity,
        };
      } else {
        return curItem;
      }
    });
    return {
      ...state,
      cart: updatedQuantity,
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemValue = state.cart.reduce((initialQuantity, curElem) => {
      let { quantity } = curElem;
      initialQuantity = initialQuantity + quantity;
      return initialQuantity;
    }, 0);
    return {
      ...state,
      totalCartItem: updatedItemValue,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let updatedPrice = state.cart.reduce((initialPrice, curElem) => {
      let { price, quantity } = curElem;
      initialPrice = initialPrice + price * quantity;
      return initialPrice;
    }, 0);
    return {
      ...state,
      totalPrice: updatedPrice,
    };
  }

  return state;
};

export default cartReducer;
