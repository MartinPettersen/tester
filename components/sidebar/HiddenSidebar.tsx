import React from 'react'
import SidebarLogo from './SidebarLogo'
import Image from "next/image";

type Props = {  
    sidebarToggle: boolean ;
    setSidebarToggle: Function;
  }
const HiddenSidebar = ({setSidebarToggle, sidebarToggle}: Props) => {
  return (
    <div>
        <div className="w-[261px] lg:w-[300px]  h-[64px] md:h-[81px] lg:h-[97px] bg-[#ffffff] dark:bg-[#2B2C37]  sticky hidden md:block  z-19 border border-[#E4EBFA] dark:border-[#3E3F4E] text-[#828FA3]"><SidebarLogo /></div>
        <div className="h-screen flex items-end">
        <div className='h-10 mb-40'>

            <div onClick={() => setSidebarToggle(!sidebarToggle)} className='p-5  rounded-r-full  items-center bg-[#635FC7] z-19 sticky'>

            <Image
            width={16}
            height={11}
            src="/assets/icon-show-sidebar.svg"
            className=""
            alt="Logo"
          />
            </div>
        </div>
        </div>
    </div>
  )
}

export default HiddenSidebar