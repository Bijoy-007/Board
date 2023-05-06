import {
  BanknotesIcon,
  TagIcon,
  HandThumbUpIcon,
  UsersIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

import StartCard from "../components/data/StatCard";
import AppLayout from "../layouts/AppLayout";
import Avatar from "../Assets/images/user.jpg";

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

const DashboardPage = () => {
  return (
    <AppLayout>
      <div className="bg-red-500 w-full pl-12 pt-4">
        {/* Page Top bar */}
        <div className="flex flex-row">
          <div className="fonts-montserrat text-2xl font-bold">Dashboard</div>
          {/* Search Button */}
          <div className="ml-auto">
            <label class="relative block">
              <input
                class="bg-white placeholder:font-italitc rounded-2xl pl-3 pr-10 focus:outline-none text-sm py-1.5"
                placeholder="Search..."
                type="text"
              />

              <span class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                <svg
                  class="h-5 w-5 fill-black"
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
        <div className="grid grid-cols-4 gap-10 my-4">
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
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
