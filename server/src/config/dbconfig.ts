import mongoose from "mongoose";

const connectDb = async() =>{
    try {
        const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
        console.log("Database has been Connected with : " , connect.connection.host , connect.connection.name);
    } catch (error) {
        console.log (error);
        process.exit(1)  // to exit the process if found error
    }
}

export default connectDb 