import React, { useState } from "react";
import data from "../../data.json";

type Props = {
  setCurrentBoard: Function;
  newBoard: boolean;
  setNewBoard: Function;
};

const BoardContainer = ({setCurrentBoard, newBoard, setNewBoard}: Props) => {



  return (
    <div className="flex flex-col pt-6 justify-evenly mt-4 mr-4">
      <div className="ml-6">ALL BOARDS ({data.boards.length})</div>
      <div>
        <ul>
          {data.boards.map((board: { name: string }, i: number) => (
            <li key={i} className="">
              <div className="flex flex-row p-2 active:bg-[#635FC7] active:text-[#ffffff] rounded-r-full">
                <svg
                  className="ml-4 mt-1 h-4 w-4"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                    fill="#828FA3"
                  />
                </svg>
                <p className="ml-2" onClick={() => setCurrentBoard(i)}>{board.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-6 pt-2 flex flex-row text-[#635FC7]">
        <svg className="mt-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
            fill="#635FC7"
          />
        </svg>
        <p  onClick={() => setNewBoard(!newBoard)} className="ml-2">+Create New Board</p>
      </div>
    </div>
  );
};

export default BoardContainer;
