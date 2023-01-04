import React from 'react'
import Image from "next/image";

type Props = {}

const SidebarLogo = (props: Props) => {
  return (
    <div className="h-[64px] w-[261px] lg:w-[300px] flex ml-[-28px] items-center justify-evenly z-20">
          <Image
            width={152.53}
            height={25.22}
            src="/assets/logo-dark.svg"
            className="dark:hidden"
            alt="Logo"
          />
          <Image
            width={152.53}
            height={25.22}
            src="/assets/logo-light.svg"
            className="hidden dark:block"
            alt="Logo"
          />
        </div>
  )
}

export default SidebarLogo