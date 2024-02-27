import connectDB from '@/db/connectDB'
import Product from '@/models/products_model'
import Category from '@/models/category_model'
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

const POST = async (r) => {
  try {
    await connectDB()
    const { title } = await r.json()
    const cat = new Category({ title: title })
    await cat.save()
    revalidatePath("/dashboard/addcate")
    return NextResponse.json({ success: true, data: cat })
  } catch (error) {
    return NextResponse.json({ success: false, data: 'something error with db connect your developer.' })
  }
}

const GET = async (r) => {
  try {
    await connectDB()
    const cat =await Category.find()
    console.log(cat);
    return NextResponse.json({ success: true, data: cat })
  } catch (error) {
    return NextResponse.json({ success: false, data: 'something error with db connect your developer.' })
  }
}

export { POST }
