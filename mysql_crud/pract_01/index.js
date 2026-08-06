import express from 'express'
import bookRoute from './route/bookRoute.js'

const port = 3000;
const app = express();

app.use(express.json());

app.use('/product',bookRoute)

app.listen(port,()=>
{
    console.log(`server is running on http://localhost:${port}`);
});