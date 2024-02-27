import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
)

const Category =
  mongoose.models.Category || mongoose.model('Category', CategorySchema)

export default Category
