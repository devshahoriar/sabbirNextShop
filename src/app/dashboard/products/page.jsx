/* eslint-disable @next/next/no-img-element */

import ItemProductProducts from "@/components/shared/dashBoardComponents/ItemProductProducts"


const page = () => {
  return (
    <div className="m-2 md:m-10">
      <h1 className="text-2xl">All Products</h1>
      <div className="flex flex-col gap-4 mt-4">
        <ItemProductProducts/>
        <ItemProductProducts/>
        <ItemProductProducts/>
      </div>
    </div>
  )
}



export default page
