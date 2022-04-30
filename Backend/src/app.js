const express = require("express");
const app = express();
const path = require('path');
const hbs = require("hbs");
require("./db/conn");
const Login = require("./models/login");

const port = process.env.PORT || 3000;

const static_pathh = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.static(static_pathh));
app.set("view engine" , "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
   res.render("index")
} )
app.get("/index", (req, res) => {
   res.render("index")
} )
app.get("/contact", (req, res) => {
   res.render("contact")
} )
app.get("/f2", (req, res) => {
   res.render("f2")
} )
app.get("/LoginF", (req, res) => {
   res.render("LoginF")
} )

// sending data of user to database 
app.post("/LoginF", async (req, res) => {
  try {
    const LoginDetails = new Login({
        username : req.body.username,
        password : req.body.password
    })       
   const loggedin = await LoginDetails.save();
   res.status(201).render("index");
      
  } catch (error) {
      res.status(400).send(error);
  }
} )
app.get("/StaticR", (req, res) => {
   res.render("StaticR")
} )
app.get("/table", (req, res) => {
   res.render("table")
} )
app.get("/tenderinfo", (req, res) => {
   res.render("tenderinfo")
} )
app.get("/TenderCreation", (req, res) => {
   res.render("TenderCreation")
} )

app.listen(port, ()=> {
    console.log(`app is running at ${port}`);
})

