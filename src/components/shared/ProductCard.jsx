import Image from 'next/image'
import { TbCurrencyTaka } from 'react-icons/tb'
import { TiShoppingCart } from 'react-icons/ti'
import { IoMdStar } from 'react-icons/io'
import { IoMdStarOutline } from 'react-icons/io'
import pImg from '@/asset/p1.jpg'
import { Button } from '../ui/Button'

const ProductCard = () => {
  return (
    <div className="p-2 border m-1 rounded-lg">
      <div className=''>
        <Image src={pImg} alt="product" />
      </div>
      <div className="mt-3">
        <h2 className="line-clamp-2 font-bold text-lg leading-5">
          This is products name
        </h2>
        <p className=" text-sm bg-main w-fit px-3 font-semibold text-white bg-opacity-60 rounded-lg my-1">
          1kg
        </p>
        <div className='flex text-main text-sm'>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStarOutline />
        </div>
        <p className="flex items-center my-1">
          <span className="flex items-center opacity-45 line-through">
            <TbCurrencyTaka />
            1000
          </span>
          <span className="flex items-center text-main font-bold">
            <TbCurrencyTaka />
            800
          </span>
        </p>
        <Button size="sm" className="w-full text-white text-lg" >
          <TiShoppingCart />
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
