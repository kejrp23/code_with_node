const   mongoose                = require("mongoose"),
        Schema                  = mongoose.Schema;

const ReviewSchema = new Schema ({
// password and username is omitted form the Schema due to the fact that 
// passport local mongoose is being used. Since it's here it automatacilly has that schema built in
    body : String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


module.exports = mongoose.model("Review", ReviewSchema);
