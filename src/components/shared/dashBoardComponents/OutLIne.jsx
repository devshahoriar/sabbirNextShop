'use client'
import { useEffect, useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'usehooks-ts'

const OutLIne = () => {
  const matches = useMediaQuery('(max-width: 768px)')
  const [showMobileSidebar, setShowMobileSidebar] = useState(true)
  const _hendelShow = () => setShowMobileSidebar((r) => !r)
  useEffect(()=>{
    setShowMobileSidebar(!matches)
  },[matches])
  return (
    <>
      <Header show={_hendelShow} />
      {showMobileSidebar && <SideBar  show={_hendelShow} />}
    </>
  )
}

export default OutLIne
