import React from "react";
import "./Comparative.css";
import strategicImage from "../../images/staratergy.png";

const Comparative = () => {
  return (
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

      <div className="takeaway-section">
        <div className="takeaway-left">
          <h2 className="takeaway-heading1">Strategic Takeaways</h2>
          <ul className="takeaway-points">
            <li>
               <b>FRP Dome Houses</b> are ideal for{" "}
              <i>scalable, modular deployments</i> in eco-tourism, medical
              tourism, and disaster relief.
            </li>
            <li>
               <b>Container Housing</b> offers a{" "}
              <i>balance of durability and affordability</i>, but requires
              insulation and infrastructure retrofits.
            </li>
            <li>
               <b>Cement Structures</b> are best for{" "}
              <i>permanent, high-traffic installations</i>, but lack speed and
              flexibility.
            </li>
            <li>
               <b>Glass Domes</b> are niche — <i>aesthetic but fragile.</i>
            </li>
            <li>
               <b>Igloos and Tent Houses</b> are <i>context-specific</i> and
              not scalable for modern, multi-climate use.
            </li>
          </ul>
        </div>

        <div className="takeaway-right">
          <img
            src={strategicImage}
            alt="Strategic Takeaways"
            className="takeaway-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Comparative;
