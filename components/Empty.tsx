import React from 'react'

type Props = {}

const Empty = (props: Props) => {
  return (
    <div className='w-full h-full text-center flex flex-col justify-center items-center text-[#828FA3]'>
        <p>
        The board is empty. Create a new column to get started.
        </p>
        <button className='p-2 m-5 bg-[#635FC7] text-[#ffffff] rounded-3xl flex items-center justify-center'>+Add new Column</button>
    </div>
  )
}

export default Empty