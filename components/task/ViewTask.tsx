import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "../../data.json";

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
  showTask: boolean;
  setShowTask: Function;
};

const ViewTask = ({ task, showTask, setShowTask }: Props) => {
  const [reload, setReload] = useState(false);
  const [dropToggle, setDropToggle] = useState(false);

  const statusList = ["Todo", "Doing", "Done", "Now", "Next", "Later"];

  const subtaskCounter = (subtasks: subtasks) => {
    let counter = 0;
    subtasks.map((task: task) =>
      task.isCompleted === true ? (counter += 1) : (counter += 0)
    );
    return counter;
  };

  useEffect(() => {
    console.log("something happens");
  }, [reload]);

  const handleClick = (newStatus: string) => {
    task.status = newStatus;
    setDropToggle(!dropToggle);
  };

  return (
    <div  className=" w-full h-full z-10 flex items-center justify-center backdrop-filter backdrop-brightness-50">
      <div onClick={() => setShowTask(!showTask)} className=" z-500 fixed w-full h-full">
      </div>
      <div onClick={() => console.log("task")} className="rounded-md bg-[#FFFFFF] z-501 fixed  dark:bg-[#2B2C37] w-[343px] h-[557px] ">
        <div className=" p-4 flex flex-col content-center gap-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-[#000112] dark:text-[#FFFFFF]">{task.title}</h1>

            <Image
              width={3.69}
              height={16}
              className=""
              src="/assets/icon-vertical-ellipsis.svg"
              alt="Logo"
            />
          </div>
          <p className="text-[#828FA3]">{task.description}</p>
          <p className="text-[#FFFFFF]">
            subtasks ({subtaskCounter(task.subtasks)} of {task.subtasks.length})
          </p>
          <div>
            {task.subtasks.map((subtask, i: number) => (
              <div key={i} onClick={() => setReload(!reload)}>
                <div className="flex flex-row bg-[#F4F7FD] dark:bg-[#20212C] p-2 m-2">
                  <input
                    className="accent-[#635FC7] text-green-400 m-1"
                    type="checkbox"
                    onChange={() =>
                      (task.subtasks[i].isCompleted = !subtask.isCompleted)
                    }
                    checked={subtask.isCompleted}
                    value=""
                  />
                  <p className="">{subtask.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[#FFFFFF]">Current status</p>
            <div className="border border-[#828FA3] border-opacity-25">
              {dropToggle ? (
                <>
                  {statusList.map((stat, i) => (
                    <div key={i} onClick={() => handleClick(stat)} className="flex flex-row">

                    <p
                      
                      className="text-[#F4F7FD] p-1"
                      >
                      {stat}
                    </p>
                    {i === 0 ?
                    <Image
                    className="object-contain"
                    width={8}
                    
                    height={4}
                    src={`/assets/icon-chevron-up.svg`}
                    alt=""
                  /> : <></>}
                      </div>
                  ))}
                </>
              ) : (
                <div onClick={() => setDropToggle(!dropToggle)} className="flex flex-row ">
                  <p
                    
                    className="text-[#F4F7FD] p-1"
                  >
                    {task.status}
                  </p>
                  <Image
                    className="object-contain"
                    width={8}
                    height={4}
                    src={`/assets/icon-chevron-down.svg`}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
