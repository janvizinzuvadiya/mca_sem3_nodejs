import studcontroller from "../controller/studcontroller.js";
import express from 'express';

const router = express.Router();

router.get('/',studcontroller.getallstudent);
router.get('/:id',studcontroller.getstudent);
router.put('/:id',studcontroller.updatestudent);
router.delete('/:id',studcontroller.deletestudent);
router.post('/',studcontroller.addstudent);

export default router;
