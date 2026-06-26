const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());

// Serve all your front-end files
app.use(express.static(path.join(__dirname)));

// Connect to Railway's MongoDB variable
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";
const client = new MongoClient(uri);
let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('sr_studios'); 
        console.log("✅ Successfully connected to MongoDB!");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
    }
}
connectDB();

// GET data for the website
app.get('/api/data', async (req, res) => {
    try {
        const collection = db.collection('portfolio_data');
        let data = await collection.findOne({ id: "main_data" });
        
        // If DB is empty, read data.json and save it to MongoDB
        if (!data) {
            console.log("Database is empty. Initializing from data.json...");
            const rawData = fs.readFileSync('data.json', 'utf8');
            data = JSON.parse(rawData);
            data.id = "main_data";
            await collection.insertOne(data);
        }
        
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to load database" });
    }
});

// POST data from the Admin Dashboard
app.post('/api/data', async (req, res) => {
    try {
        const collection = db.collection('portfolio_data');
        const newData = req.body;
        
        // 🛑 THE FIX: Remove the immutable MongoDB ID before updating
        delete newData._id; 
        
        await collection.updateOne(
            { id: "main_data" }, 
            { $set: newData },
            { upsert: true }
        );
        res.json({ success: true, message: "Data saved globally!" });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Failed to save to database" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});