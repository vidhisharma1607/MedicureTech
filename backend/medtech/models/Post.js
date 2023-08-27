import mongoose, { model } from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salts: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  credPoints: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "AdminUser",
    required: true,
    // type: mongoose.Types.ObjectId,
    // ref: "User",
    // required: true,
  },
});

export default mongoose.model("Post", medicineSchema);
