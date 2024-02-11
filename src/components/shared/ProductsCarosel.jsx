/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from '@/components/ui/Card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel'
import Image from 'next/image'

const ProductsCarosel = () => {
  return (
    <div className="flex justify-center">
      <Carousel className="w-[350px] lg:w-[400px] xl:w-[500px]">
        <CarouselContent className="aspect-square rounded-md">
          <CarouselItem key={1} className="">
            <Image
              height={500}
              width={500}
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
              alt="product"
            />
          </CarouselItem>
          <CarouselItem key={2}>
            <Image
              height={500}
              width={500}
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/3497065/pexels-photo-3497065.jpeg"
              alt="product"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  )
}

export default ProductsCarosel
