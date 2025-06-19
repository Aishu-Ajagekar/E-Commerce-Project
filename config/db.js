import mongoose from 'mongoose';
import colors from 'colors';
import env from 'dotenv';

//configure dotenv file
env.config();

const connectDB = async() =>{
    try {
        
        const mongoDBConnString = process.env.DB_URL ;
        const mongoConn = await mongoose.connect(mongoDBConnString);
        console.log(`Connected to mongoDB : ${mongoConn.connection.host}`.bgMagenta .white);

    } catch (error) {
        console.log(`Error Connecting to MongoDB : ${error}`.bgRed .white);
        // process.exit(1);
    }
}

// module.exports = connectDB
export default connectDB;