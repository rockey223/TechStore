import { useContext } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import FormatPrice from "./singleProduct/FormatPrice";
import "./product.css";
import CartInc from "./cartIncDec";
import { cartItem } from "./Context/CartContext";

const CartTable = () => {
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(cartItem);

  return (
    <>
      {cart.map((item) => {
        const { id, img, name, qty, price, quantity } = item;

        return (
          <>
            <div className="cartItems" >
              <img src={img} alt={id} className="cartImage" />
            </div>
            <div className="cartItems">
              <span>{name}</span>
              <br />
              <span>
                {qty <= 0 ? (
                  <span className="noStock">Out Of Stock</span>
                ) : (
                  <span className="inStock">In Stock</span>
                )}
              </span>
            </div>

            <div className="cartItems">
              <FormatPrice price={price} />
            </div>

            <CartInc
              quantity={quantity}
              increaseQuantity={() => increaseQuantity(id)}
              decreaseQuantity={() => decreaseQuantity(id)}
            />

            <div className="cartItems">
              <FormatPrice price={price * quantity} />
            </div>

            <div className="cartItems">
              <AiOutlineDelete
                className="cartDelete"
                onClick={() => removeFromCart(id)}
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default CartTable;
