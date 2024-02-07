'use client'

import Image from 'next/image'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import logo from '@/asset/logo.png'
import { useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const SideBar = ({ show }) => {
  const [colops, setColaps] = useState(false)
  return (
    <div className="absolute top-0 left-0 bg-white h-screen bottom-0 ">
      <Sidebar width="300px" collapsed={colops} className="relative h-full">
        <div className="flex justify-center mt-5">
          <Image className="h-20 w-20" src={logo} alt="logo" />
        </div>
        <button
          className="absolute text-main text-xl top-5 right-3 visible md:hidden"
          onClick={show}
        >
          <IoMdCloseCircleOutline />
        </button>
        <Menu className="mt-5">
          <MenuItem> Dashboard </MenuItem>
          <MenuItem> Products </MenuItem>
          <MenuItem> Add Product </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar
