import React from "react";
import "./Companyprofile.css";
import VisionMissionImg from "../../images/VisMis.png";
import ImpactImg from "../../images/ImpactAreas.png";
import { Helmet } from "react-helmet";

const Companyprofile = () => {
  return (
    <div className="company-page">
            <Helmet>
        <title>About Romarking | FRP Smart Living & Sustainable Innovations</title>

        <meta
          name="description"
          content="Learn about Romarking, a pioneer in FRP smart living solutions. We deliver sustainable prefabricated cottages, modular infrastructure, and eco-friendly innovations for modern communities."
        />

        <meta
          name="keywords"
          content="Romarking company profile, FRP smart living, FRP prefabricated cottages, sustainable construction, eco friendly housing solutions"
        />
      </Helmet>
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
      <section className="vision-section">
        <div className="vision-text">
          <h2>🌍 Vision</h2>
          <p>
            To redefine modern living through sustainable, durable, and
            affordable FRP innovations that empower communities and protect the
            planet. We envision a world where construction is faster, cleaner,
            and more responsible — a world built not just for today’s needs, but
            for generations to come.
          </p>

          <h2>💡 Mission</h2>
          <ul>
            <li>
              Deliver high-quality, eco-friendly FRP solutions combining design,
              durability, and sustainability.
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
              <strong>Innovation with Purpose:</strong> Every product we design
              is a step toward smarter and more sustainable living.
            </li>
            <li>
              <strong>Integrity in Every Build:</strong> We value transparency,
              quality, and long-term trust over short-term gains.
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

      <section className="impact-section">
        <div className="impact-image">
          <img src={ImpactImg} alt="Our Impact Areas" />
        </div>

        <div className="impact-text">
          <h2> Our Impact Areas</h2>
          <ul>
            <li>
              <strong>Housing & Infrastructure:</strong> FRP-based prefabricated
              cottages, sanitation, and utility solutions for community housing,
              CSR projects, and institutional use.
            </li>
            <li>
              <strong>Tourism & Resorts:</strong> Rapid-deploy eco-cottages,
              modular pools, and landscaping designs tailored for resorts and
              retreats.
            </li>
            <li>
              <strong>Industrial & Green Design:</strong> FRP tanks, septic
              systems, and structural components built for longevity in harsh
              environments.
            </li>
            <li>
              <strong>Environment & Green Design:</strong> Products that
              minimize waste, reduce carbon footprint, and support circular
              economy goals.
            </li>
          </ul>

          <h3>Key Features</h3>
          <ul className="features-list">
            <li>Lightweight structures – easy to transport and assemble</li>
            <li>Weather & corrosion resistant materials for all terrains</li>
            <li>Low maintenance, high ROI for developers and investors</li>
            <li>
              Eco-friendly, scalable manufacturing with consistent quality
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Companyprofile;
