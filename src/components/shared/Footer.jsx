import Image from 'next/image'
import Link from 'next/link'
import logo from '@/asset/logo.png'

const Footer = () => {
  return (
    <footer className="w-full bg-main bg-opacity-60 min-h-16">
      <SiteLogo/>
      <AllRightReserved/>
    </footer>
  )
}

const SiteLogo = () => {
  return (
    <div className="flex  items-center justify-center md:py-5">
      <Link className="h-32 aspect-square relative" href="#">
        <Image src={logo} alt='logo' fill={true} />
      </Link>
    </div>
  )
}

const AllRightReserved = () => {
  return (
    <p className="text-sm bg-slate-800 text-center text-white py-2">
      © 2024 Acme Inc. All rights reserved.
    </p>
  )
}


export default Footer
