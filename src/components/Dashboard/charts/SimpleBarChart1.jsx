import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function SimpleBarChart1({ color, data1 }) {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F"], // Labels for bars
    datasets: [
      {
        label: "Values",
        data: data1, // Heights of the bars
        backgroundColor: color, // Bar color
        borderRadius: 5,
        barThickness: 6, // Width of bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide gridlines
          drawBorder: false, // Remove the x-axis border line
        },
        ticks: {
          display: false, // Hide x-axis labels
        },
        border: {
          display: false, // Completely hide the x-axis border line
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Hide gridlines
          drawBorder: false, // Remove the y-axis border line
        },
        ticks: {
          display: false, // Hide y-axis labels
        },
        border: {
          display: false, // Completely hide the y-axis border line
        },
      },
    },
    layout: {
      padding: 0, // Remove any padding around the chart
    },
  };

  return (
    <div style={{ backgroundColor: "white", width: "60%", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
