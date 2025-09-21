import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>About Invesync</h1>
        <p>
          <strong>Invesync</strong> is a modern stock analysis and portfolio
          handler built for smart investors and students learning to manage
          financial data. It helps you track, analyze, and maintain your
          investments with simplicity and elegance.
        </p>
      </div>

      <div className="about-section">
        <h2>🔍 Key Features</h2>
        <ul className="features-list">
          <li>Real-time portfolio updates</li>
          <li>Add, delete & manage stocks easily</li>
          <li>Visual representation of stock growth (coming soon)</li>
          <li>Reusable React components</li>
          <li>Easy-to-understand UI for all users</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>👨‍💻 Developer Info</h2>
        <p>
          This application was developed by <strong>Sumit Dubey</strong> as a
          part of a college project to demonstrate frontend skills with React JS
          and backend integration using Java or Node.
        </p>
      </div>

      <div className="about-section">
        <h2>📫 Contact</h2>
        <p>
          Have feedback or suggestions? Reach out via email at:{" "}
          <strong>sumit.dubey18492@sakec.ac.in</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
