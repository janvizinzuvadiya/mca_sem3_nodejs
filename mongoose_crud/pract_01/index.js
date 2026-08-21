import express from "express";
import dns from "node:dns";
import studentRouter from "./route/StudentRouter.js";

dns.setServers(["8.8.8.8","1.1.1.1"]);

const port = 3000;
const app = express();

app.use(express.json());

app.use("/student",studentRouter);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});