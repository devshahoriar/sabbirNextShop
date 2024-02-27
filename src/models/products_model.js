import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: String,
    primary_image: String,
    other_Images: String,
    descountPrice: String,
    description: String,
    quentity: Number,
    size: String,
    mdx: String,
  },
  {
    timestamps: true,
  }
)

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
