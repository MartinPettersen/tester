import React from 'react'
import Image from "next/image";

type Props = {  
  sidebarToggle: boolean ;
  setSidebarToggle: Function;
}

const SidebarHidder = ({setSidebarToggle, sidebarToggle}: Props) => {
  return (
    <div onClick={() => setSidebarToggle(!sidebarToggle)} className="flex flex-row ">
        <Image
            
            width={24}
            height={24}
            src="/assets/icon-hide-sidebar.svg"
            className="ml-2 mr-2"
            alt="Logo"
          />
        <p>Hide sidebar</p>
        </div>
  )
}

export default SidebarHidder