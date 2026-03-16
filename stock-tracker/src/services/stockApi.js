const API_KEY = "N55FQUGZP4HOT25C";
const BASE_URL = "https://www.alphavantage.co/query";

export const fetchCurrentStock = async (symbol) => {
    try {
        const response = await fetch(
            `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        );
        const data = await response.json();
        const quote = data["Global Quote"];
        if(!quote) {
            throw new Error("Stock data not found");
        }
        return {
            symbol: quote["01. symbol"],
            price: parseFloat(quote["05. price"]),
            change: parseFloat(quote["09. change"]),
        };
    } catch (error) {
        console.error("Error fetching current stock:", error);
        return null;
    }
};

export const fetchHistoricalStock = async (symbol) => {
    try {
        const response = await fetch(
            `${BASE_URL}?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`
        );
        const data = await response.json();
        const timeSeries = data["Time Series (Daily)"];
        if(!timeSeries) {
            throw new Error("Historical data not found");
        }
        const chartData = Object.keys(timeSeries)
            .slice(0, 30)
            .reverse()
            .map((date) => ({
                date,
                price: parseFloat(timeSeries[date]["4. close"]),
            }));
            return chartData;
    } catch (error) {
        console.error("Error fetching historical stock:", error);
        return [];
    }
};