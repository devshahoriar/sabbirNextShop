import mongoose from 'mongoose'

const imageSchema = mongoose.Schema(
  {
    cludanary_id: String,
  },
  {
    timestamps: true,
  }
)

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema)

export default Image
