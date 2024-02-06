import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors'

const app = express();
const port = 3077;
app.use(cors())

// Replace 'your_connection_string', 'your_database_name', and 'your_collection_name' with your actual values
const uri = 'mongodb+srv://nikhilrai8888:xJxZX49AbGHih1Rz@cluster-news.bqcuw07.mongodb.net/?retryWrites=true&w=majority';
const collectionName = 'collection1';
const collectionName2 = 'collectionBiz';
const collectionName3 = 'collectionTech';
const connectToMongoDB = async () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db();
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
};

// Define a route to access the collection
app.get('/collection', async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection(collectionName);

    // Retrieve data from the collection
    const data = await collection.find().toArray();
    
    // Log retrieved data to console
    console.log('Retrieved data:', data);

    // Send data as JSON in the response
    res.json(data);
  } catch (error) {
    console.error('Error retrieving data from the collection:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/collection2', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName2);
  
      // Retrieve data from the collection
      const data2 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data2);
  
      // Send data as JSON in the response
      res.json(data2);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/collection3', async (req, res) => {
    try {
      const db = await connectToMongoDB();
      const collection = db.collection(collectionName3);
  
      // Retrieve data from the collection
      const data3 = await collection.find().toArray();
      
      // Log retrieved data to console
      console.log('Retrieved data:', data3);
  
      // Send data as JSON in the response
      res.json(data3);
    } catch (error) {
      console.error('Error retrieving data from the collection:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
