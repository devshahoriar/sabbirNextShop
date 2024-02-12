import connectDB from "@/db/connectDB"
import Product from "@/models/products_model"


const GET =async (r) => {
  await connectDB()
  const products = new Product({
    name: "this a products",
    price: "100"
  })
  try {
    
    await products.save()
  } catch (error) {
    console.log(error);
  }
  return Response.json({messahe : products})
}

export {GET}