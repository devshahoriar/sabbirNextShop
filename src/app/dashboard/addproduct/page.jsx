import AddProductForm from '@/components/shared/dashBoardComponents/AddProductForm'

const page = () => {
  return (
    <div className="m-2 md:m-10">
      <h1 className="text-2xl">Add Product</h1>
      <AddProductForm />
    </div>
  )
}

export const metadata = {
  title: 'Add Product | Admin',
}

export default page
