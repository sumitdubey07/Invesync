import React, { useState } from "react";
import "./Portfolio.css";
import { Stocks } from "./stocks"; // adjust the path if needed

const Portfolio = () => {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Filter & sort logic
  const filteredStocks = Stocks.filter(
    (stock) =>
      stock.name.toLowerCase().includes(search.toLowerCase()) ||
      stock.company.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => {
    if (sortOption === "name") return a.name.localeCompare(b.name);
    if (sortOption === "price") {
      const priceA = parseFloat(a.price.replace(/[₹,]/g, ""));
      const priceB = parseFloat(b.price.replace(/[₹,]/g, ""));
      return priceA - priceB;
    }
    return 0;
  });

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-header">Stock Portfolio</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search stock or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        <select
          className="sort-dropdown"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name (A–Z)</option>
          <option value="price">Price (Low → High)</option>
        </select>
      </div>

      <div className="stock-grid">
        {filteredStocks.length > 0 ? (
          filteredStocks.map((stock, index) => (
            <div key={index} className="stock-card">
              <h2 className="stock-name">{stock.name}</h2>
              <h3 className="stock-company">{stock.company}</h3>
              <p className="stock-description">{stock.description}</p>
              <p className="stock-price">💰 {stock.price}</p>
              <p className="stock-expectation">{stock.expectation}</p>
            </div>
          ))
        ) : (
          <p className="no-stocks">No stocks found matching your search.</p>
        )}
      </div>

      <p className="portfolio-footer">
        Data sourced from analyst reports & Yahoo Finance.
      </p>
    </div>
  );
};

export default Portfolio;
