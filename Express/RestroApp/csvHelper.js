import csv from "csv-parser";
import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";

export async function readCSV(filePath) {
  // Implement the logic to read CSV file and return the data
  return new Promise((resolve, reject) => {
    const results = [];

    if (!fs.existsSync(filePath)) {
      return resolve(results);
    }

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

export async function writeCSV(filePath, headers, records) {
  const writer = createObjectCsvWriter({
    path: filePath,
    header: headers,
  });
  await writer.writeRecords(records);
}