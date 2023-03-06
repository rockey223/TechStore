import React from "react";
import paymentList from "./pymentList";
import PaymentOption from "./PaymentOption";
const Payment = () => {
  return (
    <>
      <div className="paymentBox">
        <div className="paymentMethodBox">
          <p>Payment Method</p>
          <div className="paymentMethod">
            <PaymentOption image={paymentList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
