import React, { useEffect, useState } from "react";
import ViewTask from "./ViewTask";

type task = {
  title: string;
  isCompleted: boolean;
};

type subtasks = task[];

type Props = {
  task: {
    title: string;
    description: string;
    status: string;
    subtasks: {
      title: string;
      isCompleted: boolean;
    }[];
  };
};

const Task = ({ task }: Props) => {
  const [showTask, setShowTask] = useState(false);
  
  const subtaskCounter = (subtasks: subtasks) => {
    let counter = 0;
    subtasks.map((task: task) =>
      task.isCompleted === true ? (counter += 1) : (counter += 0)
    );
    return counter;
  };

  return (
    <div>
    { showTask ? 
        <div className="w-full h-full fixed inset-0 z-50"><ViewTask task={task} setShowTask={setShowTask} showTask={showTask}/></div>
        :
        <div></div>
      }
    <div onClick={() => setShowTask(!showTask)} className="bg-[#FFFFFF] dark:bg-[#2B2C37]  rounded-lg w-[280px] h-[107px] flex items-center mt-5">
      
      <div  className="pl-3">
        <h2 className="text-[#000112] dark:text-[#FFFFFF]">{task.title}</h2>
        <p className="text-[#828FA3]">
          {subtaskCounter(task.subtasks)} of {task.subtasks.length} subtasks
        </p>
      </div>
    </div>
    </div>

  );
};

export default Task;
