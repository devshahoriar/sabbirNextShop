/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from '@/components/ui/Card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel'

const ProductsCarosel = () => {
  return (
    <div className="flex justify-center">
      <Carousel className="w-[350px] lg:w-[400px] xl:w-[500px]">
        <CarouselContent className="aspect-square rounded-md">
          <CarouselItem key={1}>
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
              alt="product"
            />
          </CarouselItem>
          <CarouselItem key={2}>
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=1"
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
