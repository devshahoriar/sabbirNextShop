'use client'
import Image from 'next/image'
import { TbCurrencyTaka } from 'react-icons/tb'
import { TiShoppingCart } from 'react-icons/ti'
import { IoMdStar } from 'react-icons/io'
import { IoMdStarOutline } from 'react-icons/io'
import pImg from '@/asset/p1.jpg'
import { Button } from '../ui/Button'
import Link from 'next/link'

const ProductCard = () => {
  const _hendelClick = (e) => {
    e.preventDefault();
   console.log("this is from buy link in product card");
  }
  return (
    <Link href="/product/sss" className="p-2 border m-1 rounded-lg">
      <div className=''>
        <Image src={pImg} alt="product" />
      </div>
      <div className="mt-3">
        <h2 className="line-clamp-2 font-bold text-lg leading-5 hover:underline">
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


        <Button onClick={_hendelClick} size="sm" className="w-full text-lg text-white hover:-hue-rotate-30" >
          <TiShoppingCart />
        </Button>
   

      </div>
    </Link>
  )
}

export default ProductCard
