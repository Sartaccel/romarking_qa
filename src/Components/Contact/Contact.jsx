import React from "react";
import "./Contact.css";
import ContactImage from "../../images/contactUs.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="contactus-page">
      <Helmet>
        <title>
          Contact Romarking | FRP Dome Houses & Sustainable Living Solutions
        </title>

        <meta
          name="description"
          content="Contact Romarking for FRP dome houses, eco-resort structures, and sustainable modular living solutions. Let’s build innovative and eco-friendly spaces together."
        />

        <meta
          name="keywords"
          content="Contact Romarking, FRP dome houses contact, eco resort dome house company, modular dome homes manufacturer"
        />
      </Helmet>

      <section className="contactus-section">
        <div className="contactus-content">
          <h2 className="contactus-title">Ready to Build the Future?</h2>
          <p className="contactus-description">
            Whether you're a resort owner, healthcare provider, or visionary
            entrepreneur, <strong>Romarking</strong> helps you scale with
            purpose. Let’s co-create spaces that inspire, heal, and endure.
          </p>

          <div className="contactus-buttons">
            <a href="/gallery">
              <button className="contactus-btn">
                Explore DOME House Models
              </button>
            </a>
          </div>
        </div>

        <div className="contactus-image">
          <img src={ContactImage} alt="Contact Illustration" />
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default Contact;
