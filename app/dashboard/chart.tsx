"use client"

import React from "react";
import { Line } from "react-chartjs-2";
import {

Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

const revenueData = {
labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
],
datasets: [
    {
        label: "Revenue Earned ($)",
        data: [1200, 1900, 1700, 2200, 2500, 2100, 2300, 2400, 2000, 2600, 2700, 3000],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
    },
],
};

const options = {
responsive: true,
plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: "Monthly Revenue" },
},
};

const RevenueLineChart: React.FC = () => (
<div>
    <Line data={revenueData} options={options} />
</div>
);

export default RevenueLineChart;