import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import logo from '@/asset/logo.png'

const Header = ({show}) => {
  return(<header className="md:mx-14 mx-3">
    <div className="flex justify-between items-center py-3">
      <div className="">
        <button className="text-lg md:invisible" onClick={show}>
        <FaBars />
        </button>
      </div>
      <div>
      <Image className='h-10 w-10 visible md:invisible' src={logo} alt='logo' />
      </div>
      <div>
        <span className="uppercase font-bold rounded-md border p-1">
          sa
        </span>
      </div>
    </div>
  </header>);
};

export default Header;