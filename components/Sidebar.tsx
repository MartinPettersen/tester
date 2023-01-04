import React from "react";
import data from "../data.json"
import BoardContainer from "./sidebar/BoardContainer";
import DarkLightSwitch from "./sidebar/DarkLightSwitch";
import SidebarHidder from "./sidebar/SidebarHidder";
import SidebarLogo from "./sidebar/SidebarLogo";
type Props = {
  darkToggle: boolean;
  setDarkToggle: Function;
  sidebarToggle: boolean ;
  setSidebarToggle: Function;
  setCurrentBoard: Function;
  newBoard: boolean;
  setNewBoard: Function;
}

const Sidebar = ({sidebarToggle, setSidebarToggle, darkToggle, setDarkToggle, setCurrentBoard, newBoard, setNewBoard}: Props) => {
  return (
    <div className="bg-[#ffffff] dark:bg-[#2B2C37]  sticky hidden md:block w-[261px] lg:w-[300px] sidebarToggle:h-[64px] h-[screen] z-19 border border-[#E4EBFA] dark:border-[#3E3F4E] text-[#828FA3]">
      <div className="h-[80%]">
        <SidebarLogo />
        <BoardContainer setCurrentBoard={setCurrentBoard} newBoard={newBoard} setNewBoard={setNewBoard}/>
      </div>
      <div className=" h-[20%] flex flex-col pl-6">
        <DarkLightSwitch darkToggle={darkToggle} setDarkToggle={setDarkToggle}/>
        <SidebarHidder  sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        </div>
    </div>
  );
};

export default Sidebar;
