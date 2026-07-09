import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { readCSV, writeCSV } from "./csvHelper.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, "data", "restaurants.csv");

const app = express();
const port = 3001;
    
app.use(express.json());

app.get("/restaurants", async (req, res) => {
  // Example usage of writeCSV function
  //const filePath = "restaurants.csv";
  const data = await readCSV(file);
  //console.log(data);
  res.json({ message: "Success", data: data });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

