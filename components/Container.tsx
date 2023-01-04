import React from "react";
import Empty from "./Empty";
import TaskManagment from "./TaskManagment";

type Props = {
  sidebarToggle: boolean;
  currentBoard: number;
};
const Container = ({ sidebarToggle, currentBoard }: Props) => {
  return (
    <div
      className={`w-screen ${
        sidebarToggle ? "md:pl-[261px] lg:pl-[300px]" : ""
      }  h-[90vh] lg:h-[86vh] `}
    >
      { currentBoard === -1 ?
        <Empty />
        :
      <TaskManagment currentBoard={currentBoard}/>
      }
    </div>
  );
};

export default Container;
