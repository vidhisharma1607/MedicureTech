import { Router } from "express";
import {
  getAllDoctorUsers,
  signup,
  login,
} from "../controllers/doctor-user-controllers";
// import {
//   getAllAdminUsers,
//   login,
//   signup,
// } from "../controllers/admin-user-controllers";
const doctorUserRouter = Router();
doctorUserRouter.get("/", getAllDoctorUsers);
doctorUserRouter.post("/doctor-signup", signup);
doctorUserRouter.post("/doctor-login", login);
export default doctorUserRouter;
