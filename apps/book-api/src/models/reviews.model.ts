import * as mongoose from 'mongoose';

const reviewsModel=new mongoose.Schema({
        review_id:{
            type:String
        },
        reviewer:{
            type:String
        },
        message:{
            type:String
        }
});

module.exports=mongoose.model('Reviews',reviewsModel);