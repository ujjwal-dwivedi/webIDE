import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject
} from "../controllers/projectController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/createProject", authMiddleware, createProject);
router.post("/getProjects", authMiddleware, getProjects);
router.post("/deleteProject", authMiddleware, deleteProject);
router.post("/getProject", authMiddleware, getProject);
router.post("/updateProject", authMiddleware, updateProject);

export default router;
