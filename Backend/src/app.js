const express = require("express");
const app = express();
const path = require('path');
const hbs = require("hbs");
require("./db/conn");

const port = process.env.PORT || 3000;

const static_pathh = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.static(static_pathh));
app.set("view engine" , "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
   res.render("index")
} )

app.listen(port, ()=> {
    console.log(`app is running at ${port}`);
})

