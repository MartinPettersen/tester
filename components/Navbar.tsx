import Image from "next/image";
import React from "react";
import DropdownMenu from "./navbar/DropdownMenu";
import PLusButton from "./navbar/PLusButton";

type Props = {
  darkToggle: boolean;
  setDarkToggle: Function;
  currentBoard: number;
  newTask: boolean;
  setNewTask: Function;
};

const Navbar = ({ darkToggle, setDarkToggle, currentBoard, newTask, setNewTask }: Props) => {
  return (
    <div className=" h-[64px] md:h-[81px] lg:h-[97px] md:pl-[261px] lg:pl-[300px] top-0 flex  bg-[#ffffff]  dark:bg-[#2B2C37] border border-[#E4EBFA] dark:border-[#3E3F4E] items-center  z-20">
      <div className="flex flex-row items-start justify-evenly ml-4 space-x-4">
        <Image
          width={24}
          height={25}
          src="/assets/logo-mobile.svg"
          className="md:hidden "
          alt="Logo"
        />
        <DropdownMenu currentBoard={currentBoard} />
      </div>
      <div className="flex flex-row justify-items-end space-x-2 ml-16">
        <PLusButton newTask={newTask} setNewTask={setNewTask}/>

        <Image
          width={3.69}
          height={16}
          src="/assets/icon-vertical-ellipsis.svg"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
