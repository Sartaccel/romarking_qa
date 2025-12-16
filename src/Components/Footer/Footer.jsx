import React, { useState } from "react";
import { Linkedin } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import "./footer.css";
import { FaEnvelope } from "react-icons/fa";
import logo from "../../images/RomarLogo.png";
import { toast } from "react-toastify"; 
import Romarkingpdf from "../../images/RomarKing_PDF.pdf"

const Footer = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ===================
  // WEB3FORMS SUBMIT
  // ===================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "d5f61135-8ecb-4f5e-bd11-17d5bc694d20");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      toast.success("Saved successfully 🎉", {
        position: "top-right",
        autoClose: 3000,
      });

      e.target.reset();
      setMessage("");
    } else {
      toast.error("Failed to save ❌", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section company">
  <div className="logo1">
    <a href="#home">
      <img src={logo} alt="Romarking Logo" />
    </a>
  </div>

  <div className="footer-info">
    <div className="footer-section-contact">
      <h3>Contact Us</h3>

      <a href="tel:+917092777277">📞 +91 70927 77277</a>

      <a href="mailto:contact@romarking.in" className="contact-email">
        <FaEnvelope className="mail-icon" /> contact@romarking.in
      </a>
    </div>
<div className="linkedin">
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/company/romarking/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <SiLinkedin size={25} />
      </a>
    </div>
    </div>
  </div>
</div>


        {/* Address Section */}
        <div className="footer-section address">
          <h3>Industrial Address</h3>
          <p>
            No.7 Sirpi Industrial Estate, Singarampalayam, Kinathukadavu,<br />
            Coimbatore-642 109.
          </p>

          {/* Download PDF Button */}
          <a href={Romarkingpdf} download>
          <button
           className="download-btn"
          >
            Download Our PDF
          </button>
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/company-profile">Company Profile</a></li>
            <li><a href="/comparative-study">Comparative Study</a></li>
            <li><a href="/reachout">Reachout</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="footer-section contactus-form-section">
          <div className="form-wrapper">
            <h3 className="form-title">Get in Touch</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onInput={(e) => {
                    let value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                    value = value.replace(/^\s+/, "");
                    e.target.value = value;
                  }}
                />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  maxLength={10}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onInput={(e) => {
                    let value = e.target.value.replace(/^\s+/, "");
                    e.target.value = value;
                  }}
                />
              </div>

              <div className="message-box">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={message}
                  required
                  onChange={(e) => {
                    let v = e.target.value.replace(/^\s+/, "");
                    if (v.length <= 250) setMessage(v);
                  }}
                ></textarea>

                <span className="char-count">{message.length}/250</span>
              </div>

              <button type="submit" className="contactus-btn" disabled={loading}>
                {loading ? <div className="spinner"></div> : "Send Message"}
              </button>
            </form>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2025{" "}
          <a href="https://enterkeysolutions.com/" target="_blank" rel="noopener noreferrer">
            Enterkey Solutions
          </a>. 
          All rights reserved. &nbsp;|&nbsp; 
          Romarking is one of the{" "}
          <a href="https://sartaccel.com/" target="_blank" rel="noopener noreferrer">
            SART Accelerator
          </a>{" "}
          portfolio companies.
        </p>

        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
