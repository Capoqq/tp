import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:[true,"Necesita un nombre"]
    },
    password:{
        type:String,
        require:[true,"Necesita una contrasena"]
    },
    typeUser:{
        type:Number
    }

})
export default mongoose.models.User || mongoose.model('User', userSchema)