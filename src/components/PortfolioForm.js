import { useState } from "react";

const PortfolioForm = ({ onAddStock }) => {
  const [stock, setStock] = useState({ name: "", quantity: "", price: "" });

  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stock.name && stock.quantity && stock.price) {
      onAddStock(stock);
      setStock({ name: "", quantity: "", price: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "10px", margin: "20px" }}
    >
      <input
        name="name"
        placeholder="Stock Name"
        value={stock.name}
        onChange={handleChange}
      />
      <input
        name="quantity"
        placeholder="Quantity"
        type="number"
        value={stock.quantity}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Price"
        type="number"
        value={stock.price}
        onChange={handleChange}
      />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default PortfolioForm;
