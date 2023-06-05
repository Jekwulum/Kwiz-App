import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AccountIcon, AnalyticsIcon, ArrowCircleIcon, DashboardIcon, FilesIcon, AppIcon,
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
    <div className={`${showMenu ? "w-48 z-50" : "w-12"} duration-300 p-1 pt-8 bg-light-bg dark:bg-cust-dark-nav relative`}>

      <ArrowCircleIcon showMenu={showMenu} setShowMenu={setShowMenu}
        classProps={`absolute cursor-pointer bg-cust-light text-light-bg dark:bg-cust-dark-body dark:text-cust-light`}
      />

      <div className="flex gap-x-4 items-center">
        <AppIcon classProps={`cursor-pointer duration-500 text-cust-light ml-1 ${showMenu && "rotate-[360deg]"}`} />

        <h1
          className={`text-cust-light origin-left font-medium text-xl duration-300 font-mono
          ${!showMenu && 'scale-0'}`}>
          Kwiz
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <NavLink to={`/${menu.title.toLowerCase()}`} key={index}>
            <li key={index} className={`text-cust-light text-xl flex items-center 
            gap-x-4 cursor-pointer p-1.5 hover:bg-cust-light/25 hover:rounded-md
            ${menu.gap ? "mt-9" : "mt-2"}`}>
              {menu.icon}
              <span className={`duration-300 text-sm ${!showMenu && 'scale-0'}`}>{menu.title}</span>
            </li>
          </NavLink>
        ))}
      </ul>
      <div>

      </div>
    </div>
  );
};

export default SideMenu;