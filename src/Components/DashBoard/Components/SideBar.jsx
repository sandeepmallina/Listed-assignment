import React,{useState} from "react";

import "./SideBar.css";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import { HiOutlineUserCircle } from "react-icons/hi";
import { VscSettingsGear } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
export default function SideBar() {
  const [selectedItem, setSelectedItem] = useState(null);
    const history=useNavigate();
  const Sidebardata = [
    {
      title: "Dashboard",
      icon: <AiOutlinePieChart />,
      link: "/dashboard"
    },
    {
      title: "Transactions",
      icon: <MdOutlineDiscount />,
      link: "/transactions"
    },
    {
      title: "Schedules",
      icon: <TbCalendarTime />,
      link: "/Schedules"
    },
    {
      title: "Users",
      icon: <HiOutlineUserCircle />,
      link: "/Users"
    },
    {
      title: "Settings",
      icon: <VscSettingsGear />,
      link: "/Settings"
    }
  ];
  return (
    <div className="sidebar__container">
      <h1 className="sidebar__title">Board.</h1>
      <div className="sidebar__options">
        {Sidebardata.map((value, key) => {
          return (
            <li key={key} className={`list__items ${selectedItem === value.title ? 'selected' : ''}`}onClick={()=>{history(value.link);setSelectedItem(value.title)}}>
              <div className="">{value.icon}</div>
              <div className="">{value.title}</div>
            </li>
          );
        })}
      </div>
      <div className="side__footer">
        <h1>Help</h1>
        <h1>Conatact Us</h1>
      </div>
    </div>
  );
}
