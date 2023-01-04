import React from "react";
import data from "../data.json";
import Board from "./board/Board";

type Props = {
  currentBoard: number;
};

const TaskManagment = ({ currentBoard }: Props) => {
  return (
    <div className="w-full h-full flex flex-col   text-[#828FA3] overflow-scroll">
      <div className="flex  flex-row p-5">
        {data.boards[currentBoard].columns.map((col, i) => 
        <Board key={i} board={col}/>    
            )}

      </div>
    </div>
  );
};

export default TaskManagment;
