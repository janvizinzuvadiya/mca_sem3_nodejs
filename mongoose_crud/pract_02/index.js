import express from "express";
import dns from "node:dns";
import StudentRouter from "./route/StudentRouter.js"

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/stud",StudentRouter);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});