// src/page/Portfolio.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Portfolio.css";

const Portfolio = () => {
  const [stocks, setStocks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const fetchStocks = async () => {
    const res = await axios.get("http://localhost:8080/api/stocks");
    setStocks(res.data);
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/stocks", formData);
    fetchStocks();
    setFormData({ name: "", quantity: "", price: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/stocks/${id}`);
    fetchStocks();
  };

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Portfolio</h1>
      <form onSubmit={handleSubmit} className="portfolio-form">
        <input
          name="name"
          placeholder="Stock Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Stock</button>
      </form>

      <div className="stock-list">
        {stocks.map((stock) => (
          <div key={stock.id} className="stock-card">
            <h3>{stock.name}</h3>
            <p>Quantity: {stock.quantity}</p>
            <p>Price: ₹{stock.price}</p>
            <button onClick={() => handleDelete(stock.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
