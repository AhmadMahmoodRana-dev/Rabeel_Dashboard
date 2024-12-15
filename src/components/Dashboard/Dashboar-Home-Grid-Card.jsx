import React from "react";
import { Card } from "../ui/card";
import SimpleBarChart1 from "./charts/SimpleBarChart1";
const DashboardHomeGridCard = ({ title, value, description, icon,color,data1 }) => {
  console.log("data",data1)
  return (
    <Card className=" min-w-[300px] w-[29%]  h-auto min-h-[150px] rounded-lg px-3 py-5 flex justify-between items-center">
      <main className="w-[55%]">
        <div className="flex justify-between">
          <h1 className="text-gray-600  font-semibold">{title}</h1>
          {/* <h1 className="text-[#60b39c] font-semibold">{percentage}</h1> */}
        </div>
        <div>
          <p className="font-bold  text-3xl text-gray-700 pt-3">{value}</p>
        </div>
        {/* <Divider /> */}
        <div className="flex justify-between items-center pt-3">
          <div className="flex justify-center items-center text-green-500 gap-3">
            {icon} <h1 className="text-gray-600">{description}</h1>
          </div>
        </div>
      </main>
      <main className="w-[45%] h-auto flex  items-end justify-end">
            <SimpleBarChart1 color={color} data1={data1} />
      </main>
    </Card>
  );
};

export default DashboardHomeGridCard;
