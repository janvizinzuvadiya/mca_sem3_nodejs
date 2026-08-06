import ProductController from '../controller/ProductController.js';
import express from 'express';

const router = express.Router();

router.get('/all',ProductController.getAllProducts);
router.post('/get/:id',ProductController.getProductById);
router.post('/add',ProductController.insertProduct);
router.put('/update/:id',ProductController.updateProduct);
router.delete('/delete/:id',ProductController.deleteProduct);

export default router; 