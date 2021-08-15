import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://dinesh:Di&9814756026@cluster0.wwxsa.mongodb.net/bookdb?retryWrites=true&w=majority";
export const client = new MongoClient(uri);//{ useNewUrlParser: true, useUnifiedTopology: true }

// import * as mongoose from 'mongoose';

// mongoose.connect(uri,{ useNewUrlParser: true},()=>{
//     console.log("connect database")
// });

// export const db=mongoose.connection;

