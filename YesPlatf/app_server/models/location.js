var mongoose = require('mongoose');
var openningTime = mongoose.Schema({
    days : {type:String,required:true},
    openning : String,
    closing : String,
    closed : {type:Boolean,required:true}
});
var review = mongoose.Schema({
    author : {type:String,required:true},
    rating : {type:Number,required:true,min:0,max:5},
    reviewText : String,
    createdOn : {type:Date,"default":Date.now}
});
var locationSchema = mongoose.Schema({
    name : {type: String,required:true},
    address : String,
    distance: Number,
    rating : {type: Number,"default":0,min:0,max:5},
    facilities : [String],
    openningTime : [openningTime],
    review : [review]
});
mongoose.model('location',locationSchema,'Location');