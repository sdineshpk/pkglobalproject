const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dinesh:Di&9814756026@cluster0.wwxsa.mongodb.net/bookdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


module.exports=client;