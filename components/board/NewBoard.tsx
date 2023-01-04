import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "../../data.json";

type Props = {
  newBoard: boolean;
  setNewBoard: Function;
};

type Columns = {
  name: string;
  tasks: {
      title: string;
      description: string;
      status: string;
      subtasks: {
          title: string;
          isCompleted: boolean;
      }[];
  }[];
}[]

const NewBoard = ({ newBoard, setNewBoard }: Props) => {
  const [columns, setColumns] = useState([{name:"e.g. Learn React", tasks: [{
    title: "title",
    description: "description",
    status: "status",
    subtasks: [{
      title: "title",
      isCompleted: false,
    }]
  }]}]);

  const [boardName, setBoardName] = useState("e.g. Web Design");

  const [refresh, setRefresh] = useState(false);

  const addColumn = () => {
    setColumns([...columns, {name:"e.g. Learn React", tasks: [{
    title: "title",
    description: "description",
    status: "status",
    subtasks: [{
      title: "title",
      isCompleted: false,
    }]
  }]}]);
    setRefresh(!refresh);
  };

  const editColumn = (event: any, i: number) => {
    const tempCol = columns;
    tempCol[i] = event.target.value;
    setColumns([...tempCol]);
    setRefresh(!refresh);
  };
  const deleteCol = (i: number) => {
    const tempCol = columns;
    tempCol.splice(i, 1);
    setColumns([...tempCol]);
    setRefresh(!refresh);
  };
  const EditBoardName = (event: any) => {
    setBoardName(event.target.value);
    setRefresh(!refresh);
  };
  useEffect(() => {
    console.log("test");
  }, [refresh]);

  const addBoard = (newBoardName: string, col: Columns) => {

   const newBoard = { name: newBoardName, columns: col }

     data.boards.push({"name" : newBoardName, "columns" : col });
    
    //console.log(data.boards);
    console.log("--------------------------------")
    console.log(newBoard);
    setRefresh(!refresh);
  };

  return (
    <div className=" w-full h-full z-10 flex items-center justify-center backdrop-filter backdrop-brightness-50">
      <div
        onClick={() => setNewBoard(!newBoard)}
        className=" z-500 fixed w-full h-full"
      ></div>
      <div
        onClick={() => console.log("board")}
        className="rounded-md bg-[#FFFFFF] z-501 fixed  dark:bg-[#2B2C37] w-[480px]  "
      >
        <div className=" p-8 flex flex-col content-center gap-4">
          <h1 className="text-[#000112] dark:text-[#FFFFFF]">Add New Board</h1>

          <div className="">
            <p className="text-[#FFFFFF]">Board Name</p>
            <input
              className="border border-[#828FA3] border-opacity-25 text-[#828FA3] p-2 bg-[#FFFFFF] z-501 fixed  dark:bg-[#2B2C37]"
              value={boardName}
              type="text"
              name="name"
              onChange={() => EditBoardName(event)}
            />
          </div>

          <div className="pt-2">
            <p className="pt-7 text-[#FFFFFF]">Board Columns</p>
            <div>
              {columns.map((col: any, i: number) => (
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
                      onChange={() => editColumn(event, i)}
                    />
                  </div>
                  <div onClick={() => deleteCol(i)} className="pl-4">
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
            onClick={() => addColumn()}
            className="p-2 rounded-full bg-white text-[#635FC7] flex flex-center justify-evenly "
          >
            +Add New Column
          </div>
          <div
            onClick={() => addBoard(boardName, columns)}
            className="p-2 rounded-full bg-[#635FC7] text-[#FFFFFF] flex flex-center justify-evenly"
          >
            Create New Board
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBoard;
