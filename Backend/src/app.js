const express = require("express");
const app = express();
const path = require('path');
const hbs = require("hbs");
require("./db/conn");
const Login = require("./models/login");
const Register = require("./models/register");

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
app.get("/register", (req, res) => {
   res.render("Rform");
} )
app.post("/register", async (req, res) => {
   try{
      const RegisterDetails = new Register({
         companyname : req.body.companyname, 
         registrationnumber : req.body. registrationnumber, 
         email : req.body. email, 
         phonenumber : req.body.phonenumber, 
         registeredaddress : req.body. registeredaddress, 
         city : req.body. city, 
         state : req.body. state, 
         dob : req.body.dob,
         postalcode : req.body. postalcode, 
         contactname : req.body.contactname, 
         establishmentyear : req.body. establishmentyear, 
         designation : req.body. designation, 
         password : req.body. password, 
         confirmpassword : req.body. confirmpassword,  
      })
      const registered = await RegisterDetails.save();
      res.status(201).send(req.body);
   }catch(error){
      res.status(400).send(error);
   }
   
} )

// sending data of user to database 
app.post("/LoginF", async (req, res) => {
  try {
    const LoginDetails = new Login({
        username : req.body.username,
        password : req.body.password
    })       
   const loggedin = await LoginDetails.save();
   res.status(201).send(req.body);
   
      
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

