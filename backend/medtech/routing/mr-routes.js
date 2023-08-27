import { Router } from "express";
import {
  addMR,
  deleteMR,
  getMRById,
  updateMR,
  getMRbyAdmin,
  getAllMRs,
} from "../controllers/mr-controllers";
const mrRouter = Router();
mrRouter.post("/", addMR);
mrRouter.get("/", getAllMRs);
mrRouter.get("/:id", getMRById);
mrRouter.put("/:id", updateMR);
mrRouter.delete("/admin/MRid/:id", deleteMR);
mrRouter.get("/admins/:id", getMRbyAdmin);
export default mrRouter;
