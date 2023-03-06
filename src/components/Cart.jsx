import CartTable from "./CartTable";
import OrderSum from "./OrderSum";

const Cart = () => {
  return (
    <>
      <div className="cart-Wrapper">
        <p className="cartTitle">My Cart</p>
        <div className="cartElements">
          <div className="cartTableElement">
            <div className="cartTable">
              <div className="cartTitles">Items</div>
              <div className="cartTitles">Description</div>
              <div className="cartTitles">Price</div>
              <div className="cartTitles"> Quantity</div>
              <div className="cartTitles">Sub-Total</div>
            </div>
            <div className="cartTable cartAllItems">
              <CartTable />
            </div>
          </div>

          <OrderSum button={"Check Out"} />
        </div>
      </div>
    </>
  );
};
export default Cart;
