import React from 'react'
import data from "../../data.json"
import Task from '../task/Task';
import ColorCircle from './ColorCircle';
import ColumnDisplay from './ColumnDisplay';

type Props = {
    board: {
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
    }
}

const Board = ({board}: Props) => {
  return (
    <div className='p-3'>
        <ColumnDisplay name={board.name} length={board.tasks.length}/>
        <div className='flex flex-col justify-evenly'>
            {board.tasks.map((task, i) => 

                <Task key={i} task={task} />
            )}
        </div>
    </div>
  )
}

export default Board