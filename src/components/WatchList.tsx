import React, { useEffect } from "react";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [stockData, setStockData] = useState({});

  const addCompany = (symbol) => {
    setWatchlist((prev) => [...prev, symbol]);
  };

  const removeCompany = (symbol) => {
    setWatchlist((prev) => prev.filter((item) => item !== symbol));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      watchlist.forEach((symbol) => {
        fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=YOUR_API_KEY`
        )
          .then((response) => response.json())
          .then((data) => {
            const latestPrice = data["Time Series (1min)"]["latest_price"]; // Replace with actual data keys
            setStockData((prev) => ({ ...prev, [symbol]: latestPrice }));
          });
      });
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [watchlist]);

  return (
    <div>
      {watchlist.map((symbol) => (
        <div key={symbol}>
          {symbol}: {stockData[symbol] || "Loading..."}
        </div>
      ))}
    </div>
  );
};

export default WatchList;
