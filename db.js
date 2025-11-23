const {Schema, default:mongoose, Mongoose } = require ("mongoose");
mongoose.connect ("mongodb+srv://saeed:saeedkhan364@cluster0.ohovt4x.mongodb.net/coursera-app")
console.log("Connected to MongoDB");
const ObjectID = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email : { type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String,
});


const adminSchema = new Schema({
    email : { type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String,



});


const courseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imgUrl : String,
    creatorID : ObjectID
});


const purchaseSchema = new Schema({
    userID : ObjectID,
    courseID : ObjectID,



});

const userModel = mongoose.model("user",userSchema);
const courseModel = mongoose.model("course", courseSchema);
const adminModel = mongoose.model("admin", adminSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel : userModel,
    courseModel : courseModel,
    adminModel : adminModel,
    purchaseModel : purchaseModel
}   