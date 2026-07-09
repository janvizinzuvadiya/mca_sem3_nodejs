import express from 'express'
import multer from 'multer';
import fs from 'fs';
import path, { matchesGlob } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static("public"));


const storage = multer.diskStorage({
    destination : function(req,file,cb)
    {
        // const subject = req.body.subject.trim();
        const subject = req.body && req.body.subject ? req.body.subject.trim() : "General";
        const uploadpath = path.join(__dirname,"Assignment",subject);
        if(!fs.existsSync(uploadpath))
        {
            fs.mkdirSync(uploadpath, {recursive: true});
        }
        cb(null,uploadpath);
    },
    filename: function (req,file,cb)
    {
        cb(null,Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage
});
app.post("/upload",upload.single("assignment"), (req,res)=>{
    console.log(req.file);
    res.send("File uploaded successfully");
});


app.listen(port, () => {
    console.log(`Server Started on port http://localhost:${port}`);
});