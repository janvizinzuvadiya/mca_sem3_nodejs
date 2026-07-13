import express from "express";
import categoryController from "../controller/categoryController.js";

const router = express.Router();

router.get("/list", categoryController.getCategoryList);
router.post("/store", categoryController.storeCategory);

export default router;