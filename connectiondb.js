
import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://nikhilrai8888:xJxZX49AbGHih1Rz@cluster-news.bqcuw07.mongodb.net/?retryWrites=true&w=majority';
const collectionName = 'collectionTech';
import {tts} from './tech.js'
const finalTech = await tts()




async function uploadToMongoDB() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db();
    const collection = database.collection(collectionName);

    await collection.deleteMany({});
    
    const result = await collection.insertMany(finalTech);
    console.log(`${result.insertedCount} documents inserted successfully!`);
} finally {
    await client.close();
}
}

uploadToMongoDB().catch(console.error);
