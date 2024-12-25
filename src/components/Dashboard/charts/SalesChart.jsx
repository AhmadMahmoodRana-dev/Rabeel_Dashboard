import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
} from "recharts";
import { SelectButton } from "./SelectButton";

const data = [
  { month: "Jan", income: 30, expenses: 50 },
  { month: "Feb", income: 50, expenses: 70 },
  { month: "Mar", income: 40, expenses: 60 },
  { month: "Apr", income: 80, expenses: 90 },
  { month: "May", income: 120, expenses: 100 },
  { month: "Jun", income: 100, expenses: 80 },
  { month: "Jul", income: 150, expenses: 120 },
  { month: "Aug", income: 200, expenses: 150 },
  { month: "Sep", income: 180, expenses: 140 },
  { month: "Oct", income: 100, expenses: 110 },
  { month: "Nov", income: 80, expenses: 90 },
  { month: "Dec", income: 60, expenses: 70 },
];

const SalesChart = () => {
  return (
    <div className="p-3 pb-10 w-[60%] bg-white shadow-md rounded-md border">
      <div className="flex justify-between">
        <div className="upper-main">
          <div className="content">
            <h2 className="text-2xl font-semibold pb-1">Area Installed</h2>
            <p className="text-md text-gray-500 pb-4">(+43%) than last year</p>
          </div>
          <ul className="flex gap-4">
            <div>
              <div className="flex justify-center items-center gap-1">
                <div className="w-[10px] h-[10px] rounded-full bg-[#007867]"></div>
                <li className="text-sm tracking-wide">Total income</li>
              </div>
              <h1 className="font-semibold text-lg">1.23k</h1>
            </div>
            <div>
              <div className="flex justify-center items-center gap-1">
                <div className="w-[10px] h-[10px] rounded-full bg-[#ffab00]"></div>
                <li className="text-sm tracking-wide">Total expenses</li>
              </div>
              <h1 className="font-semibold text-lg">6.79k</h1>
            </div>
          </ul>
        </div>
        <div className="lower-main">
          <SelectButton />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300} className={"mt-10"}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray="3 3"
          />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          {/* <Legend /> */}
          {/* Shaded areas for income and expenses */}
          <Area
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            fill="rgba(34, 197, 94, 0.2)" // Transparent green
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#fbbf24"
            fill="rgba(251, 191, 36, 0.2)" // Transparent yellow
            strokeWidth={2}
          />
          {/* Lines */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#fbbf24"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
