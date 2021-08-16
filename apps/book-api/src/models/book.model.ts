import * as mongoose from "mongoose";

const uri = "mongodb+srv://dinesh:Di9814756026@cluster0.wwxsa.mongodb.net/bookdb?retryWrites=true&w=majority";

const options:mongoose.ConnectOptions={
    //useNewUrlParser: true
    useCreateIndex:true
};

mongoose.connect(uri,options, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

export interface Reviews extends mongoose.Document {
    review_id: string;
    reviewer: Array<string>;
    message:string;
}

export interface IBook extends mongoose.Document {
  title: string;
  author: Array<string>;
  price:string;
  reviews:Array<Reviews>;
  publiser:{
      publisher_id:string,
      name:string,
      location:string
  };
}

export const BookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:[{type:String,required:true}],
    price:{
        type:String,
        required:true
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
    }],
    publisher:{
        publisher_id:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        }
    }
});

const Book = mongoose.model<IBook>("Book", BookSchema);
export default Book;