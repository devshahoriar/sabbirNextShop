import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import ProductDetaile from '@/components/shared/ProductDetaile'
import ProductsCarosel from '@/components/shared/ProductsCarosel'
import { Button } from '@/components/ui/Button'
import { Separator } from '@/components/ui/Separator'
import { IoMdStar, IoMdStarOutline } from 'react-icons/io'
import { TbCurrencyTaka } from 'react-icons/tb'

export default function Page({ params }) {
  return (
    <main>
      <Header />

      <section className="container lg:px-10 mb-10">
        <div className="lg:flex items-start ">
          <ProductsCarosel />

          <div className="px-4 mt-5 lg:ml-10 lg:mt-10">
            <h2 className="text-2xl line-clamp-2 lg:text-3xl font-bold">
              This is products name
            </h2>
            <p className="flex items-center my-1 lg:text-xl lg:mt-5">
              <span className="flex items-center opacity-45 line-through">
                <TbCurrencyTaka />
                1000
              </span>
              <span className="flex items-center text-main font-bold">
                <TbCurrencyTaka />
                800
              </span>
            </p>
            <p className=" text-sm bg-main w-fit px-3 font-semibold text-white bg-opacity-60 rounded-lg my-1 lg:text-base lg:my-3">
              1kg
            </p>
            <div className="flex text-main items-center lg:text-xl">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarOutline />
              <span>(4.89)</span>
            </div>
            <div className="flex gap-3 opacity-60">
              <p>20 review</p>
              <p>20 reating</p>
            </div>
            <Button className="my-3 lg:text-xl !text-white">Buy Now</Button>
          </div>
        </div>
        <div className="mt-5 px-4">
          <h3 className="text-2 mb-2 text-lg font-bold">
            Products Description
          </h3>
          <Separator className="" />
          <ProductDetaile />
        </div>
      </section>
      <Footer />
    </main>
  )
}
