// src/page/Analytics.js

import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import "./Analytics.css";

// 🔹 Register all necessary chart.js elements
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const Analytics = () => {
  const portfolioData = {
    labels: ["Technology", "Healthcare", "Energy", "Consumer Goods", "Finance"],
    datasets: [
      {
        label: "Portfolio Distribution",
        data: [40, 25, 20, 10, 5],
        backgroundColor: [
          "#4e79a7",
          "#f28e2c",
          "#e15759",
          "#76b7b2",
          "#59a14f",
        ],
        borderWidth: 1,
      },
    ],
  };

  const returnsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Returns (%)",
        data: [5.2, 3.1, -1.8, 6.4, 4.9, 2.3, 5.5],
        fill: true,
        backgroundColor: "rgba(78, 121, 167, 0.2)",
        borderColor: "#4e79a7",
        tension: 0.3,
      },
    ],
  };

  const topStocks = [
    { name: "TCS", return: "+18.5%", sector: "Technology" },
    { name: "Reliance", return: "+15.2%", sector: "Energy" },
    { name: "HDFC", return: "+12.9%", sector: "Finance" },
    { name: "Infosys", return: "+11.8%", sector: "Technology" },
    { name: "Nestle", return: "+10.5%", sector: "FMCG" },
  ];

  return (
    <div className="analytics-container">
      <h1 className="analytics-heading"> Investment Analytics</h1>

      {/* Portfolio Cards */}
      <div className="analytics-cards">
        <div className="analytics-card">
          <h3>Portfolio Value</h3>
          <p>₹12,50,000</p>
        </div>
        <div className="analytics-card">
          <h3>Total Gain</h3>
          <p>+12.3%</p>
        </div>
        <div className="analytics-card">
          <h3>Risk Level</h3>
          <p>Moderate</p>
        </div>
        <div className="analytics-card">
          <h3>Top Sector</h3>
          <p>Technology</p>
        </div>
      </div>

      {/* Portfolio Distribution Pie Chart */}
      <div className="analytics-section">
        <h2>Portfolio Distribution</h2>
        <Pie data={portfolioData} />
      </div>

      {/* Top Performing Stocks */}
      <div className="analytics-section">
        <h2> Top Performing Stocks</h2>
        <div className="top-stocks-grid">
          {topStocks.map((stock, index) => (
            <div key={index} className="stock-card">
              <h4>{stock.name}</h4>
              <p>Return: <strong>{stock.return}</strong></p>
              <p>Sector: {stock.sector}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Returns Line Chart */}
      <div className="analytics-section">
        <h2>Monthly Returns Tracker</h2>
        <Line data={returnsData} />
      </div>

      {/* Risk Assessment */}
      <div className="analytics-section">
        <h2>Risk Assessment</h2>
        <div className="risk-card">
          <p>
            Based on your investment strategy, your portfolio has a{" "}
            <strong>moderate risk</strong> profile.
          </p>
          <p>
            Tip: Balance high-risk assets with stable sectors like Utilities
            and Government Bonds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
