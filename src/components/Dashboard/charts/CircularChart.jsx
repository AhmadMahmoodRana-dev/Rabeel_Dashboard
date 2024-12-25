import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
];

const CircularChart = () => {
  return (
    <div className="w-[350px] h-[500px] flex flex-col bg-white border shadow-xl rounded-lg">
      <div className="content px-6 pt-4">
        <h1 className="text-black text-xl font-semibold tracking-wide">
          Current download
        </h1>
        <p className="text-gray-800 text-md mt-1">
          Downloaded by operating system
        </p>
      </div>
      <div className="flex w-full h-full justify-center items-center relative mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="100%"
            barSize={10}
            data={data}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff" }}
              background
              clockWise
              dataKey="uv"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* <div className="absolute">
          <h1 className="text-center text-gray-400 tracking-wide">Total</h1>
          <p className="text-center font-bold text-lg">188,254</p>
        </div> */}
      </div>
      <div className="bottom-div w-full mt-6 border-t h-[70px]">
        <ul className="flex gap-4 justify-center items-center h-full">
          <div className="flex justify-center items-center gap-1">
            <div className="w-[10px] h-[10px] rounded-full bg-[#5be49b]"></div>
            <li className="text-sm tracking-wide">Mac</li>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="w-[10px] h-[10px] rounded-full bg-[#007867]"></div>
            <li className="text-sm tracking-wide">Window</li>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="w-[10px] h-[10px] rounded-full bg-[#c8fad6]"></div>
            <li className="text-sm tracking-wide">iOS</li>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="w-[10px] h-[10px] rounded-full bg-[#004b50]"></div>
            <li className="text-sm tracking-wide">Android</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CircularChart;

//  <ResponsiveContainer width="100%" height="100%">
//   <RadialBarChart
//     cx="50%"
//     cy="50%"
//     innerRadius="10%"
//     outerRadius="100%"
//     barSize={10}
//     data={data}
//   >
//     <RadialBar
//       minAngle={15}
//       label={{ position: 'insideStart', fill: '#fff' }}
//       background
//       clockWise
//       dataKey="uv"
//     />
//   </RadialBarChart>
// </ResponsiveContainer>
