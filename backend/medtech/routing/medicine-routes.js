import { Router } from "express";

import {
  addMedicine,
  deleteMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicine,
} from "../controllers/medicine-controllers";
// import {
//   getAllAdminUsers,
//   login,
//   signup,
// } from "../controllers/admin-user-controllers";
const medicineRouter = Router();
medicineRouter.get("/", getAllMedicines);
medicineRouter.get("/:id", getMedicineById);
medicineRouter.delete("/:id", deleteMedicine);
medicineRouter.put("/:id", updateMedicine);
medicineRouter.post("/", addMedicine);

// medicineRouter.post("/doctor-login", login);
export default medicineRouter;
