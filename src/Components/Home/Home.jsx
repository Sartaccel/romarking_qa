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
      <div className="home-container reverse">
        <div className="home-content animate-left">
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

      <div className="product-page">
        {/* ====== FRP COTTAGES SECTION ====== */}
        {/* <div className="product-wrapper">
        <div className="product-content">
          <h2>FRP Prefabricated Cottages</h2>
          <p>
            Engineered for <strong>strength and simplicity</strong>, our cottages are:
          </p>
          <ul>
            <li>🏗 Lightweight and easy to install – enabling faster construction anywhere.</li>
            <li>🌦 Durable and weather resistant – built to withstand humidity, rain, and sunlight.</li>
            <li>🛡 Corrosion-free and termite-proof – perfect for coastal and rural environments.</li>
            <li>🌿 Low maintenance and eco-friendly – sustainable living, simplified.</li>
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
      </div> */}

        <div className="service-container">
          {/* Section 1 */}
          <div className="service-section animate-left">
            <div className="service-text">
              <h2>On-Call Services with HomieFix and SimpleGo</h2>
              <p>
                Comfort Delivered. Help On Demand. Romarking’s{" "}
                <a
                  href="https://www.homiefix.in/"
                  target="blank"
                  className="highlight"
                >
                  HomieFix
                </a>{" "}
                platform ensures every guest feels at home:
              </p>
              <ul>
                <li>
                  🍽️ Snacks, drinks, and meals delivered to your DOM House
                </li>
                <li>🧹 Domestic help, cleaning, and concierge services</li>
                <li>📱 Easy access via mobile app or voice assistant</li>
                <li>
                  🚖 Book cab services using{" "}
                  <a
                    href="https://www.simplego.in/"
                    target="blank"
                    className="highlight"
                  >
                    SimpleGo
                  </a>
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
                Designed for a complete dome lifestyle experience with essential
                facilities that prioritize comfort, safety, and sustainability.
              </p>

              <div className="frp-service-grid">
                <div className="frp-service-card">
                  <h3>🛁 Restrooms</h3>
                  <ul>
                    <li>
                      Designed for hygiene and water efficiency in remote areas
                    </li>
                    <li>Well-ventilated and eco-friendly</li>
                    <li>Equipped with modular plumbing systems</li>
                  </ul>
                </div>

                <div className="frp-service-card">
                  <h3>🛡️ Security Posts</h3>
                  <ul>
                    <li>Strategically placed for optimal coverage</li>
                    <li>
                      Enhance safety without disrupting natural aesthetics
                    </li>
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
                      Includes bandages, antiseptics, basic medications, and
                      emergency contact info
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
      </div>
      <div className="company-page">
        {/* ====== COMPANY INTRO ====== */}
        <section className="company-intro">
          <h1>
            Company Profile – <span>FRP Smart Living</span>
          </h1>
          <p>
            We are redefining modern living through sustainable, durable, and
            affordable FRP innovations that empower communities and protect the
            planet. Our goal is to create smarter, faster, and eco-conscious
            living systems for today and future generations.
          </p>
        </section>

        {/* ====== VISION & MISSION ====== */}
        <section className="vision-section">
          <div className="vision-text">
            <h2>🌍 Vision</h2>
            <p>
              To redefine modern living through sustainable, durable, and
              affordable FRP innovations that empower communities and protect
              the planet. We envision a world where construction is faster,
              cleaner, and more responsible — a world built not just for today’s
              needs, but for generations to come.
            </p>

            <h2>💡 Mission</h2>
            <ul>
              <li>
                Deliver high-quality, eco-friendly FRP solutions combining
                design, durability, and sustainability.
              </li>
              <li>
                Empower developers, institutions, and communities to build
                efficiently and responsibly.
              </li>
              <li>
                Expand the reach of prefabricated living systems across
                residential, tourism, industrial, and social sectors.
              </li>
            </ul>

            <h2>⚙ Core Values</h2>
            <ul>
              <li>
                <strong>Innovation with Purpose:</strong> Every product we
                design is a step toward smarter and more sustainable living.
              </li>
              <li>
                <strong>Integrity in Every Build:</strong> We value
                transparency, quality, and long-term trust over short-term
                gains.
              </li>
              <li>
                <strong>Sustainability as a Standard:</strong> Eco-conscious
                materials, low waste, and recyclable solutions form our core
                philosophy.
              </li>
              <li>
                <strong>Collaboration for Growth:</strong> We believe in
                partnerships — with developers, architects, investors, and local
                communities — to create lasting impact.
              </li>
            </ul>
          </div>

          <div className="vision-image">
            <img src={VisionMissionImg} alt="Vision, Mission and Core Values" />
          </div>
        </section>

        {/* ====== IMPACT AREAS ====== */}
        <section className="impact-section">
          <div className="impact-image">
            <img src={ImpactImg} alt="Our Impact Areas" />
          </div>

          <div className="impact-text">
            <h2>🧱 Our Impact Areas</h2>
            <ul>
              <li>
                <strong>🏡 Housing & Infrastructure:</strong> FRP-based
                prefabricated cottages, sanitation, and utility solutions for
                community housing, CSR projects, and institutional use.
              </li>
              <li>
                <strong>🏖 Tourism & Resorts:</strong> Rapid-deploy eco-cottages,
                modular pools, and landscaping designs tailored for resorts and
                retreats.
              </li>
              <li>
                <strong>🏭 Industrial & Utility Solutions:</strong> FRP tanks,
                septic systems, and structural components built for longevity in
                harsh environments.
              </li>
              <li>
                <strong>🌿 Environment & Green Design:</strong> Products that
                minimize waste, reduce carbon footprint, and support circular
                economy goals.
              </li>
            </ul>

            <h3>🌟 Key Features</h3>
            <ul className="features-list">
              <li>
                🪶 Lightweight structures – easy to transport and assemble
              </li>
              <li>
                🌦 Weather & corrosion resistant materials for all terrains
              </li>
              <li>🔧 Low maintenance, high ROI for developers and investors</li>
              <li>
                🌱 Eco-friendly, scalable manufacturing with consistent quality
              </li>
              <li>💰 Cost Effective with Fast ROI</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="product-page">
        {/* ====== FRP COTTAGES SECTION ====== */}
        <div className="product-wrapper">
          <div className="product-content">
            <h2>FRP Prefabricated Cottages</h2>
            <p>
              Engineered for <strong>strength and simplicity</strong>, our
              cottages are:
            </p>
            <ul>
              <li>
                🏗 Lightweight and easy to install – enabling faster construction
                anywhere.
              </li>
              <li>
                🌦 Durable and weather resistant – built to withstand humidity,
                rain, and sunlight.
              </li>
              <li>
                🛡 Corrosion-free and termite-proof – perfect for coastal and
                rural environments.
              </li>
              <li>
                🌿 Low maintenance and eco-friendly – sustainable living,
                simplified.
              </li>
            </ul>
            <p>
              Whether you're traveling solo, as a couple, or with family,{" "}
              <strong>DOM Houses</strong> offer a peaceful retreat that blends
              seamlessly into the landscape.
            </p>
            <p>
              <strong>Ideal for:</strong> resorts, eco-retreats, farm stays, CSR
              housing projects, and tourism developments.
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
              We extend the same innovation to a range of complementary
              infrastructure products that complete your living space:
            </p>

            <div className="addons-grid">
              <div className="addon-card">
                <i className="bi bi-droplet addon-icon"></i>
                <h3>FRP Water Tanks</h3>
                <p>
                  💧 Leak-proof, hygienic, and long-lasting storage solutions.
                </p>
              </div>

              <div className="addon-card">
                <i className="bi bi-house-door addon-icon"></i>
                <h3>FRP Septic Tanks</h3>
                <p>
                  🚽 Safe, odor-free, and environmentally compliant sanitation
                  systems.
                </p>
              </div>

              <div className="addon-card">
                <i className="bi bi-water addon-icon"></i>
                <h3>FRP Swimming Pools</h3>
                <p>
                  🏊 Elegant, pre-engineered pools that are easy to install and
                  maintain.
                </p>
              </div>

              <div className="addon-card">
                <i className="bi bi-flower3 addon-icon"></i>
                <h3>FRP Flower Pots & Planters</h3>
                <p>
                  🌺 Beautiful, lightweight designs for landscaping and décor.
                </p>
              </div>

              <div className="addon-card">
                <i className="bi bi-tree addon-icon"></i>
                <h3>FRP Landscaping Materials</h3>
                <p>
                  🌳 Pathways, benches, fencing, and garden accessories that
                  combine strength with style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comparative-container">
        <div className="head">
          <h2>A comparative study of different Dome house options</h2>
        </div>

        <div className="table-container">
          <table className="comparative-table">
            <thead>
              <tr>
                <th>Feature / Type</th>
                <th>FRP Dome House</th>
                <th>Container Housing</th>
                <th>Cement Structures</th>
                <th>Glass Dome Home</th>
                <th>Igloo House</th>
                <th>Tent House</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <b>Material</b>
                </td>
                <td>Fiberglass Reinforced Plastic (FRP)</td>
                <td>Steel shipping containers</td>
                <td>Concrete blocks or poured cement</td>
                <td>Tempered glass + steel</td>
                <td>Ice or compacted snow</td>
                <td>Canvas, nylon, or polyester</td>
              </tr>

              <tr>
                <td>
                  <b>Durability</b>
                </td>
                <td>✅ High (weatherproof, corrosion-resistant)</td>
                <td>✅ High (robust, fire-resistant)</td>
                <td>✅ Very high (permanent)</td>
                <td>⚠ Moderate (fragile, needs maintenance)</td>
                <td>✅ High (in snow)</td>
                <td>❌ Low (short lifespan)</td>
              </tr>

              <tr>
                <td>
                  <b>Insulation</b>
                </td>
                <td>✅ Excellent (thermal + acoustic)</td>
                <td>⚠ Moderate (needs retrofitting)</td>
                <td>✅ Excellent (thermal mass)</td>
                <td>❌ Poor (unless double-glazed)</td>
                <td>✅ Excellent (in cold)</td>
                <td>❌ Poor</td>
              </tr>

              <tr>
                <td>
                  <b>Mobility</b>
                </td>
                <td>⚠ Semi-portable</td>
                <td>⚠ Relocatable with crane/truck</td>
                <td>❌ Fixed</td>
                <td>❌ Fixed</td>
                <td>❌ Fixed</td>
                <td>✅ Highly portable</td>
              </tr>

              <tr>
                <td>
                  <b>Setup Time</b>
                </td>
                <td>✅ Fast (prefab, plug-and-play)</td>
                <td>⚠ Moderate (requires retrofitting, transport)</td>
                <td>❌ Slow (site prep, curing time)</td>
                <td>❌ Long (custom build)</td>
                <td>⚠ Manual, time-intensive</td>
                <td>✅ Instant</td>
              </tr>

              <tr>
                <td>
                  <b>Cost Efficiency</b>
                </td>
                <td>✅ Moderate (low maintenance, scalable)</td>
                <td>✅ Moderate (upcycled, but retrofitting adds)</td>
                <td>❌ High (materials + labor)</td>
                <td>❌ High (luxury segment)</td>
                <td>✅ Low (local materials)</td>
                <td>✅ Low</td>
              </tr>

              <tr>
                <td>
                  <b>Climate Adaptability</b>
                </td>
                <td>✅ All-weather</td>
                <td>⚠ Needs insulation in hot/cold climates</td>
                <td>✅ All-weather</td>
                <td>⚠ Limited (overheats in sun)</td>
                <td>❌ Only cold climates</td>
                <td>⚠ Mild climates only</td>
              </tr>

              <tr>
                <td>
                  <b>Use Cases</b>
                </td>
                <td>Eco/medical tourism, disaster housing</td>
                <td>Urban infill, student/staff housing</td>
                <td>Permanent housing, clinics, schools</td>
                <td>Resorts, greenhouses</td>
                <td>Arctic shelters</td>
                <td>Camping, festivals, emergency relief</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* === BELOW SECTION === */}
        {/* === BELOW SECTION === */}
        {/* === STRATEGIC TAKEAWAYS SECTION === */}
        <div className="takeaway-section">
          {/* LEFT SIDE (EMOJI STYLE) */}
          <div className="takeaway-left">
            <h2 className="takeaway-heading1">💡 Strategic Takeaways</h2>
            <ul className="takeaway-points">
              <li>
                🏠 <b>FRP Dome Houses</b> are ideal for{" "}
                <i>scalable, modular deployments</i> in eco-tourism, medical
                tourism, and disaster relief.
              </li>
              <li>
                🚚 <b>Container Housing</b> offers a{" "}
                <i>balance of durability and affordability</i>, but requires
                insulation and infrastructure retrofits.
              </li>
              <li>
                🧱 <b>Cement Structures</b> are best for{" "}
                <i>permanent, high-traffic installations</i>, but lack speed and
                flexibility.
              </li>
              <li>
                🪟 <b>Glass Domes</b> are niche — <i>aesthetic but fragile.</i>
              </li>
              <li>
                ⛺ <b>Igloos and Tent House</b> are <i>context-specific</i> and
                not scalable for modern, multi-climate use.
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE (ICON STYLE IMAGE) */}
          <div className="takeaway-right">
            <img
              src={strategicImage} // import this image at the top
              alt="Strategic Takeaways"
              className="takeaway-image"
            />
          </div>
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

export default Home;
