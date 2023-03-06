import "./footer.css";
import { TbBrandTiktok } from "react-icons/tb";

import { CiFacebook, CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img src="https://i.postimg.cc/7LtP5W2Z/techstore-02-01.png" alt="" />
        </div>
        <div className="footer-contact-details">
          <div className="contact-info">
            <div className="contactPhone">
              <p className="contact-phone-text">Call Us</p>
              <p className="contact-phone-text">+977-9864221478</p>
            </div>
            <div className="SocialLink">
              <p className="contact-phone-text">Follow Us</p>
              <div className="social_icons">
                <CiFacebook className="social-icon" />
                <CiInstagram className="social-icon" />
                <TbBrandTiktok className="social-icon" />
              </div>
            </div>
          </div>
          <div className="footer-location">
            <p className="location-heading">Locate Us</p>
            <iframe
            title="map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2751.9421262259457!2d85.3189628992549!3d27.635833253658497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM4JzA2LjgiTiA4NcKwMTknMDMuMiJF!5e0!3m2!1sen!2snp!4v1678078357643!5m2!1sen!2snp"
              className="footer-map-Box"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
