//imports
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connStr = process.env.mongoURI || '';

async function connectDB() {
    try {
        await mongoose.connect(connStr);
        console.log("MongoDB connected...")
    } catch (err) {
        console.error(err)
        process.exit(1);
    }
}

export default connectDB;