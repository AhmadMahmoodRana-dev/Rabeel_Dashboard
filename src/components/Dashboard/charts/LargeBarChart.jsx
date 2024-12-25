import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { SelectButton } from "./SelectButton";

const data = [
  { month: "Jan", Asia: 10, Europe: 30, Americas: 20 },
  { month: "Feb", Asia: 15, Europe: 40, Americas: 25 },
  { month: "Mar", Asia: 10, Europe: 25, Americas: 15 },
  { month: "Apr", Asia: 20, Europe: 35, Americas: 25 },
  { month: "May", Asia: 25, Europe: 40, Americas: 35 },
  { month: "Jun", Asia: 15, Europe: 30, Americas: 20 },
  { month: "Jul", Asia: 20, Europe: 35, Americas: 30 },
  { month: "Aug", Asia: 10, Europe: 25, Americas: 15 },
  { month: "Sep", Asia: 15, Europe: 30, Americas: 20 },
  { month: "Oct", Asia: 25, Europe: 40, Americas: 35 },
  { month: "Nov", Asia: 10, Europe: 20, Americas: 15 },
  { month: "Dec", Asia: 20, Europe: 35, Americas: 30 },
];

const LargeBarChart = () => {
  return (
    <div className="p-3 pb-10 w-[60%] bg-white shadow-md rounded-md border">
    <div className="flex justify-between">
      <div className="upper-main">
        <div className="content ">
          <h2 className="text-2xl font-semibold pb-1">Area Installed</h2>
          <p className="text-md text-gray-500 pb-4">(+43%) than last year</p>
        </div>
        <ul className="flex gap-4">
          <div className="flex justify-center items-center gap-1">
            <div className="w-[10px] h-[10px] rounded-full bg-[#007867]"></div>
            <li className="text-sm tracking-wide">Asia</li>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ffab00]"></div>
            <li className="text-sm tracking-wide">Europe</li>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="w-[10px] h-[10px] rounded-full bg-[#c8fad6]"></div>
            <li className="text-sm tracking-wide">Americas</li>
          </div>
        </ul>
      </div>
      <div className="lower-main">
        <SelectButton/>
      </div>
    </div>

      <ResponsiveContainer width="100%" height={300} className={"mt-10"}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
        >
          {/* Configure CartesianGrid to show only vertical (X-axis) lines */}
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray="3 3"
          />
          {/* X and Y axes */}
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          {/* Remove the Legend */}
          <Bar
            dataKey="Asia"
            stackId="a"
            fill="#007867"
            barSize={18}
            radius={1}
          />
          <Bar
            dataKey="Europe"
            stackId="a"
            fill="#ffab00"
            barSize={18}
            radius={1}
          />
          <Bar
            dataKey="Americas"
            stackId="a"
            fill="#00b8d9"
            barSize={18}
            className="rounded-lg"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LargeBarChart;
