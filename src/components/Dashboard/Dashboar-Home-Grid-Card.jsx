import React from "react";
import { Card } from "../ui/card";
import { FaAnglesUp } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
const DashboardHomeGridCard = ({
  title1,
  title2,
  title3,
  title4,
  data1,
  data2,
  data3,
  data4,
  percent1,
  percent2,
}) => {
  return (
    <Card className=" min-w-[300px] w-[29%]  h-auto min-h-[150px] rounded-lg px-3 py-5 flex justify-between items-center ">
      <main className="w-[65%]">
        <div className="flex sm:gap-12 gap-3  items-center">
          <div className="leading-none">
            <h1 className="text-black text-sm font-semibold  w-24">{title1}</h1>
            <p className="font-bold  text-2xl text-black">{data1}</p>
          </div>
          <div className="raise flex flex-col justify-center items-center">
            <div className="bg-[#dbf6e5] w-7 h-7 rounded-full flex justify-center items-center">
              <FaArrowTrendUp className="text-[#00a76f]" />
            </div>
            <p className="font-semibold text-sm text-gray-700">{percent1}</p>
          </div>
        </div>

        <div className="flex sm:gap-12 gap-3 items-center mt-3">
          <div className="leading-none">
            <h1 className="text-black text-sm font-semibold  w-24">{title3}</h1>
            <p className="font-bold  text-2xl text-black">{data3}</p>
          </div>
          <div className="raise flex flex-col justify-center items-center">
            <div className="bg-[#ffe4de] w-7 h-7 rounded-full flex justify-center items-center">
              <FaArrowTrendDown className="text-red-600" />
            </div>
            <p className="font-semibold text-sm text-gray-700">{percent2}</p>
          </div>
        </div>
      </main>

      {/* <Divider /> */}

      <main className="w-[30%]">
        <div className="flex gap-2 items-center">
          <div className="leading-none">
            <h1 className="text-black text-sm font-semibold  w-24">{title2}</h1>
            <p className="font-bold  text-2xl text-black">{data2}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <div className="leading-none">
            <h1 className="text-black text-sm font-semibold  w-24">{title4}</h1>
            <p className="font-bold  text-2xl text-black">{data4}</p>
          </div>
        </div>
      </main>
    </Card>
  );
};

export default DashboardHomeGridCard;
