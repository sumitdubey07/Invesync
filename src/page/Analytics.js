// src/page/Analytics.js

import React from "react";
import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h1 className="analytics-heading">📈 Investment Analytics</h1>

      <div className="analytics-section">
        <h2>Portfolio Overview</h2>
        <p>
          Your current portfolio is well diversified across sectors. Here's a
          breakdown:
        </p>
        <ul>
          <li>40% in Technology</li>
          <li>25% in Healthcare</li>
          <li>20% in Energy</li>
          <li>15% in Consumer Goods</li>
        </ul>
      </div>

      <div className="analytics-section">
        <h2>📊 Top Performing Stocks</h2>
        <table className="analytics-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Return (%)</th>
              <th>Sector</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TCS</td>
              <td>+18.5%</td>
              <td>Technology</td>
            </tr>
            <tr>
              <td>Reliance</td>
              <td>+15.2%</td>
              <td>Energy</td>
            </tr>
            <tr>
              <td>HDFC</td>
              <td>+12.9%</td>
              <td>Finance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="analytics-section">
        <h2>Risk Assessment</h2>
        <p>
          Based on your current investment strategy, your portfolio has a{" "}
          <strong>moderate risk</strong> profile.
        </p>
        <p>
          Tip: Consider balancing high-risk assets with more stable sectors like
          Utilities and Government Bonds.
        </p>
      </div>

      <div className="analytics-section">
        <h2>Monthly Returns Tracker</h2>
        <p>Here’s a quick glance of your monthly performance:</p>
        <ul>
          <li>🟢 Jan: +5.2%</li>
          <li>🟡 Feb: +3.1%</li>
          <li>🔴 Mar: -1.8%</li>
          <li>🟢 Apr: +6.4%</li>
          <li>🟢 May: +4.9%</li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
