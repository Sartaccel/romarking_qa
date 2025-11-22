import React from 'react'
import { Linkedin } from 'lucide-react';
import './footer.css';
import { FaEnvelope } from "react-icons/fa";
import logo from '../../images/RomarLogo.png'


const Footer = ({ handleSubmit, loading }) => {
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
          
          <p>
            
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/romarking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={25} />
            </a>
             <div className="footer-section-contact">
          <h3>Contact Us</h3>
          <p>📞 +91 70927 77277</p>
          <p className="contact-email">
      <FaEnvelope className="mail-icon" /> contact@romarking.in
    </p>
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
  <button
    className="download-btn"
    onClick={() => {
      const link = document.createElement("a");
      link.href = process.env.PUBLIC_URL + "/images/RomarKing_FRP_Housing.pdf";
      link.download = "Romarking_FRP_Housing.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
  >
    📄 Download Our PDF
  </button>
</div>
 

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/company-profile">Company Profile</a></li>
            <li><a href="/comparative-study">Comparative Study</a></li>
            <li><a href="/reachout">Reachout</a></li>
             <li><a href="/gallery">Gallery</a></li>
           
          </ul>
        </div>

        {/* Contact */}
        {/* <div className="footer-section address">
          
          <h3>Office Address</h3>
          <p>
            20C-1C Asaripallam Road,<br />
            Opposite to Concordia School,<br />
            Nagercoil-629 001, Tamil Nadu, India
          </p>
        </div> */}
        {/* Contact Form */}
<div className="footer-section contactus-form-section">
  <div className="form-wrapper">
    <h3 className="form-title">Get in Touch</h3>
    {/* <p className="form-subtitle">
      Have a question or want to discuss a project? Fill out the form below and our team will get back to you soon.
    </p> */}

    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
      </div>

      <div className="form-group">
        <input type="text" name="phone" placeholder="Phone Number" />
        <input type="text" name="subject" placeholder="Subject" />
      </div>

      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

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
    © 2025 <a href="https://enterkeysolutions.com/" target="_blank" rel="noopener noreferrer">Enterkey Solutions</a>. 
    All rights reserved. &nbsp;|&nbsp; 
    Romarking is one of the<a href="https://sartaccel.com/" target="_blank">SART Accelerator </a> portfolio companies.
  </p>
  
  <div className="footer-links">
    <a href="#privacy">Privacy Policy</a>
    <a href="#terms">Terms of Service</a>
  </div>
</div>

    </footer>
  )
}

export default Footer
