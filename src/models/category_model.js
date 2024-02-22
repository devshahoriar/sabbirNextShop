import mongoose from 'mongoose'

const category_schema = mongoose.Schema({
  title: String,
  description: String,
})

const Category =
  mongoose.models.Category || mongoose.Schema('Category', category_schema)
  
export default Category
