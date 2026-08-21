import express from 'express';
import mongoose from 'mongoose';
import dns from 'node:dns';

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const PORT = 3000;
const app = express();

app.use(express.json());

const mongo_url = "mongodb+srv://zinzuvadiyajanvi4_db_user:LvzuH9MpcMxbqQj0@cluster0.s3l6uab.mongodb.net/node_db"

if (!mongo_url) {
    console.error("Please provide MongoDB URL")
    process.exit(1);
}

mongoose.connect(mongo_url).then(() => {
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.error("MongoDB connection failed", error);
    process.exit(1);
});

const BooksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Book = mongoose.model("Books", BooksSchema);

app.get('/Books', async (req, res) => {
    try {
        const obj = await Book.find();
        res.status(200).json({ message: "Books fetched successfully", data: obj });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching books", error });
    }
});

app.post('/Books', async (req, res) => {

    try {
        // const obj = new Book(req.body);
        // await obj.save();

        const obj = await Book.create(req.body);

        res.status(201).json({ message: "Book created successfully", data: obj });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating book", error });
    }

});

app.put('/Books/:id', async (req, res) => {

    try {
        const obj = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!obj) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book updated successfully", data: obj });
    }
    catch (error) {
        res.status(500).json({ message: "Error updating book", error });
    }
});

app.delete('/Books/:id', async (req, res) => {
    try {
        const obj = await Book.findByIdAndDelete(req.params.id);

        if (!obj) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted successfully", id: req.params.id });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting book", error });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});