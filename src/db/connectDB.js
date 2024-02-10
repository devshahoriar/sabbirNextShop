import mongoose from "mongoose"


const DATABASE_URL = process.env.DB_URI

if (!DATABASE_URL) {
  throw new Error(
    'Please define the DB_URI environment variable inside .env.local'
  )
}

const connectDB = async () => {
  if(mongoose.connections[0]) return mongoose.connections[0]
  try {
    return await mongoose.connect(DATABASE_URL)
  } catch (error) {
    throw error
  }
}

export default connectDB
