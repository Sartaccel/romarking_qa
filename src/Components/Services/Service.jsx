import React from "react";
import "./service.css";
import serviceImg1 from "../../images/img22.jpg";
import serviceImg2 from "../../images/Service2.png";

const Service = () => {
  return (
    <div className="service-container">
      {/* Section 1 */}
      <div className="service-section animate-left">
        <div className="service-text">
          <h2>On-Call Services with HomieFix and SimpleGo</h2>
          <p>
            Comfort Delivered. Help On Demand. Romarking’s{" "}
            <a href="https://www.homiefix.in/" target="blank" className="highlight">
              HomieFix
            </a>{" "}
            platform ensures every guest feels at home by combining convenience, hospitality, and technology.
          </p>
          <ul>
            <li>🍽  Food & Refreshments</li>
            <li>Snacks & Drinks: Quick delivery of packaged snacks, beverages, and essentials right to your DOME House.
            Meals on Demand: Freshly prepared meals from curated partner kitchens, available for breakfast, lunch, and dinner.
            </li>
            <li>🧹 Domestic help, cleaning, and concierge services</li>
            <li>Cleaning Services: Professional housekeeping for daily upkeep, deep cleaning, or special occasions.
            Household Support: On-call staff for laundry, dishwashing, and organizing tasks.
            </li>
            <li>🚖 Travel Made Easy with {" "}<a href="https://www.simplego.in/" target="blank" className="highlight">
                SimpleGo
              </a></li>
            <li>Cab Booking: Reliable rides available at your doorstep, anytime.
            Multi-Mode Options: Choose between standard cabs, premium rides, or eco-friendly vehicles.
            </li>
          </ul>
        </div>
        <div className="service-image">
          <img src={serviceImg1} alt="HomieFix Services" />
        </div>
      </div>

      {/* Section 2 */}
     <div className="frp-service-section reverse animate-right">
  {/* Left Content in Box Cards */}
  <div className="service-text1">
    <h2>Integrated Comfort & Safety Around Every Dome</h2>
    <p className="frp-service-intro">
      Designed for a complete dome lifestyle experience with essential facilities that prioritize comfort, safety, and sustainability.
    </p>

    <div className="frp-service-grid">
      <div className="frp-service-card">
        <h3>🛁 Restrooms</h3>
        <ul>
          <li>Designed for hygiene and water efficiency in remote areas</li>
          <li>Well-ventilated and eco-friendly</li>
          <li>Equipped with modular plumbing systems</li>
        </ul>
      </div>

      <div className="frp-service-card">
        <h3>🛡️ Security Posts</h3>
        <ul>
          <li>Strategically placed for optimal coverage</li>
          <li>Enhance safety without disrupting natural aesthetics</li>
        </ul>
      </div>

      <div className="frp-service-card">
        <h3>💡 Ambient Lighting</h3>
        <ul>
          <li>Supports safe movement across the site</li>
          <li>Pathways illuminated for nighttime comfort</li>
        </ul>
      </div>

      <div className="frp-service-card">
        <h3>🧰 First Aid Materials</h3>
        <ul>
          <li>Stocked kits placed in each dome cluster</li>
          <li>
            Includes bandages, antiseptics, basic medications, and emergency contact info
          </li>
          <li>Regularly inspected and replenished for readiness</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Right Image */}
  <div className="service-image1">
    <img src={serviceImg2} alt="Integrated Comfort & Safety" />
  </div>
</div>

    </div>
  );
};

export default Service;
