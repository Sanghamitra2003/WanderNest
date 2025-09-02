const { required } = require("joi");
const mongoose = require("mongoose");
const {Schema} = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose); //  automatically adds username, password and salt to our user
module.exports = mongoose.model('User', userSchema);