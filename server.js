const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
let port = 4044;
const passport = require("passport");
const passportSignIn = passport.authenticate("local", {
  session: false,
});

const mongoose = require("mongoose");

const app = express();

// View Engine ejs Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Public Folder
app.use(express.static(path.join(__dirname, "public")));

//Global Vars
app.use(function (req, res, next) {
  res.locals.errors = null;
  next();
});
// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Logging
app.use(logger("dev"));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
require("./authentication/passport");

const mongoURI = "mongodb://localhost/faisal";
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4,
};
mongoose.Promise = global.Promise;
// Create mongo connection
mongoose
  .connect(mongoURI, options)
  .then((connection) => {
    console.log("DB Connection established");
  })
  .catch(async (error) => {
    console.log(error);
  });

app.use(`/admin`, require("./routes/admin"));
app.use(`/patient`, require("./routes/user"));
app.use(`/doctor`, require("./routes/doctor"));
app.use(`/user`, require("./routes/user"));
app.use(`/`, require("./routes/faisal"));

app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
