import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend 
} from "chart.js";

ChartJS.register(CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend
);

function StockChart({ data }) {
    const chartData = {
        labels: data.map((item) => item.date),
        datasets: [ {
            label: "Price ($)",
            data: data.map((item) => item.price),
            borderColor: "rgba(33, 150, 243, 1)",
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            fill: true,
            tension: 0.3,
            pointRadius: 2
        }, ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: { display: true, position: "top" },
            title: { display: true, text: "Historical Stock Price (Last 30 Days)" },
            tooltip: { mode: "index", intersect: false },
        },
        scales: {
            x: {
                display: true,
                title: { display: true, text: "Date" },
                ticks: { maxTicksLimit: 10 }
            },
            y: {
                display: true,
                title: { display: true, text: "Price ($)" },
                beginAtZero: false
            }
        }
    };
    return <Line data = {chartData} options = {options} />;
}

export default StockChart;