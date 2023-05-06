import {
  ChartPieIcon,
  CalendarDaysIcon,
  TagIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import NavButton from "./NavButton";

const navButtons = [
  {
    label: "Dashboard",
    icon: <ChartPieIcon className="h-6 w-6 inline" />,
  },
  {
    label: "Transactions",
    icon: <TagIcon className="h-6 w-6 inline" />,
  },
  {
    label: "Schedules",
    icon: <CalendarDaysIcon className="h-6 w-6 inline" />,
  },
  {
    label: "Users",
    icon: <UserCircleIcon className="h-6 w-6 inline" />,
  },
  {
    label: "Settings",
    icon: <Cog6ToothIcon className="h-6 w-6 inline" />,
  },
];

const SideBar = () => {
  return (
    <div className="basis-72 bg-black h-full rounded-4xl p-2 flex flex-col">
      <div className="ml-10">
        {/* Navbar Heading */}
        <div className="fonts-montserrat font-bold text-white text-4xl mt-12 mb-14">
          Board.
        </div>
        {/* Nav Icon Buttons */}
        <div className="mr-3">
          {navButtons.map((item, index) => (
            <NavButton
              key={index}
              isSelected={false}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      {/* Nav Foot  */}
      <div
        className="grow ml-10 flex flex-col justify-end pb-10"
        // style={{ border: "1px solid green" }}
      >
        <div className="mb-2">
          <a
            href="/#"
            className="text-white text-sm font-normal hover:underline"
          >
            Help
          </a>
        </div>
        <div>
          <a
            href="/#"
            className="text-white text-sm font-normal hover:underline"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
