import mongoose from "mongoose"

const Connection = () =>{
    const DB_URI = 'mongodb://Akash:spvaaki8@ac-p1kgbvo-shard-00-00.ibp44ic.mongodb.net:27017,ac-p1kgbvo-shard-00-01.ibp44ic.mongodb.net:27017,ac-p1kgbvo-shard-00-02.ibp44ic.mongodb.net:27017/?ssl=true&replicaSet=atlas-jf3jvv-shard-0&authSource=admin&retryWrites=true&w=majority'
    try {
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log('Database connected succesfully');
    } catch (error) {
        console.log('Error while connecting with the database',error.message)
    }
}

export default Connection;