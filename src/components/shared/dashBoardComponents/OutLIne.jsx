'use client'
import { useEffect, useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import dynamic from 'next/dynamic'

const useMid = dynamic(()=> import("@uidotdev/usehooks").then(m => m.useMediaQuery))

const OutLIne = () => {
  const isMediumDevice = useMid(
    'only screen and (min-width : 769px)'
    )
    const [showMobileSidebar, setShowMobileSidebar] = useState(false)
  const _hendelShow = () => setShowMobileSidebar((r) => !r)
  useEffect(()=>{
    if(isMediumDevice) setShowMobileSidebar(true)
  },[isMediumDevice])
  return (
    <>
      <Header show={_hendelShow} />
      {showMobileSidebar && <SideBar show={_hendelShow} />}
    </>
  )
}

export default OutLIne
