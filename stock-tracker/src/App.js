import { useState } from "react";
import SearchBar from "./components/SearchBar";
import StockCard from "./components/StockCard";
import StockChart from "./components/StockChart";
import { fetchCurrentStock, fetchHistoricalStock } from "./services/stockApi";
import "./styles/App.css";

function App() {
  const [stock, setStock] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = async (symbol) => {
    setLoading(true);
    const currentData = await fetchCurrentStock(symbol);
    const historicalData = await fetchHistoricalStock(symbol);
    setStock(currentData);
    setChartData(historicalData);
    setLoading(false);
  };
  return (
    <div className = "app-container">
      <header className = "app-header">
        <h1>Stock Tracker</h1>
      </header>
      <SearchBar onSearch = {handleSearch} />
      {loading && <p className = "loading">Loading stock data...</p>}
      {stock && <StockCard stock = {stock} />}
      {chartData && chartData.length > 0 ? (
        <div className = "chart-container">
          <StockChart data = {chartData} />
        </div>
      ) : stock && !loading ? (
        <p className = "loading">Historical chart not available.</p>
      ) : null}
    </div>
  );
}

export default App;