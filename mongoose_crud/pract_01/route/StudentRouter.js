import StudentController from "../controller/studentController.js";
import express from 'express';

const route = express.Router();

route.post("/",StudentController.addStudent);
route.get("/",StudentController.getAllStudent);
route.get("/:id",StudentController.getStudentById);
route.put("/:id",StudentController.updateStudent);
route.delete("/:id",StudentController.deleteStudent);

export default route;