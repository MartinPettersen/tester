import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "../../data.json";
type Props = {
  newTask: boolean;
  setNewTask: Function;
}

const NewTask = ({newTask, setNewTask }: Props) => {
  const [refresh, setRefresh] = useState(false);
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState("Description");
  const [dropToggle, setDropToggle] = useState(false);
  const [status, setStatus] = useState("Todo");

  const [subTasks, setSubtasks] = useState(["1", "2"]);
  const statusList = ["Todo", "Doing", "Done", "Now", "Next", "Later"];


  const editTitle = (event: any) => {
    console.log(event.target.value);
  }
  const editDescription = (event: any) => {
    console.log(event.target.value);
  }
  const editSubTask = (event: any, i: number) => {
    console.log(event.target.value);
  }
  const deleteSubTask = (event: any) => {
    console.log(event.target.value);
  }
  const addSubTask = () => {
    console.log("event.target.value");
  }
  const addTask = (ty: any) => {
    console.log(ty);
  }

  const handleClick = (newStatus: string) => {
    setStatus(newStatus);
    setDropToggle(!dropToggle);
  };


  return (
    <div className=" w-full h-full z-10 flex items-center justify-center backdrop-filter backdrop-brightness-50">
      <div
        onClick={() => setNewTask(!newTask)}
        className=" z-500 fixed w-full h-full"
      ></div>
      <div
        onClick={() => console.log("board")}
        className="rounded-md bg-[#FFFFFF] z-501 fixed  dark:bg-[#2B2C37] w-[480px]  "
      >
        <div className=" p-8 flex flex-col content-center gap-4">
          <h1 className="text-[#000112] dark:text-[#FFFFFF]">Add New Task</h1>

          <div className="flex flex-col">

         
          <div className=" pb-10">
            <p className="text-[#FFFFFF]">Title</p>
            <input
              className="border w-[27%] border-[#828FA3] border-opacity-25 text-[#828FA3] p-2 bg-[#FFFFFF] z-501 fixed  dark:bg-[#2B2C37]"
              value={title}
              type="text"
              name="name"
              onChange={() => editTitle(event)}
            />
          </div>
          <div className=" pt-2 pb-6">
            <p className="text-[#FFFFFF] ">Description</p>
            <textarea
              className="border w-[27%] border-[#828FA3] border-opacity-25 text-[#828FA3] p-2 bg-[#FFFFFF] z-501 fixed  dark:bg-[#2B2C37]"
              value={title}
              name="name"
              onChange={() => editDescription(event)}
            />
          </div>

          </div>
          <div className="pt-2">
            <p className="pt-7 text-[#FFFFFF]">SubTasks</p>
            <div>
              {subTasks.map((col: any, i: number) => (
                <div
                  key={i}
                  className="flex flex-row items-center justify-between  "
                >
                  <div className="border border-[#828FA3] border-opacity-25 text-[#828FA3] align-middle m-auto h-full p-4 pt-5 pb-6 w-full flex items-center ">
                    <input
                      className="bg-[#FFFFFF] z-501 fixed  dark:bg-[#2B2C37]  "
                      value={col.name}
                      type="text"
                      name="name"
                      onChange={() => editSubTask(event, i)}
                    />
                  </div>
                  <div onClick={() => deleteSubTask(i)} className="pl-4">
                    <Image
                      className="object-contain "
                      width={14.85}
                      height={14.85}
                      src={`/assets/icon-cross.svg`}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => addSubTask()}
            className="p-2 rounded-full bg-white text-[#635FC7] flex flex-center justify-evenly "
          >
            +Add New Subtask
          </div>

          <div>
            <p className="text-[#FFFFFF]">Status</p>
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
                    {status}
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

          <div
            onClick={() => addTask("boardName, columns")}
            className="p-2 rounded-full bg-[#635FC7] text-[#FFFFFF] flex flex-center justify-evenly"
          >
            Create Task
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTask