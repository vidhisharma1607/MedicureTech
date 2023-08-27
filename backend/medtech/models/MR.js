import mongoose, { model } from "mongoose";

const MRSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: String,
    required: true,
  },
  employee: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  user: {
    // type: mongoose.Types.ObjectId,
    // ref: "User",
    // required: true,
    type: mongoose.Types.ObjectId,
    ref: "AdminUser",
    required: true,
  },
});
export default mongoose.model("MR", MRSchema);
