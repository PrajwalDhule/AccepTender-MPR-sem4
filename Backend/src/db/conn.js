const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/AccepTender").then(
    console.log("Connection successfull ")
).catch((e) => {
    console.log("Connection failed")
})




