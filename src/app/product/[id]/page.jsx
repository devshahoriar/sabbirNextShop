import Header from "@/components/shared/Header";
import { Card, CardContent } from "@/components/ui/Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel";

export default function Page({params}) {

  return <main>
    <Header/>
    <div>
   
    <Carousel className="w-full sm:w-[200px]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 invisible sm:visible" />
      <CarouselNext className="right-2 invisible sm:visible"  />
    </Carousel>
  
    </div>
  </main>
}