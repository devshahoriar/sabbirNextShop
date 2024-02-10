import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: String,
  size : String
})


export default mongoose.models.user || mongoose.model("user", userSchema);