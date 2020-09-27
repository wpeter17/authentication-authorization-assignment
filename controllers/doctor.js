const User = require("../models/user");
module.exports = {
  doctorLoginPage: async (req, res, next) => {
    res.render("user", {
      user: "Doctor",
      welcomeMsg: "Welcome to King Faisal Hospital Management System",
    });
  },
  doctorLoginAction: async (req, res, next) => {
    let user = req.user;
    let allUser = await User.find();
    res.render("dashboard", {
      user: user.role,
      users: allUser,
      currentUser: user,
    });
  },
  doctorRegister: async (req, res, next) => {
    let { email, password } = req.body;

    res.render("user", {
      user: "Doctor",
      welcomeMsg: "Welcome to King Faisal Hospital Management System",
    });
  },
};
