import { useState } from "react";
// import "./contact.css";
import TextInput from "./TextInput";

const ContactForm = () => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <div className="contact-page">
        <div className="contact-wrapper">
          <div className="contact-Heading">Contact Us</div>
          <div className="contact-details">
            <div className="contact-details-wrapper">
              <form>
                <TextInput type="text" label="Full Name" />
                <TextInput type="text" label="Phone Number" />
                <TextInput type="email" label="Email Address" />

                <div className="input-container">
                  <textarea
                    name="message"
                    className="message"
                    onChange={handleChange}
                  ></textarea>
                  <label className={value && "filled"} >
                    Your Message
                  </label>
                </div>
                <button className="contact-submit-btn" type="submit">
                  Send
                </button>
              </form>
            </div>

            <iframe
            title="Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2751.9421262259457!2d85.3189628992549!3d27.635833253658497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM4JzA2LjgiTiA4NcKwMTknMDMuMiJF!5e0!3m2!1sen!2snp!4v1678078357643!5m2!1sen!2snp"
              className="map-Box"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
