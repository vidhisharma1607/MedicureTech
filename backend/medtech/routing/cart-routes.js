import { Router } from "express";

import {addtoCart, getProductByID, getProductFromUSer} from "../controllers/cart-controllers"
const cartRouter = Router();
cartRouter.post("/user/addtocart", addtoCart);
cartRouter.get("/user/cartItem/:id", getProductFromUSer);
cartRouter.get("/cartItem/:id", getProductByID);

export default cartRouter;