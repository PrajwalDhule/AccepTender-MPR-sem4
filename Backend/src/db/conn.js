const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://MprBois:prajwal36@cluster0.hrf8v.mongodb.net/AccepTender?retryWrites=true&w=majority").then(
    console.log("Connection successfull ")
).catch((e) => {
    console.log(e)
})





