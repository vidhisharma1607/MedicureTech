import { Schema, model } from "mongoose";
import mongoose from "mongoose";
const adminUserSchema = new Schema({
  licence: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  medicines: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
  MRs: [{ type: mongoose.Types.ObjectId, ref: "MR" }],
});

export default model("AdminUser", adminUserSchema);
