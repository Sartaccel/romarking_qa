import React, { useState } from "react";
import "./Contact.css";
import ContactImage from "../../images/contactUs.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    // ✅ Use your new Web3Forms access key here
    formData.append("access_key", "d5f61135-8ecb-4f5e-bd11-17d5bc694d20");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      toast.success("Message sent successfully! ✅", {
        position: "top-right",
        autoClose: 3000,
      });
      e.target.reset();
    } else {
      toast.error("Failed to send message. Please try again ❌", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="contactus-page">
      {/* ===== Hero Section ===== */}
      <section className="contactus-section">
        <div className="contactus-content">
          <h2 className="contactus-title">Ready to Build the Future?</h2>
          <p className="contactus-description">
            Whether you're a resort owner, healthcare provider, or visionary
            entrepreneur, <strong>Romarking</strong> helps you scale with
            purpose. Let’s co-create spaces that inspire, heal, and endure.
          </p>
          <div className="contactus-buttons">
       <a href="/gallery">    <button className="contactus-btn">Explore DOME House Models</button> </a>
       {/* <a href="/reachout">   <button className="contactus-btn outline">Partner With Us</button></a>   */}
           
          </div>
        </div>

        <div className="contactus-image">
          <img src={ContactImage} alt="Contact Illustration" />
        </div>
      </section>

      {/* ===== Contact Form Section ===== */}
      {/* <section className="contactus-form-section">
        <div className="form-wrapper">
          <h2 className="form-title">Get in Touch</h2>
          <p className="form-subtitle">
            Have a question or want to discuss a project? Fill out the form
            below and our team will get back to you soon.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input type="text" name="phone" placeholder="Phone Number" />
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="contactus-btn" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Send Message"}
            </button>
          </form>
        </div>
      </section> */}

      <ToastContainer />
    </div>
  );
};

export default Contact;