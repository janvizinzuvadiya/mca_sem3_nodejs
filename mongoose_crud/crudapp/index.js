import express from 'express';
import mongoose from 'mongoose';
import dns from 'node:dns';

const mongo_url = "mongodb+srv://zinzuvadiyajanvi4_db_user:LvzuH9MpcMxbqQj0@cluster0.s3l6uab.mongodb.net/node_db"

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/Books', (req, res) => {
    res.json({ message: 'Getting All Books' });
});

app.post('/Books', (req, res) => {
    res.json({ message: 'Creating A Book', data: req.body });
});

app.put('/Books/:id', (req, res) => {
    res.json({ message: 'Updating A Book', id: req.params.id, data: req.body });
});

app.delete('/Books/:id', (req, res) => {
    res.json({ message: 'Deleting A Book', id: req.params.id });
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});