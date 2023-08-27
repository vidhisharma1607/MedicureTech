import { Router } from "express";
import {
  getAllAdminUsers,
  login,
  signup,
} from "../controllers/admin-user-controllers";
const adminUserRouter = Router();
adminUserRouter.get("/", getAllAdminUsers);
adminUserRouter.post("/admin-signup", signup);
adminUserRouter.post("/admin-login", login);
export default adminUserRouter;
