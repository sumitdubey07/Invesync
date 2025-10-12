// src/page/About.js

import React from "react";
import { FaBullseye, FaCode, FaEnvelope, FaChartLine } from "react-icons/fa";
import "./About.css";

const features = [
  { icon: <FaChartLine />, text: "Real-time portfolio updates" },
  { icon: <FaBullseye />, text: "Add, delete & manage stocks easily" },
  { icon: <FaChartLine />, text: "Visual representation of stock growth (coming soon)" },
  { icon: <FaCode />, text: "Reusable React components" },
  { icon: <FaBullseye />, text: "Easy-to-understand UI for all users" },
];

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Invesync</h1>

      {/* About Card */}
      <div className="about-section card">
        <h2>What is Invesync?</h2>
        <p>
          <strong>Invesync</strong> is a modern stock analysis and portfolio
          manager built for smart investors and students learning to manage
          financial data. Track, analyze, and maintain your investments with
          simplicity and elegance.
        </p>
      </div>

      {/* Features Grid */}
      <div className="about-section card">
        <h2>🔍 Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Info */}
      <div className="about-section card">
        <h2>👨‍💻 Developer Info</h2>
        <p>
          Developed by <strong>Sumit Dubey</strong> as a college project to demonstrate
          React JS frontend skills and backend integration with Java/Node. Focused on clean
          UI, reusable components, and real-time data management.
        </p>
      </div>

      {/* Contact */}
      <div className="about-section card contact-card">
        <h2>📫 Contact</h2>
        <p>
          Reach out via email:{" "}
          <strong>sumit.dubey18492@sakec.ac.in</strong>{" "}
          <FaEnvelope className="contact-icon" />
        </p>
      </div>
    </div>
  );
};

export default About;
