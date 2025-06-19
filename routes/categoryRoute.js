import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  creatCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getSingleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
// import { rateLimit } from "express-rate-limit";
const router = express.Router();

//this is the concept of throttling used for to reduce the load of server and to protect our endpoint. restricts the user to hits request only 3 times in 24 hours
// const limiter = rateLimit({
//   windowMs: 24 * 60 * 60 * 1000, // 24 hours
//   limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
//   message: "To many request send",
//   legacyHeaders : false,
// });

//create new category route
router.post(
  "/create-categroy",
  requireSignIn,
  isAdmin,
  creatCategoryController
);

//route for update-category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//route for get all category
router.get("/all-category", getAllCategoryController);

//get a single category by slug
router.get("/single-category/:slug", getSingleCategoryController);

//create delete route for category
router.delete("/delete-category/:id", deleteCategoryController);
export default router;
