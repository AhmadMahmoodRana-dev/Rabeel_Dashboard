import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Piechart = () => {
  const data = [
    { name: "Mac", value: 50000 },
    { name: "Windows", value: 80000 },
    { name: "iOS", value: 30000 },
    { name: "Android", value: 28000 },
  ];

  const COLORS = ["#5be49b", "#007867", "#c8fad6", "#004b50"];

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
      <div className="flex justify-center items-center relative mt-2">
        <PieChart width={320} height={320}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80} // Adjusted for larger size
            outerRadius={120} // Adjusted for larger size
            dataKey="value"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="absolute">
          <h1 className="text-center text-gray-400 tracking-wide">Total</h1>
          <p className="text-center font-bold text-lg">188,254</p>
        </div>
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

export default Piechart;
