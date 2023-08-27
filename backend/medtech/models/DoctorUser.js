import { Schema, model } from "mongoose";
import mongoose from "mongoose";
const doctorUserSchema = new Schema({
  membership: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  //   posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
});

export default model("DoctorUser", doctorUserSchema);
