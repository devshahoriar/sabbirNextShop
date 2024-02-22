import Image from 'next/image'
import { RiMenu4Line } from 'react-icons/ri'
import { IoSearch } from 'react-icons/io5'
import logo from '@/asset/logo.png'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="container flex justify-between items-center py-2">
      <div className="md:hidden">
        <RiMenu4Line />
      </div>
      <Link href="/">
      
      <div className="h-20 aspect-square relative">
        <Image
          src={logo}
          alt="site logo"
          fill={true}
          className="object-cover"
          />
      </div>
          </Link>
      <div className=' gap-2 hidden md:flex'>
        <Input placeholder="Search.."  />
        <Button className="bg-transparent border-black !text-[#666]">Search</Button>
      </div>
      <div className="md:hidden">
        <IoSearch />
      </div>
    </header>
  )
}

export default Header
