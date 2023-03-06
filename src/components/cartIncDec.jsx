import { FaMinus, FaPlus } from "react-icons/fa";

const CartInc = ({ increaseQuantity, decreaseQuantity, quantity }) => {
  return (
    <>
      <div className="cartItems cart-quantity">
        <button className="quantityButton" onClick={() => decreaseQuantity()}>
          <FaMinus className="cartQuantityMinus" />
        </button>
        <div className="quantity-style">{quantity}</div>
        <button className="quantityButton" onClick={() => increaseQuantity()}>
          <FaPlus className="cartQuantityPlus" />
        </button>
      </div>
    </>
  );
};

export default CartInc;
