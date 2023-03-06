import Carousel from "react-bootstrap/Carousel";
// import { BsArrowRight } from "react-icons/bs";
// import "./sabjiTobBanner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css";
// import bannerlist from "./topBanner";
import bannerlist from "./bannerlist";
// import { useState, useEffect } from "react";

const Banner = () => {
  // const [data, setImages] = useState([]);

  

  return (
    <div className="bannerWrapper">
<Carousel variant="dark">
      {bannerlist.map((image, index) => (
        <Carousel.Item interval={1000} key={index}>
          <img
            className="d-block w-100 img-height"
            src={image.link}
            alt={image.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    
  );
};
export default Banner;
