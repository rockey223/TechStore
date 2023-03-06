const PaymentOption = ({ image }) => {
    
    return (
      <>
        {image.map((pay,index) => {
          return (
            <div className="imageBox" key={index}>
              <img src={pay.img} alt="" />
            </div>
          );
        })}
      </>
    );
  };
  export default PaymentOption;
  