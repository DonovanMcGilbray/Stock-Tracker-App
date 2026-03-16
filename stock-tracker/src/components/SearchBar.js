import { useState } from "react";

function SearchBar({ onSearch }) {
    const [ticker, setTicker] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!ticker.trim()) return;
        onSearch(ticker.toUpperCase());
        setTicker("");
    };
    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type = "text"
                placeholder = "Enter stock ticker (AAPL)"
                value = {ticker}
                onChange = {(e) => setTicker(e.target.value)}
            />
            <button type = "submit">Search</button>
        </form>
    );
}

export default SearchBar;