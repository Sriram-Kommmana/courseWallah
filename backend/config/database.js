import mongoose from 'mongoose';

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Mongo DB connected");
        console.log(`DB Host: ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MongoDb connection error ", error);
        process.exit(1);
    }
}

export default connectDB