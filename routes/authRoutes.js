import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//register route | menthod POST
router.post("/register", registerController);

//Login route
router.post("/login", loginController);

//forget password
router.post("/forgot-password", forgotPasswordController);

//test routes
router.post("/test", requireSignIn, isAdmin, testController);

//protected route for dashboard page
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route for admin dashboard page
router.get("/admin-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
