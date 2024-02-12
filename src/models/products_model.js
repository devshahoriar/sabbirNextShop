import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: String,
    descountPrice: String,
    description: String,
    quentity: Number,
    mdx: String,
  },
  {
    ttimestamps: true,
  }
)

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
