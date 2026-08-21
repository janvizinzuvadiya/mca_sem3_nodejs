import StudentController from "../controller/StudentController.js";
import express from "express";

const router = express.Router();

router.post("/",StudentController.addStudent);
router.get("/",StudentController.getAllStudent);
router.get("/:id",StudentController.getStudent);
router.put("/:id",StudentController.updateStudent);
router.delete("/:id",StudentController.deleteStudent);

export default router;
