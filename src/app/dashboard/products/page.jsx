const page = () => {
  return (
    <div className="m-2 md:m-10">
      <h1 className="text-2xl">All Products</h1>
      <div>
        <ProductItem />
      </div>
    </div>
  )
}

const ProductItem = () => {
  return <h1>Item products</h1>
}

export default page
