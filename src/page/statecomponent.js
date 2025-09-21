import React from "react";
import { useState } from "react";
import { Stocks } from "./page/stocks";
export default function StockGallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((prevIndex) => (prevIndex + 1) % Stocks.length); // loop back to start
  }

  let stock = Stocks[index];

  return (
    <>
      <button onClick={handleClick}>Next Stock</button>
      <h2>
        <i>{stock.name}</i> — {stock.company}
      </h2>
      <h3>
        ({index + 1} of {Stocks.length})
      </h3>
      <p>
        <strong>Current Price:</strong> {stock.price}
      </p>
      <p>
        <strong>Description:</strong> {stock.description}
      </p>
      <p>
        <strong>Expectation:</strong> {stock.expectation}
      </p>
    </>
  );
}
