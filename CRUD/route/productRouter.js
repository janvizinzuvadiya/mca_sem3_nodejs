import express from 'express'
import productController from '../controller/productController.js'

const router = express.Router();

router.get('/list',productController.getAllProducts);
router.post('/store',productController.storeProducts);

export default router;