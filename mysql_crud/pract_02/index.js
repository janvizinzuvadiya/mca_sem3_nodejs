import express from 'express';
import ProductRouter from './route/ProductRouter.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/product',ProductRouter);

app.listen(PORT,()=>
{
    console.log(`server is running at http://localhost:${PORT}`)
});