import StockCard from "./StockCard";

const PortfolioList = ({ stocks }) => (
  <div style={{ padding: "0 20px" }}>
    {stocks.length === 0 ? (
      <p>No stocks added yet.</p>
    ) : (
      stocks.map((stock, idx) => <StockCard key={idx} stock={stock} />)
    )}
  </div>
);

export default PortfolioList;
