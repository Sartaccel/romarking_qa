import React from "react";
import "./home.css";
import home from "../../images/homepage.png";
import home1 from "../../images/homepage2.png";
import Chatbot from "../Chatbot/Chatbot";
import Companyprofile from "../Companyprofile/Companyprofile";
import Product from "../Product/Product";
import Service from "../Services/Service";
import Comparative from "../ComparativeStudy/Comparative";
import Romarkingpdf from "../../images/RomarKing_PDF.pdf";
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-image animate-left">
          <img src={home} alt="FRP Smart Living" />
        </div>

        <div className="home-content animate-right">
          <h2>
            Welcome to Romarking, a leader in innovative FRP based DOM houses
            and products
          </h2>
          <h3>
            The Future of Sustainable Living — Discover Eco-Luxury with
            Romarking
          </h3>
          <p>Where nature meets comfort — and every stay makes a difference.</p>
          <p>
            Discover the power of Fiber Reinforced Polymer (FRP) — the modern
            material that’s reshaping homes, resorts, and communities with
            strength, beauty, and sustainability. Romarking is your gateway to
            unforgettable eco-resort experiences powered by sustainable
            innovation. Whether you're chasing waterfalls, forest trails, or
            coastal serenity, our modular DOM Houses offer a guilt-free way to
            explore the planet.
          </p>
          <a href="/company-profile">
            {" "}
            <button>Learn More</button>
          </a>{" "}
          &nbsp; &nbsp;
          <a href={Romarkingpdf} download>
            <button>Download Our PDF</button>
          </a>
        </div>
      </div>

      <div className="home-container1">
        <div className="home-content1 animate-left">
          <h2>Why Choose FRP Solutions:</h2>
          <p>
            • Lightweight structures, easy to transport and assemble for rapid
            deployment.
            <br />
            • Weather and corrosion resistant materials for all terrains and
            climates worldwide.
            <br />
            • Low maintenance, high ROI for developers and investors with
            long-term stability.
            <br />• Eco-friendly, scalable manufacturing with consistent quality
            every single time.
          </p>

          <h2>Key Benefits:</h2>
          <p>
            • Turnkey modular solutions for tourism and healthcare across
            multiple global sectors.
            <br />
            • Eco-smart design with minimal environmental impact and maximum
            resource efficiency.
            <br />
            • Rapid installation across urban, rural, and remote zones with zero
            disruption.
            <br />• Customizable interiors for comfort, care, or adventure in
            any lifestyle setting.
          </p>
        </div>

        <div className="home-image1 animate-right">
          <img src={home1} alt="FRP Solutions" />
        </div>
      </div>
      <div id="products" className="animate-fade">
        <Product />
      </div>

      <div id="company-profile" className="animate-fade">
        <Companyprofile />
      </div>

      <div id="services" className="animate-fade">
        <Service />
      </div>

      <div id="comparative" className="animate-fade">
        <Comparative />
      </div>

      <Chatbot />
    </div>
  );
};

export default Home;
