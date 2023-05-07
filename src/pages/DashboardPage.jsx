import { useEffect, useState } from "react";
import {
  BanknotesIcon,
  TagIcon,
  HandThumbUpIcon,
  UsersIcon,
  BellIcon,
  ArrowDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import StartCard from "../components/data/StatCard";
import AppLayout from "../layouts/AppLayout";
import Avatar from "../Assets/images/user.jpg";
import LineChartCard from "../components/data/LineChartCard";
import PieChartCard from "../components/data/PieChartCard";
import getRandomNumbers from "../apis/getRandomNumbers";
import getStatDetails from "../utils/getStatDetails";
import getProductsDetails from "../utils/getProductsDetails";
import getProductPercentages from "../utils/getProductPercentages";

const infos = [
  {
    label: "Total Revenues",
    data: "$2,129,340",
    bgColor: "#DDEFE0",
    icon: <BanknotesIcon className="w-8 h-8 ml-auto" />,
  },
  {
    label: "Total Transactions",
    data: "1,520",
    bgColor: "#F4ECDD",
    icon: <TagIcon className="w-8 h-8 ml-auto" />,
  },
  {
    label: "Total Likes",
    data: "9,721",
    bgColor: "#EFDADA",
    icon: <HandThumbUpIcon className="w-8 h-8 ml-auto" />,
  },
  {
    label: "Total Users",
    data: "892",
    bgColor: "#DEE0EF",
    icon: <UsersIcon className="w-8 h-8 ml-auto" />,
  },
];

const colorCodes = ["#98d89e", "#ee8484", "#f6dc7d"];
const colors = ["fade-green", "fade-yellow", "fade-red"];
const schedules = [
  {
    agenda: "Meeting with suppliers from Kuta bali.",
    time: "14:00 - 15:00",
    address: "Sunset road, Kuta Bali",
  },
  {
    agenda: "Check operation at Giga factory 1",
    time: "18:00 - 20:00",
    address: "central Jakarta",
  },
];

const DashboardPage = () => {
  const [dateRange] = useState({
    start: "January",
    end: "July",
    year: "2022",
  });

  const [randomNumbers, setRandomNumbers] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  // Loading initial data
  useEffect(() => {
    // Moving the fetchData() here as it will be not accessed or called later on
    const fetchData = async () => {
      const { ok, data } = await getRandomNumbers();
      if (ok) {
        setRandomNumbers(data);
      }
    };
    fetchData();
  }, []);

  return (
    <AppLayout>
      <div className="w-full pl-12 pt-4 pr-12">
        {/* Page Top bar */}
        <div className="flex flex-row">
          <div className="fonts-montserrat text-2xl font-bold">Dashboard</div>
          {/* Search Button */}
          <div className="ml-auto">
            <label className="relative block">
              <input
                className="bg-white placeholder:font-italitc rounded-2xl pl-3 pr-10 focus:outline-none text-sm py-1.5"
                placeholder="Search..."
                type="text"
              />

              <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                <svg
                  className="h-5 w-5 fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </span>
            </label>
          </div>
          {/* Notification */}
          <BellIcon className="w-8 h-8 mx-4" />
          {/* Avatar  */}
          <div>
            <img className="rounded-full w-8" src={Avatar} alt="User" />
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-4 gap-20 my-4">
          {infos.map((item, index) => (
            <StartCard
              key={index}
              label={item.label}
              data={item.data}
              bgColor={item.bgColor}
              icon={item.icon}
            />
          ))}
        </div>

        {/* Line Chart  */}
        <div className="bg-white min-w-full rounded-2xl p-4 pl-6">
          <div className="fonts-montserrat text-lg font-bold">Activities</div>
          <div className="flex flex-row">
            <div className="text-sm text-light-grey fonts-montserrat mb-1">
              {dateRange.start} - {dateRange.end} {dateRange.year}{" "}
              <ArrowDownIcon className="h-3 w-3 inline cursor-pointer" />
            </div>
            <div className="ml-auto text-sm mr-4">
              <div className="inline-block h-2.5 w-2.5 bg-light-pink rounded-full mx-2"></div>
              Guest
            </div>
            <div className="text-sm mr-16">
              <div className="inline-block h-2.5 w-2.5 bg-light-green rounded-full mx-2 "></div>
              User
            </div>
          </div>
          <LineChartCard data={getStatDetails(randomNumbers)} />
        </div>

        {/* 2 data cards  */}
        <div className="grid grid-cols-2 gap-50 mt-3">
          {/* Card 1  */}
          <div className="pb-8 bg-white rounded-2xl grid grid-cols-2">
            <PieChartCard
              label="Top Products"
              data={getProductsDetails(randomNumbers)}
            />
            <div>
              <div className="px-6 text-right mt-8">
                <div className="text-xs mr-auto text-light-grey fonts-montserrat mb-1">
                  {dateRange.start} - {dateRange.end} {dateRange.year}{" "}
                  <ArrowDownIcon className="h-3 w-3 inline cursor-pointer" />
                </div>
              </div>
              {/* Line Item  */}
              {getProductPercentages(randomNumbers).map((item, index) => (
                <div className="my-2" key={index}>
                  <div className="font-bold text-sm">
                    <div
                      className={`inline-block h-2.5 w-2.5 bg-${colors[index]} rounded-full mx-2`}
                    ></div>
                    {item.label}
                  </div>
                  <div className="pl-6 text-xs text-light-grey">
                    {item.percentage}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2  */}
          <div className="bg-white rounded-2xl px-8 py-6">
            {/* Heading  */}
            <div className="flex flex-row mb-4">
              <div className="fonts-montserrat font-bold text-lg">
                Today's schedule
              </div>
              <div className="ml-auto text-xs text-light-grey fonts-montserrat mb-1 hover:cursor-pointer">
                <span>
                  See all <ArrowRightIcon className="h-3 w-3 inline" />
                </span>
              </div>
            </div>
            {/* Line Items  */}
            {schedules.map((item, index) => {
              const style = {
                borderColor: colorCodes[index],
              };

              return (
                <div
                  style={style}
                  key={index}
                  className={`border-l-4 pl-3 mb-3`}
                >
                  <div className="text-sm font-bold">{item.agenda}</div>
                  <div className="text-xs text-light-grey">{item.time}</div>
                  <div className="text-xs text-light-grey">{item.address}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
