import mongoose from 'mongoose'

const DATABASE_URL = process.env.DB_URI

const connection = {}

const connectDB = async () => {
  if (connection.isConnected) {
    return
  }
  if (!DATABASE_URL) {
    throw new Error('Please define the DB_URI environment variable inside .env')
  }
  try {
     const db = await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default connectDB
