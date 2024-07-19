const mongose = require("mongoose")

const UserSchema = new mongose.Schema({
    name:String,
    email:String,
    age:Number
})

const UserModel = mongose.model("users",UserSchema)
module.exports = UserModel