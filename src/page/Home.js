import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import stockImage from "../assets/stock.jpg"; // <-- Import your image

const Home = () => {
  return (
    <main className="home-main">
      <div
        className="home-card"
        style={{ backgroundImage: `url(${stockImage})` }} // <-- Set background here
      >
        <h1 className="home-heading">Welcome to Invesync</h1>
        <p className="home-subheading">
          Synchronized investing at a glance. Track, analyze, and manage your
          stock portfolio smarter.
        </p>
        <div className="home-buttons">
          <Link to="/portfolio" className="home-button">
            View Portfolio
          </Link>
          <Link to="/login" className="home-button secondary">
            Login / Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
