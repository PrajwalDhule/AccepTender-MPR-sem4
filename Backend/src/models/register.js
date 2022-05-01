const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    companyname : {
        type : String , 
        required : true
    }, 
    registrationnumber  : {
        type : String , 
        required : true
    },
    email : {
        type : String, 
        required : true
    },
    phonenumber :{
        type :  String,
        required : true
    }, 
    registeredaddress : {
        type : String, 
        required : true
    },
    city : {
        type : String , 
        required : true
    }, 
    state : {
        type : String , 
        required : true 
    }, 
    postalcode : {
        type : String , 
        required : true 
    },
    establishmentyear : {
        type : String , 
        required : true
    }, 
    contactname : {
        type : String , 
        required : true
    }, 
    dob : {
        type : String , 
        required : true
    },
    designation : {
        type : String , 
        required : true
    }, 
    password : {
        type : String , 
        required : true 
    }, 
    confirmpassword : {
        type : String , 
        required : true
    }

    
})

const Register = mongoose.model("Register", RegisterSchema);
module.exports = Register; 