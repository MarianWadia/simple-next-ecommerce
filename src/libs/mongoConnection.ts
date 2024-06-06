import mongoose from "mongoose";

export const connectMongoDB = async () =>{
    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }

    return await mongoose.connect(process.env.MONGO_URI!)
    .then(()=>{
        console.log("Connected to MongoDB")
    }).catch(err => 
            console.log(err)
    );
}