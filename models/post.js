const   mongoose                = require("mongoose"),
        Schema                  = mongoose.Schema;

const PostSchema = new Schema ({
// password and username is omitted form the Schema due to the fact that 
// passport local mongoose is being used. Since it's here it automatacilly has that schema built in
    title : String,
    price : String,
    description: String,
    images: [ String ],
    location: String,
    lat: Number,
    lng: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    reveiws: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
    }
    ]
});




module.exports = mongoose.model("Post", PostSchema);



