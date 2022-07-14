const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const Login = require("./models/login");
const Register = require("./models/register");
const Enroll = require("./models/enrollment");
const tc = require("./models/TenderCreation");
const Apply = require("./models/apply");

const port = process.env.PORT || 8000;

const static_pathh = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_pathh));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/f2", (req, res) => {
  res.render("f2");
});
app.post("/f2", async (req, res) => {
  try {
    const enrollDetails = new Enroll(req.body);
    await enrollDetails.save();
    res.status(201).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/LoginF", (req, res) => {
  res.render("LoginF");
});
app.get("/register", (req, res) => {
  res.render("Rform");
});
app.post("/register", async (req, res) => {
  try {
    const RegisterDetails = new Register(
      req.body
    );
    const registered = await RegisterDetails.save();
    res.status(201).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/BidderProfile", async (req, res) => {
  const getregister = await Register.find().sort({ establishmentyear: 1 });
  const reg = getregister[0];
  res.render("BidderProfile", { reg });
});

// sending data of user to database
app.post("/LoginF", async (req, res) => {
  try {
    const LoginDetails = new Login({
      username: req.body.username,
      password: req.body.password,
      value: req.body.login,
    });

    const loggedin = await LoginDetails.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/table", (req, res) => {
  res.render("table");
});
app.get("/tenderinfo", (req, res) => {
  res.render("tenderinfo");
});
app.get("/TenderCreation", (req, res) => {
  res.render("TenderCreation");
});
app.get("/BidderList", async (req, res) => {
  const Biddilist = await Apply.find();
  console.log(Biddilist);
  res.render("BidderList", { Biddilist });
});
app.post("/TenderCreation", async (req, res) => {
  try {
    const tCreation = new tc(req.body);
    await tCreation.save();
    res.status(201).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/StaticR", async (req, res) => {
  const Registrationdetails = await Register.find({ companyname: "tsec2" });
  const reg = Registrationdetails[0];

  res.render("StaticR", { reg });
});
app.post("/StaticR", async (req, res) => {
  try {
    const application = new Apply(req.body);
    await application.save();
    console.log(req.body);
    res.status(201).render("f2");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
