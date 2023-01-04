import React from 'react'

type Props = {
    name: string;
}

const ColorCircle = ({name}: Props) => {

    const color_guide: { [key: string]: string } = {
        "Todo": "bg-[#49C4E5]",
        "Doing" : "bg-[#8471F2]",
        "Done": "bg-[#67E2AE]",
        "Now" : "bg-[#EA5555]",
        "Next" : "bg-[#FF9898]",
        "Later" : "bg-[#E4EBFA]",

    }

  return (
    <div className={`${color_guide[name]} w-4 h-4 rounded-full flex items-center justify-center`}></div>
  )
}

export default ColorCircle