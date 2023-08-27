import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import adminUserRouter from "./routing/admin-user-routes";
import doctorUserRouter from "./routing/doctor-user-routes";
import medicineRouter from "./routing/medicine-routes";
import cors from "cors";
import mrRouter from "./routing/mr-routes";
import cartRouter from "./routing/cart-routes"
const app = express();
dotenv.config();
//middleware

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminUserRouter);
app.use("/doctor", doctorUserRouter);
app.use("/medicines", medicineRouter);
app.use("/mr", mrRouter);
app.use("/cart", cartRouter)

//connections
mongoose
  .connect(
    `mongodb+srv://vidhisharma6658:${process.env.MONGODB_PASSWORD}@cluster0.3xe9ikg.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(
    app.listen(5000, () =>
      console.log(" Connection is succesfull ,listening to port 5000")
    )
  )
  .catch((err) => console.log(err));
// TGc73HZHK3zuVG0t;

// app.listen(5000, () => {
//   console.log("listening to port 5000");
// });
