import React, { useState } from "react";
import Image from "next/image";
import data from "../../data.json";

type Props = {
  currentBoard: number;
};

const DropdownMenu = ({currentBoard}: Props) => {
  const [dropToggle, setDropToggle] = useState(false);

  return (
    <div className="flex flex-row items-center justify-evenly ">
       <p className="dark:text-[#ffffff]  text-[#000112] pr-1">
          {currentBoard != -1  ? data.boards[currentBoard].name : "No Board Selected"}
        </p>
      <div className={`${dropToggle ? "" : "hidden" } md:block`}>
       
      </div>
      {/*
      <div className={`${dropToggle ? "hidden" : ""} md:hidden`}>
        <ul>
          {data.boards.map((board: { name: string }) => (
            <li className="">
              <p className="">{board.name}</p>
            </li>
          ))}
        </ul>
      </div>
          */}
      <Image
        className="md:hidden"
        onClick={() => setDropToggle(!dropToggle)}
        width={8}
        height={4}
        src={`/assets/icon-chevron-${dropToggle ? "down" : "up"}.svg`}
        alt="Logo"
      />
    </div>
  );
};

export default DropdownMenu;
