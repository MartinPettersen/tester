import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HiddenSidebar from "../components/sidebar/HiddenSidebar";
import SidebarLogo from "../components/sidebar/SidebarLogo";
import styles from "../styles/Home.module.css";
import data from "../data.json"
import NewBoard from "../components/board/NewBoard";
import NewTask from "../components/task/NewTask";

export default function Home() {
  const [darkToggle, setDarkToggle] = useState(true);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [currentBoard, setCurrentBoard] = useState(data.boards.length === 0 ? -1 : 0);
  const [newTask, setNewTask] = useState(false);
  const [newBoard, setNewBoard] = useState(false);




  return (
    <div className="absolute inset-0 ">
      <div className={`z-0 w-full  ${darkToggle && "dark"} `}>
        <Head>
          <title>Create Next App</title>
          <meta
            name="description"
            content="Frontend Mentor | Kanban task management web app"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./assets/favicon.png"
          />
        </Head>
        <div className="h-full flex flex-row">
          {sidebarToggle ? <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} darkToggle={darkToggle} setDarkToggle={setDarkToggle} setCurrentBoard={setCurrentBoard} newBoard={newBoard} setNewBoard={setNewBoard}/> : 
          <HiddenSidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
          }

          
          <div className=" h-[100vh]  md:ml-[-261px] lg:ml-[-300px] bg-[#E4EBFA] dark:bg-[#20212C]">
            <Navbar darkToggle={darkToggle} setDarkToggle={setDarkToggle} currentBoard={currentBoard} newTask={newTask} setNewTask={setNewTask} />
            <Container sidebarToggle={sidebarToggle} currentBoard={currentBoard}/>
            { newBoard ? 
        <div className="w-full h-full fixed inset-0 z-50 "> <NewBoard newBoard={newBoard} setNewBoard={setNewBoard} /></div>
        :
        <div></div>
      }{ newTask ? 
        <div className="w-full h-full fixed inset-0 z-50 "> <NewTask newTask={newTask} setNewTask={setNewTask} /></div>
        :
        <div></div>
      }
          </div>
        </div>
      </div>
    </div>
  );
}
