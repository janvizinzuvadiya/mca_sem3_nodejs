import express from 'express';
import dns from 'node:dns';
import router from './route/studrouter.js';

const PORT = 3000;
const app = express();
dns.setServers(["8.8.8.8","1.1.1.1"]);

app.use(express.json());
app.use('/stud',router);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

