'use client'

import Image from 'next/image'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import logo from '@/asset/logo.png'
import { useEffect, useRef, useState } from 'react'
import { IoMdClose, IoMdCloseCircleOutline } from 'react-icons/io'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { useMediaQuery } from 'usehooks-ts'

const SideBar = ({ show, className }) => {
  const [colops, setColaps] = useState(false)
  const matches = useMediaQuery('(max-width: 768px)')

  const SideLink = ({ children, to }) => {
    const path = usePathname()
    return <Link prefetch={false} onClick={matches ? show : null} className={`pl-5 block py-3 my-1 ${path === to ? "bg-main text-white" : ""}`} href={to}>{children}</Link>
  }

  return (
    <div className="absolute top-0 left-0 bg-white h-screen bottom-0 z-10 shadow-lg md:shadow-none">
      <Sidebar width="300px" collapsed={colops} className="relative h-full">
        <div className="flex justify-center mt-5">
          <Image className="h-20 w-20" src={logo} alt="logo" />
        </div>
        <Button
          size="icon"
          className="absolute text-white text-xl top-5 right-3 visible md:hidden"
          onClick={show}
        >
          <IoMdClose />
        </Button>
        <Menu className="mt-5">
          <MenuItem component={<SideLink to="/dashboard" />}>
            Dashboard
          </MenuItem>
          <MenuItem component={<SideLink to="/dashboard/products" />}>
            Products
          </MenuItem>
          <MenuItem component={<SideLink to="/dashboard/addproduct" />}>
            Add Prouduct
          </MenuItem>
          {/* <SubMenu label="Charts">
            <MenuItem component={<SideLink to="/dashboard/addproduct" />}>
              Add Prouduct
            </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu> */}
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar
