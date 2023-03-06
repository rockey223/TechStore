
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { RiHandCoinLine, RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="servicesDiv">
        <div className="deliver">
          <div className="servicesIcon">
            <CiDeliveryTruck />
          </div>

          <p className="servicesDesc">Super Fast and Free Delivery</p>
        </div>

        {/*  */}
        <div className=" midServiceDiv">
          <div className="midService">
            <div className="servicesIcon">
              <MdOutlineSecurity />
            </div>
            <p className="servicesDesc">Non-contact Shipping</p>
          </div>
          <div className="midService">
            <div className="servicesIcon">
              <RiHandCoinLine />
            </div>
            <p className="servicesDesc">Money Back Guaranteed</p>
          </div>
        </div>

        {/*  */}
        <div className="deliver">
          <div className="servicesIcon">
            <RiSecurePaymentLine />
          </div>
          <p className="servicesDesc">Super Secure Payment System</p>
        </div>
      </div>
    </>
  );
};

export default Services;
