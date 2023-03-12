import { NavLink } from "react-router-dom";


const PaymentOption = ({ image }) => {
    
    return (
      <>
        {image.map((pay,index) => {
          return (
            <NavLink to="/qr">
              <div className="imageBox" key={index}>
              <img src={pay.img} alt="" />
            </div>
            </NavLink>
            
          );
        })}
      </>
    );
  };
  export default PaymentOption;
  