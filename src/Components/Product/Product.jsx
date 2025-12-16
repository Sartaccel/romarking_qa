import React from "react";
import "./Product.css";
import DomeImg from "../../images/ThreeDomes.png";
import AddonsImg from "../../images/Ser.jpg";

const Product = () => {
  return (
    <div className="product-page">
      {/* ====== FRP COTTAGES SECTION ====== */}
      <div className="product-wrapper">
        <div className="product-content">
          <h2>FRP Prefabricated Cottages</h2>
          <p>
            Engineered for <strong>strength and simplicity</strong>, our cottages are:
          </p>
          <ul className="points-list">
            <li>&bull; Lightweight and easy to install – enabling faster construction anywhere.</li>
            <li>&bull; Durable and weather resistant – built to withstand humidity, rain, and sunlight.</li>
            <li>&bull; Corrosion-free and termite-proof – perfect for coastal and rural environments.</li>
            <li>&bull; Low maintenance and eco-friendly – sustainable living, simplified.</li>
          </ul>
          <p>
            Whether you're traveling solo, as a couple, or with family,{" "}
            <strong>DOM Houses</strong> offer a peaceful retreat that blends seamlessly into the landscape.
          </p>
          <p>
            <strong>Ideal for:</strong> resorts, eco-retreats, farm stays, CSR housing projects, and tourism developments.
          </p>
        </div>

        <div className="product-image">
          <img src={DomeImg} alt="FRP Prefabricated Cottage" />
        </div>
      </div>


      {/* ====== FRP ADD-ONS SECTION ====== */}
     <div className="addons-wrapper">
  {/* Left Image */}
  <div className="addons-image">
    <img src={AddonsImg} alt="FRP Add-ons" />
  </div>

  {/* Right Content */}
  <div className="addons-content">
    <h2>FRP Add-ons & Lifestyle Products</h2>
    <p className="addons-intro">
      We extend the same innovation to a range of complementary infrastructure products that complete your living space:
    </p>

    <div className="addons-grid">
      <div className="addon-card">
        <i className="bi bi-droplet addon-icon"></i>
        <h3>FRP Water Tanks</h3>
        <p>💧 Leak-proof, hygienic, and long-lasting storage solutions.</p>
      </div>

      <div className="addon-card">
        <i className="bi bi-house-door addon-icon"></i>
        <h3>FRP Septic Tanks</h3>
        <p>🚽 Safe, odor-free, and environmentally compliant sanitation systems.</p>
      </div>

      <div className="addon-card">
        <i className="bi bi-water addon-icon"></i>
        <h3>FRP Swimming Pools</h3>
        <p>🏊 Elegant, pre-engineered pools that are easy to install and maintain.</p>
      </div>

      <div className="addon-card">
        <i className="bi bi-flower3 addon-icon"></i>
        <h3>FRP Flower Pots & Planters</h3>
        <p>🌺 Beautiful, lightweight designs for landscaping and décor.</p>
      </div>

      <div className="addon-card">
        <i className="bi bi-tree addon-icon"></i>
        <h3>FRP Landscaping Materials</h3>
        <p>🌳 Pathways, benches, fencing, and garden accessories that combine strength with style.</p>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default Product;