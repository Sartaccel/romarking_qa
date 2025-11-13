import React from "react";
import "./home.css";
import home from "../../images/homepage.png";
import home1 from "../../images/homepage2.png";
import serviceImg1 from "../../images/img22.jpg";
import serviceImg2 from "../../images/Service2.png";
import strategicImage from "../../images/staratergy.png";
import DomeImg from "../../images/ThreeDomes.png";

import AddonsImg from "../../images/Ser.jpg";
import VisionMissionImg from "../../images/VisMis.png";
import ImpactImg from "../../images/ImpactAreas.png";
import Chatbot from "../Chatbot/Chatbot";
import Companyprofile from "../Companyprofile/Companyprofile";
import Product from "../Product/Product";
import Service from "../Services/Service";
import Comparative from "../ComparativeStudy/Comparative";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home-wrapper" >
      {/* Section 1 - Image Left / Content Right */}
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
            The Future of Sustainable Living — discover eco-Luxury with
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
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href =
                process.env.PUBLIC_URL + "/images/RomarKing_FRP_Housing.pdf";
              link.download = "Romarking_FRP_Housing";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Our PDF
          </button>
        </div>
      </div>

      {/* Section 2 - Content Left / Image Right */}
<div className="home-container1">
  <div className="home-content1 animate-left">
    <h2>Why Choose FRP Solutions:</h2>
    <p>
      • Lightweight structures, easy to transport and assemble
      <br />
      • Weather and corrosion resistant materials for all terrains
      <br />
      • Low maintenance, high ROI for developers and investors
      <br />• Eco-friendly, scalable manufacturing with consistent quality
    </p>

    <h2>Key Benefits:</h2>
    <p>
      🏊 Turnkey modular solutions for tourism and healthcare
      <br />
      🌳 Eco-smart design with minimal environmental impact
      <br />
      ⚡ Rapid installation across urban, rural, and remote zones
      <br />
      🏠 Customizable interiors for comfort, care, or adventure
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
