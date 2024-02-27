import connectDB from "@/db/connectDB"
import Category from "@/models/category_model"
import Product from "@/models/products_model"
import { NextResponse } from "next/server"


const GET =async (r) => {
  // const body = await r.json()
  // await connectDB()
  // await Category.deleteMany()
  return NextResponse.json({"sddf":"sdf"})
}

export {GET}