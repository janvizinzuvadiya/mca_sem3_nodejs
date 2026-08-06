import express from 'express';
import bookController from '../controller/bookController.js';

const route = express.Router();

route.get('/list',bookController.ListBooks)

route.post('/add',bookController.AddBooks)

route.put('/update/:id',bookController.UpdateBooks)

route.delete('/delete/:id',bookController.DeleteBooks)

export default route;
