import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getAllProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import formidableMiddleware from "express-formidable";

const router = express.Router();

//add new product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidableMiddleware(),
  createProductController
);

//update product
router.put("/update-product/:pid", requireSignIn, isAdmin,formidableMiddleware(), updateProductController);

//get all product
router.get("/get-product", getAllProductController);

//get single product by slug
router.get("/get-product/:slug", getSingleProductController);

//get photo by id
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:id", deleteProductController);

export default router;
