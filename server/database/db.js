import mongoose from "mongoose"

const Connection = () =>{
   
    try {
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log('Database connected succesfully');
    } catch (error) {
        console.log('Error while connecting with the database',error.message)
    }
}

export default Connection;
