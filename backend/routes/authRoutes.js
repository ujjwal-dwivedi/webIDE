import { Router } from "express";
import { getUserDetails, login, signUp } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/getUserDetails", authMiddleware, getUserDetails);

export default router;
