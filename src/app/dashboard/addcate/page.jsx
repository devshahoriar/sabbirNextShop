import AddCategory from '@/components/shared/dashBoardComponents/AddCategory'
import DadcboardContainer from '@/components/shared/dashBoardComponents/DadcboardContainer'
import connectDB from '@/db/connectDB'
import Category from '@/models/category_model'
import axios from 'axios'

const getData = async () => {
  await connectDB()
  const cat = await Category.find()
  return JSON.parse(JSON.stringify(cat))
}

const page = async () => {
  const data = await getData()

  return (
    <DadcboardContainer>
      <AddCategory category={data} />
    </DadcboardContainer>
  )
}

export default page
