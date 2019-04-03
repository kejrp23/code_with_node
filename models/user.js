const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose"),
        Schema                  = mongoose.Schema;

const UserSchema = new Schema ({
// password and username is omitted form the Schema due to the fact that 
// passport local mongoose is being used. Since it's here it automatacilly has that schema built in
    email : String,
    image : String,
    posts : [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
    }
    ]
   
    
});


UserSchema.plugin(passportLocalMongoose);



module.exports = mongoose.model("User", UserSchema);
