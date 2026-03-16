function StockCard({ stock }) {
    if(!stock) return null;
    const isPositive = stock.change >= 0;
    const changeStyle = {
        color: isPositive ? "green" : "red",
        fontWeight: "bold"
    };
    return (
        <div className = "stock-card">
            <h2>{stock.symbol}</h2>
            <p>
                <strong>Current Price:</strong> ${stock.price})
            </p>
            <p style = {changeStyle}>
                <strong>Change:</strong> {stock.change}
            </p>
        </div>
    );
}

export default StockCard;