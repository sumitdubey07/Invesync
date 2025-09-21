const StockCard = ({ stock }) => (
  <div
    style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
  >
    <h3>{stock.name}</h3>
    <p>Quantity: {stock.quantity}</p>
    <p>Price per Unit: ₹{stock.price}</p>
    <p>Total Value: ₹{stock.quantity * stock.price}</p>
  </div>
);

export default StockCard;
