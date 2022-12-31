import React, { useState } from "react";
import {
  AccountIcon, AnalyticsIcon, ArrowCircleIcon, DashboardIcon, FilesIcon, FireIcon,
  InboxIcon, ScheduleIcon, SearchIcon, SettingsIcon
} from "../svgIcons/MenuIcons";

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const Menus = [
    { title: "Dashboard", icon: <DashboardIcon /> },
    { title: "Inbox", icon: <InboxIcon /> },
    { title: "Accounts", icon: <AccountIcon />, gap: true },
    { title: "Schedule ", icon: <ScheduleIcon /> },
    { title: "Search", icon: <SearchIcon /> },
    { title: "Analytics", icon: <AnalyticsIcon /> },
    { title: "Files ", icon: <FilesIcon />, gap: true },
    { title: "Settings", icon: <SettingsIcon /> },
  ];
  return (
    <div className={`${showMenu ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-cust-green relative`}>

      <ArrowCircleIcon showMenu={showMenu} setShowMenu={setShowMenu}
        classProps={`absolute cursor-pointer bg-cust-light text-cust-green`}
      />

      <div className="flex gap-x-4 items-center">
        <FireIcon classProps={`cursor-pointer duration-500 text-cust-light`} />

        <h1
          className={`text-cust-light origin-left font-medium text-xl duration-300 font-mono
          ${!showMenu && 'scale-0'}`}>
          Charlie
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <li key={index} className={`text-cust-light text-xl flex items-center 
          gap-x-2 cursor-pointer p-1.5 hover:bg-cust-light/25 hover:rounded-md
          ${menu.gap ? "mt-9" : "mt-2"}`}>
            {menu.icon}
            <span>{menu.title}</span>
          </li>
        ))}
      </ul>
      <div>

      </div>
    </div>
  );
};

export default SideMenu;