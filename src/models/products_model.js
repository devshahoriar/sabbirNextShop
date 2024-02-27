import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Need product name.'] },
    price: { type: String, required: [true, 'Need product price.'] },
    primary_image: {
      type: String,
      required: [true, 'Need product primary image.'],
    },
    other_Images: {
      type: String,
      required: [true, 'Need product other image.'],
    },
    descountPrice: String,
    description: {
      type: String,
      required: [true, 'Need product description.'],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Product mast have category'],
    },
    quentity: String,
    size: String,
    mdx: { type: String, required: [true, 'Need product MDX.'] },
  },
  {
    timestamps: true,
  }
)

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
