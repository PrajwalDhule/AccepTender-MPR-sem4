const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/AcceptTender").then(
    console.log("Connection successfull ")
).catch((e) => {
    console.log(e)
})




