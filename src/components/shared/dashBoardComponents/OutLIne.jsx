'use client'
import { useEffect, useState } from 'react'
import Header from './Header'
import { useMediaQuery } from 'usehooks-ts'
import dynamic from 'next/dynamic'

const DynamicSidebar = dynamic(()=> import('./SideBar'),{ssr:false})

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
      
      {showMobileSidebar && <DynamicSidebar  show={_hendelShow} />}
    </>
  )
}

export default OutLIne
