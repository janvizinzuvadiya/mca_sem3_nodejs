import express from 'express';
import productRouter from './route/productRouter.js'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/product',productRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});