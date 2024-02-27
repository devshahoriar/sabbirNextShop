import AddProductForm from '@/components/shared/dashBoardComponents/AddProductForm'
import connectDB from '@/db/connectDB'
import Category from '@/models/category_model'

const getCategory = async () => {
  await connectDB()
  const cat = await Category.find()
  return JSON.parse(JSON.stringify(cat))
}

const page = async () => {
  const categories =  await getCategory()
  return (
    <div className="m-2 md:m-10">
      <h1 className="text-2xl">Add Product</h1>
      <AddProductForm categories={categories} />
    </div>
  )
}

export const metadata = {
  title: 'Add Product | Admin',
}

export default page
